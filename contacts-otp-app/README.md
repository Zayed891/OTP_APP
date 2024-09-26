# Contacts OTP Web App

A simple contacts web app built with **React** and **Vite**, that allows users to view a list of contacts, send an OTP via SMS to a selected contact, and view a message history of sent OTPs.

## Features

- View a list of contacts (static JSON data).
- View details of each contact (name and phone number).
- Send an OTP (One-Time Password) to a selected contact's phone number via SMS.
- View a history of sent OTP messages.

## Tech Stack

- **Frontend:** React.js, Tailwind CSS
- **Bundler:** Vite
- **SMS Integration:** Twilio, Vonage, Msg91, or any other SMS service provider (with trial account)

## Project Setup

### Prerequisites

Make sure you have Node.js and npm installed.

### Installation

1. Clone the repository:
   ```bash
   https://github.com/Zayed891/OTP_APP.git
   ```

2. Navigate to the project directory:
   cd contacts-otp-app

3. Install dependencies:
   npm install

4. Install Tailwind CSS:
   npm install -D tailwindcss postcss autoprefixer
   npx tailwindcss init -p

5. Install react-router-dom for routing:
   npm install react-router-dom

6. Run the Project
   npm run dev

   https://otpapp45.netlify.app/
