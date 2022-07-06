const mongoose  = require ('mongoose');

mongoose.connect('mongodb://localhost/recipes',{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(()=> console.log('Connection established with the database'))
    .catch(err => console.log('Something went completely wrong connecting to the database', err))