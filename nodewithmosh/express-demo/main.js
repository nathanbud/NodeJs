const express = require('express');

const app = express();

app.use(express.json());

const members = [
   { id: 1, 
     name: "Gorge"
   },
   { id: 2, 
     name: "Herder"
   },
   { id: 3, 
    name: "Burma"
   },
]
    

app.get('/', (req, res) => {
    res.send("Home");
});

app.get('/contact', (req, res) => {
    res.send("Contact")
});

app.get('/portfolio', (req, res) => {
    res.send("Portfolio")
})

app.get('/members/:id', (req, res) => {
  const member = members.find(member => member.id === req.params.id);
   if(!member) res.status('404').send("Sorry, the member cannot be found");
})

app.post('/members', (req, res)=>{
  const members = {
    id: courses.length + 1,
    name: req.body.name
  }

})

const port = process.env.port || 3000;
app.listen(port, ()=> console.log(`You are listening on port ${port}`));
