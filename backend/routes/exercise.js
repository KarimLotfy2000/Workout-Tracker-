const router = require("express").Router()
const Exercise = require("../models/exerciseModal")

router.get("/", (req, res) => {
    Exercise.find()
        .then(exercises => res.json(exercises))
        .catch(err => res.status(400).json(`ERROR:${err}`))
})

router.post('/add', (req, res) => {
    const username = req.body.username
    const description = req.body.description
    const duration = Number(req.body.duration)
    const date = Date.parse(req.body.date)

    const newExercise = new Exercise({
        username,
        description,
        duration,
        date

    })

    newExercise.save()
        .then(() => res.json("Exercise added successfully"))
        .catch(err => res.status(400).json(`ERROR:${err}`))

})


router.get("/:id",(req,res)=>{
    Exercise.findById(req.params.id)
    .then(exercise=>res.json(exercise))
    .catch(err => res.status(400).json(`ERROR:${err}`))

})

router.delete("/:id",(req,res)=>{
    Exercise.findByIdAndDelete(req.params.id)
    .then(exercise=>console.log(`${exercise._id} deleted successfully `))
})


router.post('/update/:id',(req, res) => {
  Exercise.findById(req.params.id)
    .then(exercise => {
      exercise.username = req.body.username;
      exercise.description = req.body.description;
      exercise.duration = Number(req.body.duration);
      exercise.date = Date.parse(req.body.date);

      exercise.save()
        .then(() => res.json('Exercise updated!'))
       .catch(err => res.status(400).json(`ERROR:${err}`))
    })
    .catch(err => res.status(400).json(`ERROR:${err}`))
});



module.exports = router;