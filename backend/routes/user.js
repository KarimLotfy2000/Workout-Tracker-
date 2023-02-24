const router=require("express").Router()
const User=require("../models/userModal")

router.get("/",(req,res)=>{
    
    User.find()
    .then(users=>res.json(users))
    .catch(err=>res.status(400).json(`ERROR:${err}`))
})

router.post("/add",(req,res)=>{
    const username=req.body.Username
    const newUser = new User({username})

   newUser.save()
   .then(()=>res.json("user added successfully"))
   .catch(err=>res.status(400).json(`ERROR:${err}`))

})

module.exports = router ;