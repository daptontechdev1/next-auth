'use client'

import { loadStripe } from '@stripe/stripe-js'
import axios from '@/lib/axios'

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_KEY) // Public Stripe key

export default function Checkout() {

    const handleCheckout = async () => {
        const stripe = await stripePromise

        try {
            // Call the Laravel API to create a checkout session
            const { data } = await axios.post('http://localhost:8000/api/create-checkout-session', {
                price_id: 'price_1PyxaQSG5ouVL4GYWcnt55Kb', // Price ID for the product
            })

            // Redirect to Stripe Checkout
            const { error } = await stripe.redirectToCheckout({
                sessionId: data.id,
            })

            if (error) {
                console.error('Stripe error:', error)
            }
        } catch (err) {
            console.error('Error in creating checkout session:', err)
        }
    }

    return (
        <div>
            <h1>Checkout</h1>
            <button onClick={handleCheckout}>Pay Now</button>
        </div>
    )
}
