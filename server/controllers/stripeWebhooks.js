// import stripe from 'stripe';
// import Booking from '../models/Booking.js'


// // API to handle Stripe Webhooks


// export const stripeWebhooks = async (request, response) => {
//     // Stripe Gateway Intialize 
//     const stripeInstance = new stripe(process.env.STRIPE_SECRET_KEY)
//     const sig = request.headers['stripe-signature'];
//     let event;

//     try {
//         event = stripeInstance.webhooks.constructEvent(request.body, sig, process.env.STRIPE_WEBHOOK_SECRET)
//     } catch (error) {
//         return response.status(400).send(`Webhook Error: ${error.message}`)
//     }

//     // Handle the event
//     if (event.type === 'payment_intent.succeeded') {
//         const paymentIntent = event.data.object;
//         const paymentIntentId = paymentIntent.id;


//         // Getting Session Metadata
//         const session = await stripeInstance.checkout.sessions.list({
//             payment_intent: paymentIntentId,
//         });

//         const {bookingId} = session.data[0].metadata;
//         // Mark Payment as Paid
//         await Booking.findByIdAndUpdate(bookingId, {isPaid:true, paymentMethod: 'Stripe'})

//     } else {
//         console.log("Unhandled event type :", event.type);
        
//     }
//     response.json({received: true})
// } 




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

    // ✅ Best event to check if payment completed
    if (event.type === 'checkout.session.completed') {
        const session = event.data.object

        // Get bookingId from metadata
        const { bookingId } = session.metadata

        if (bookingId) {
            await Booking.findByIdAndUpdate(bookingId, {
                isPaid: true,
                paymentMethod: 'Stripe',
                status: 'confirmed', // optional
            })
            console.log(`Booking ${bookingId} marked as paid ✅`)
        } else {
            console.error("No bookingId found in session metadata ❌")
        }
    } else {
        console.log("Unhandled event type:", event.type)
    }

    response.json({ received: true })
}
