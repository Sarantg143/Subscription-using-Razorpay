// client/src/App.js
import React from 'react';
import Subscription from './Subscription';
import BasicPlan from './BasicPlan';
import SilverPlan from './SilverPlan';
import GoldPlan from './GoldPlan';

const App = () => {
    // Parse the current URL path to determine which page to render
    const getCurrentPage = () => {
        const path = window.location.pathname;
        if (path === '/basic-plan') {
            return <BasicPlan/>;
        } else if (path === '/silver-plan') {
            return <SilverPlan/>;
        } else if (path === '/gold-plan') {
            return <GoldPlan/>;
        } else {
            return <Subscription />;
        }
    };

    return (
        <div>
            {getCurrentPage()}
        </div>
    );
};

export default App;
