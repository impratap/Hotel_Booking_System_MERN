# Hotel Booking System

A full-stack web application for booking hotels, featuring user authentication, hotel search, booking management, and payment processing. The application is built with a modern React frontend and an Express.js backend, utilizing various libraries and services for a seamless user experience.


## Live Demo

Check out the live application here: [Hotel Booking System](https://quickstay-hotel-booking-psi.vercel.app)



## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Environment Variables](#environment-variables)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Features
- **User Authentication**: Secure sign-up, sign-in, and user management using Clerk.
- **Hotel Search**: Browse and filter hotels with details like pricing and availability.
- **Booking Management**: Create, view, and manage hotel bookings.
- **Payment Processing**: Secure payments powered by Stripe.
- **Image Uploads**: Hotel images stored and served via Cloudinary.
- **Email Notifications**: Booking confirmations and updates sent via Nodemailer.
- **Responsive Design**: Mobile-friendly UI built with Tailwind CSS and React.

## Technologies Used

### Frontend
- **React**: JavaScript library for building user interfaces.
- **Vite**: Fast frontend build tool and development server.
- **React Router**: Client-side routing for navigation.
- **Axios**: HTTP client for API requests.
- **Clerk**: Authentication and user management.
- **React Hot Toast**: Toast notifications for user feedback.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **ESLint**: Linting for code quality and consistency.

### Backend
- **Express.js**: Web framework for Node.js.
- **MongoDB (Mongoose)**: Database for storing hotel, user, and booking data.
- **Clerk**: Backend authentication integration.
- **Cloudinary**: Image storage and management.
- **Multer**: Middleware for handling file uploads.
- **Stripe**: Payment processing.
- **Nodemailer**: Email sending for notifications.
- **CORS**: Cross-Origin Resource Sharing for secure API access.
- **Dotenv**: Environment variable management.
- **Nodemon**: Development server with auto-restart.

## Prerequisites
- **Node.js**: Version 18.x or higher.
- **MongoDB**: A running MongoDB instance (local or cloud, e.g., MongoDB Atlas).
- **Cloudinary Account**: For image storage.
- **Stripe Account**: For payment processing.
- **Email Service**: SMTP service (e.g., Gmail, SendGrid) for Nodemailer.
- **Clerk Account**: For authentication setup.

## Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/hotel-booking-system.git
   cd hotel-booking-system