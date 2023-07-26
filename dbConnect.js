const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://SaurabhSingh028:Singhsaab028@cluster0.5v6lbl3.mongodb.net/BudgetBuddy' , {useNewUrlParser : true , useUnifiedTopology : true})

const connection = mongoose.connection

connection.on('error', err => console.log(err))

connection.on('connected' , () => console.log('Mongo DB Connection Successfull'))