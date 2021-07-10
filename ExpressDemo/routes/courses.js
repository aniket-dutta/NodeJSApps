const express = require('express');
const router = express.Router();


//array course with 3 objects inside
courses = [
    {id:1, name:'course1'},
    {id:2, name:'course2'},
    {id:3, name:'course3'}
]
cours = []

router.get('/', (req, res)=>{
    res.send(courses);
});
// /api/courses is already handled in index, just keep /:id
router.get('/:id', (req, res)=>{
    let found = courses.find(c => c.id === parseInt(req.params.id));
    //console.log(req.params.id)

    if(found) return res.status(200).send({result5 : found});
    else return res.status(404).send("Not found");
});

//Create
router.post('/', (req, res)=>{
    //const result = validateCourse(req.body.name);
    //console.log(result);
    
    const { error } = validateCourse(req.body); //object destructing
    if(error) return res.status(400).send(error.details[0].message);
        
    const course = {
        id: courses.length + 1,
        name: req.body.name
    }; 
    courses.push(course);
    res.send(course);   
});

//Update
router.put('/:id', (req, res)=>{
    let found = courses.find(c => c.id === parseInt(req.params.id));
    if(!found) return res.status(404).send("Not found");

    const { error } = validateCourse(req.body); //object destructing
    if(error) return res.status(400).send(error.details[0].message);

    found.name =req.body.name;
    res.send(found);
});

//Delete
router.delete('/:id', (req, res)=>{
    let found = courses.find(c => c.id === parseInt(req.params.id));
    if(!found) return res.status(404).send("Not found");

    const index = courses.indexOf(found);
    //console.log(req.params.id,index)
    courses.splice(index, 1);
    res.send(found);
});

function validateCourse(course){
    const schema = Joi.object({
        name: Joi.string().alphanum().min(3).required()
    });
    
    return schema.validate(course);
}

module.exports = router;