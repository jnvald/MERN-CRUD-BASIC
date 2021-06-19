const mongoose = require('mongoose');


mongoose.connect('mongodb+srv://jgonzalez_user:03wuMvDM9AU0nooC@fake-api.11zk0.mongodb.net/products_db?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('We are connecting with database, so so cool!'))
.catch(err => console.error('Ha fallado todo oh no!!!', err))