const mongoose=require ('mongoose');

mongoose.connect('mongodb://0.0.0.0/bookstore')
.then(()=>{
    console.log('Connected to Database');
})
.catch(()=>{
    console.log('error')
})