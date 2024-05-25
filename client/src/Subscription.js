// client/src/Subscription.js
import React from 'react';
import axios from 'axios';

const Subscription = () => {
    const createSubscription = async (planId) => {
        try {
            const response = await axios.post(`${process.env.REACT_APP_API_URL}/create-subscription`, { planId });
            initiatePayment(response.data, planId);
        } catch (error) {
            console.error('Error creating subscription:', error);
            alert('Error creating subscription');
        }
    };

    const initiatePayment = (subscription, planId) => {
        const options = {
            key: process.env.REACT_APP_RAZORPAY_KEY_ID,
            subscription_id: subscription.id,
            name: "C-Suite Academy",
            description: "Subscription Payment",
            handler: function (response) {
                alert(`Payment successful! Subscription ID: ${subscription.id}`);
                redirectToPlanPage(planId);
            },
            theme: {
                color: "#3399cc"
            },
        };

        const rzp1 = new window.Razorpay(options);
        rzp1.open();
    };

    const redirectToPlanPage = (planId) => {
        // Manually change window location to redirect to the appropriate plan page
        switch (planId) {
            case 'basic_3_months':
                window.location.href = '/basic-plan';
                break;
            case 'silver_6_months':
                window.location.href = '/silver-plan';
                break;
            case 'gold_1_year':
                window.location.href = '/gold-plan';
                break;
            default:
                break;
        }
    };

    return (
        <div>
            <h1>Subscription Plans</h1>
            <div>
                <h2>Basic Plan (3 Months)</h2>
                <button onClick={() => createSubscription('basic_3_months')}>Subscribe</button>
            </div>
            <div>
                <h2>Silver Plan (6 Months)</h2>
                <button onClick={() => createSubscription('silver_6_months')}>Subscribe</button>
            </div>
            <div>
                <h2>Gold Plan (1 Year)</h2>
                <button onClick={() => createSubscription('gold_1_year')}>Subscribe</button>
            </div>
        </div>
    );
};

export default Subscription;
