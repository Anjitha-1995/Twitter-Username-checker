import express, { json, request, response } from 'express'
import fetch from 'node-fetch'
import bodyparser from 'body-parser'
const token = 'Bearer AAAAAAAAAAAAAAAAAAAAANgbhAEAAAAAeU2DvYxwsIzTPdV7cPM%2BXamhbrk%3DqGNVdJlZ8uswPV0JhCYF5u85qXaGZzhRM3BpkmeJzgPUM64SaH'

const app=express()

app.use(bodyparser.urlencoded({ extended: false }))
 
app.use(bodyparser.json())

app.set("view engine","ejs")


app.get('/' , (req,res)=>{
    res.render("index") 
  
 })
 app.get('/result' , (req,res)=>{
  res.render("result",{n:''}) 

})
 app.post('/check',(req,res)=>{
   console.log(req.body.username)

   
  fetch(`https://api.twitter.com/2/users/by?usernames=${req.body.username}`, options)
  .then((response) => response.json())
  .then((data) => {console.log(data);
   
     const dt=JSON.stringify(data)
     const n=dt.includes("data")
     
     
     if(n){
      console.log(" exist")
      res.render("result",{n:n})
     }else
     {
      console.log("not exsit")
      res.render("result",{n:n})
     }

  })
  .catch((error) => {
    console.log(error);
    })
    
  
})



app.listen(4000 , ()=>{
  console.log("server running");
});


const options = {
  method: 'GET',
  headers: {
    'Content-type': 'application/json',
    "authorization": token,
  },

  
}




 