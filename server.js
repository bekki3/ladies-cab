const bodyParser = require("body-parser");
const express = require("express");
const mongoose = require("mongoose");
const app = express();

mongoose.connect("mongodb+srv://admin-bekki:Test123@cluster0.yi31cuu.mongodb.net/ladies-cab");

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    age: {
        type: Number,
    },
    imageBuf: {
        type: String,
    },
    phoneNumber: {
        type: String,
    },
});

const userData = mongoose.model("userData", userSchema);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
    //console.log("get req: ", req);
    res.send("server responding to get request");
});

app.post("/user", (req, res) => {
    const newUser = req.body;
    userData.findOne({ phoneNumber: newUser.phoneNumber }).then((data) => {
        if (data) {
            console.log("User exists in DB");
            res.send("User exists in DB");
        } else {
            new userData(newUser)
                .save()
                .then(() => {
                    console.log("Data saved on DB successfully");
                })
                .catch((err) => {
                    console.log("Error while sending to DB");
                });
            console.log("New user added to DB");
            res.send("New user added to DB");
        }
    });
});

app.put("/user", (req, res) => {
    const newUser = req.body;
    console.log(newUser);
    userData.updateOne({ phoneNumber: newUser.phoneNumber }, newUser).then(()=>{
        res.send("Updated user data");
    });    
});


const PORT = 3000;

app.listen(PORT, () => {
    console.log("Server started on port: ", PORT);
});
