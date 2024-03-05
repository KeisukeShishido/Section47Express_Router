const express = require('express');
const app = express();
const shelterRoutes = require('./routes/shelters');
const dogRouts = require('./routes/dogs');
const adminRoutes = require('./routes/admin');

app.use('/shelters', shelterRoutes);
app.use('/dogs', dogRouts);
app.use('/admin', adminRoutes);

app.listen(3000, () => {
    console.log('ポート3000でリクエスト受付中...');
});