const express = require('express');
const app = express();

app.use(express.json());

//array course with 3 objects inside
courses = [
    {id:1, name:'course1'},
    {id:2, name:'course2'},
    {id:3, name:'course3'}
]
cours = []
app.get('/', (req,res) => {
    res.send('Hello World');

});
app.get('/api/courses', (req, res)=>{
    res.send(courses);
});

app.post('/api/courses', (req, res)=>{
    const course = {
        id: courses.length + 1,
        name: req.body.name
    }; 
    console.log("body : ", req.body);
    courses.push(course);
    res.send(course);
});

app.get('/api/course/:id', (req, res)=>{
    let found = course.find(c => c.id === parseInt(req.params.id));
    console.log(req.params.id)
    if(found){
        res.status(200).send("The searched course details are: ",found);
    } else {
        res.status(404).send("Not found");
    }
});

app.get('/api/post/:month/:year', (req,res)=> res.send([req.params,req.query])) //read optional query params by req.query 
//add pass them as api/post/08/2021?day=5

const port = process.env.PORT || 3000;
console.log(process.env.PORT);
app.listen(port, ()=>console.log(`Listening on port ${port}`));