const express=require('express');
const bodyParser = require('body-parser');
const path=require('path');
const app=express();
const PORT = 3000;

// html setup
app.use(express.static(path.join(__dirname,'public')))

app.use(express.json());

// body parser middleware
app.use(express.urlencoded({extended : true}));
app.use(bodyParser.json());

// app.use('/', todoRouter);
app.get('/', function(req, res){
    res.sendFile('index.html')
})

app.post('/data', function(req, res){
    const { email, sub, links} = req.body

    // console.log(links);

    let link = email.split(',') //links
    console.log(link);

//    if( links && sub && email){
//     res.send(sele.example())
//    } 
})


app.listen(PORT,()=>{
    console.log(`app is live at ${PORT}`);
})