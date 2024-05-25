const Razorpay = require('razorpay');

require("dotenv").config()

var instance = new Razorpay({
    key_id: process.env.RaZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_SECRET
});

instance.plans.create({
    period: "yearly",
    interval: 1,
    item: {
        name: "Test plan - Weekly",
        amount: 999,
        currency: "INR",
        description: "Description for the test plan"
    },
    
}).then((response) => {
    console.log('Success:', response);
    console.log('Plan Id:', response.id);
}).catch((error) => {
    console.log('Failure:', error);
});



