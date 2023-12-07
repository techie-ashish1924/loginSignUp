const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const port = 8080;

app.use(cors());
app.use(bodyParser.json());



mongoose.connect('mongodb+srv://ashishsengar895488:bsTd11AVM24vP0iX@cluster0.lnahsvl.mongodb.net/?retryWrites=true&w=majority').then(function() {
    console.log('Connected to MongoDB');
}).catch(function(err) {
    console.log(err);
});


app.use(cors());
app.use(express.static('static'))

app.use(bodyParser.json());

const userSchema = mongoose.Schema({
    username: String,
    password: String,
    confirmpassword: String,
    email: String
})

const userModel = mongoose.model("UserData", userSchema);


app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});



app.post('/signup', async(req, res) => {
    let user = new userModel();
    user.username = req.body.username;
    user.password = req.body.password;
    user.confirmpassword = req.body.c_password;
    user.email = req.body.email;
    const resulted_doc = await user.save();



    //res.send("Hello");
    res.json(req.body);
    //console.log(resulted_doc);
    //res.send(resulted_doc);
})

app.post('/login', async(req, res) => {

    try {
        let user = req.body.email;
        let pass = req.body.password;

        //console.log(`${user} and password is ${pass}`);

        //dhund rahe he data
        const user_cred = await userModel.findOne({ email: user, password: pass });

        //console.log(user_cred);
        // res.send(user_cred);
        if (user_cred == null) {
            res.send(null);
        } else {
            res.send(user_cred);
        }


    } catch {
        console.log("err")
    }


})



app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});