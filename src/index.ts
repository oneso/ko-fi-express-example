import express from 'express';

import { kofi } from '@ko-fi/express';

const app = express();

// Enable req body parsing
app.use(
    express.urlencoded({
        extended: true,
    })
);

kofi(app, {
    onData: (data, req) => {
        console.log('onData called');
    },
    onCommission: (data, req) => {
        console.log('onCommission called');
    },
    onDonation: (data, req) => {
        console.log('onDonation called');
    },
    onShopOrder: (data, req) => {
        console.log('onShopOrder called');
    },
    onSubscription: (data, req) => {
        console.log('onSubscription called');
    },
});

app.listen(3000);
