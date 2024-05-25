// server/index.js
const express = require('express');
const Razorpay = require('razorpay');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const app = express();
app.use(bodyParser.json());

// Enable CORS
app.use(cors());

const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_SECRET,
});

// server/index.js
// server/index.js
app.post('/create-subscription', async (req, res) => {
    const { planId } = req.body;
    let planDetails;
    switch (planId) {
        case 'basic_3_months':
            planDetails = {
                plan_id: 'plan_OEE4zwJkPuEj0K', // Replace with your plan IDs
                customer_notify: 1,
                total_count: 3,
            };
            break;
        case 'silver_6_months':
            planDetails = {
                plan_id: 'plan_OEE6Qc8IZKzXao',
                customer_notify: 1,
                total_count: 6,
            };
            break;
        case 'gold_1_year':
            planDetails = {
                plan_id: 'plan_OEE7YWLEXlNqMI',
                customer_notify: 1,
                total_count: 12,
            };
            break;
        default:
            return res.status(400).json({ error: 'Invalid plan ID' });
    }
    
    try {
        const subscription = await razorpay.subscriptions.create(planDetails);
        res.json(subscription);
    } catch (error) {
        console.error('Error creating subscription:', error);
        res.status(500).json({ error: error.message });
    }
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
