const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const User = require("../../models/user")
const Item = require("../../models/item")
const express = require('express');
const router = express.Router();
require('dotenv').config();
const accountSid = "ACd02fbd5f6d52c13e61eba8d5b8f76b72";
const authToken = "4ec50ddbc993cdf15fb9cb631335ac5b";
const client = require('twilio')(accountSid, authToken);


router.post('/sms', async (req, res) => {
  const smsInfo = req.body
  console.log("sms" ,smsInfo)
  // client.messages
  // .create({
  //    body: smsInfo.message,
  //    from: '+17408411600',
  //    to: sms.phone
  //  })
  // .then(message => res.json({msg: message.sid}));

  
});

router.post('/register', async (req, res) => {
    const user = req.body;

    const takenEmail = await User.findOne({email: user.email})
    const takenPhone = await User.findOne({phone: user.phone})

    if(takenEmail || takenPhone){

        res.json({message: "Email or Phone has already been taken" , code:0})
    } else{

        user.password = await bcrypt.hash(req.body.password , 10)
        const dbUser = new User({
           
            email: user.email.toLowerCase(),
            phone: user.phone,
            password: user.password
        })

        dbUser.save()

        res.json({message:"Success" , code:1})
    }
  });
    router.put('/:id', (req, res) => {
    User.findByIdAndUpdate(req.params.id, req.body)
      .then(user => res.json({ msg: 'Updated successfully' , name:user.name , location:user.location}))
      .catch(err =>
        res.status(400).json({ error: 'Unable to update the Database' })
      );
  });
  router.post('/login',  (req, res) => {
    
    const userLoggingIn = req.body;

    User.findOne({email: userLoggingIn.email})
    .then(dbUser => {
        if (!dbUser) {
            return res.json({
                message: "invalid Username or password" , code:0
            })
        }
        bcrypt.compare(userLoggingIn.password , dbUser.password)
        .then(isCorrect => {
            if(isCorrect) {
                const payload = {
                    id: dbUser._id,
                    email: dbUser.email,
                    phone: dbUser.phone,
                    name:dbUser.name
                }
                jwt.sign(
                    payload,
                    process.env.JWT_SECRET,
                    {expiresIn : 86400},
                    (err , token) => {
                        if(err) return res.json({message:err})
                        return res.json({
                            message:"success",
                            token: "Bearer " + token,
                            code:1
                        })
                    }
                )
            } else {
                return res.json({
                    message: "invalid Username or password" , code:0
                })
            }
        })
    })
  });
  router.post("/authenticate",(req, res) => {
    const { email } = req.body;
    console.log("email",email);
    // Get or create user on Chat Engine!
    try {
       axios.put(
        "https://api.chatengine.io/users/",
        { username: email, secret: email, first_name: email },
        { headers: { "Private-Key": "dfda766d-aa8c-4c16-9ef0-94feb3f05d10" } }
      );
      res.json({message:""})
    } catch (e) {
      
    }
  });

 const  verifyJWT = (req, res , next) => {
    console.log("no token1" , req.user);

    const token = req.headers["x-access-token"]?.split(' ')[1]

    if(token){


        jwt.verify(token,process.env.JWT_SECRET, (err, decoded) => {
            if(err) return res.json({
                isLoggedIn: false,
                message: "Failed To Authenticate"
            })


            req.user = decoded;
            req.user.id = decoded.id
            req.user.email = decoded.email
            

            next()


        })
    } else {


        res.json({message:"Incorrect token given" , isLoggedIn: false})
    }
  };

  router.post("/getUsername" , verifyJWT ,(req , res) => {
    console.log("no token" , req.user);
    res.json({isLoggedIn: true, email:req.user.email , id:req.user.id , user:req.user})
  })
  router.get('/myitems/:id', async (req, res) => {
    console.log("my items" , req.params.id);
const items = await  Item.find({ owner:  req.params.id  })
.then(items => res.json(items))
.catch(err => res.status(404).json({ nobookfound: 'No item found' }));
  });

  router.get('/findUser/:id', async (req, res) => {
    
const user = await  User.findById( req.params.id )
.then(user=> res.json(user))
.catch(err => res.status(404).json({ nobookfound: 'No item found' }));
  });

  router.delete('/deleteItem/:id', (req, res) => {
    Item.findByIdAndRemove(req.params.id, req.body)
      .then(book => res.json({ mgs: 'Item deleted successfully' }))
      .catch(err => res.status(404).json({ error: 'No such a item' }));
  });

module.exports = router;