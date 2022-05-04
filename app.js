const express = require("express")
const bodyParser = require('body-parser')
const date = require(__dirname + '/data.js')

const app = express()

const tasks = []
const worktasks = []

app.use(bodyParser.urlencoded({extended: true}))

app.set('view engine', 'ejs');

app.use(express.static('public'))

app.get('/', function(req, res){

  let newDay = date.getDate()
  //console.log(newDay)
  res.render('index', {listTitle:newDay,newTasks: tasks})
})

app.post('/',function(req, res){
    console.log(req.body)
    if(req.body.list === 'Work'){
      task = req.body.newtasks
      worktasks.push(task)
      console.log(tasks)
      res.redirect('/work')
    }
    else {
      task = req.body.newtasks
      tasks.push(task)
      console.log(tasks)
      res.redirect('/')
    }
})

app.get('/work',function(req,res){
      res.render('index', {listTitle: 'Work Tasks', newTasks: worktasks})
})

app.get('/about',function(req,res){
  res.render('about')
})
app.listen(3000, function(){
  console.log('I am listening')
})
