import stripe from 'stripe'
import Booking from '../models/Booking.js'

const stripeInstance = new stripe(process.env.STRIPE_SECRET_KEY)

export const stripeWebhooks = async (request, response) => {
  const sig = request.headers['stripe-signature']
  let event

  try {
    event = stripeInstance.webhooks.constructEvent(
      request.body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET
    )
  } catch (err) {
    return response.status(400).send(`Webhook Error: ${err.message}`)
  }

  // ✅ Handle checkout.session.completed instead of payment_intent.succeeded
  if (event.type === 'checkout.session.completed') {
    const session = event.data.object

    // Extract metadata
    const { bookingId } = session.metadata

    if (bookingId) {
      await Booking.findByIdAndUpdate(bookingId, {
        isPaid: true,
        paymentMethod: 'Stripe',
        status: 'confirmed', // optional, if you want to auto-confirm
      })
      console.log(`✅ Booking ${bookingId} marked as paid`)
    } else {
      console.error('❌ No bookingId in session metadata')
    }
  } else {
    console.log(`Unhandled event type: ${event.type}`)
  }

  response.json({ received: true })
}
