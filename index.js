const express = require("express")

const { request } = require("http")
const app = express()
const port = 3000

const yourDateObject = new Date('December 29, 2021 21:42:30');
const dayOfWeek = yourDateObject.getDay();


app.use(express.static("Public"))
app.use('./home', express.static(__dirname + 'public/home'))

app.set("views", "./views")
app.set("view engine", "ejs")

app.get("/", (req, res) =>{
    if (dayOfWeek === 6 || dayOfWeek === 0) {
        res.status(503).send('site closed, site is only available during working hours (Monday to Friday, from 9am to 5pm')
        
      }
      else{
    res.render("home", { text: "Welcome!"})
}
})
app.get("/Contact", (req, res) =>{
    if (dayOfWeek === 6 || dayOfWeek === 0) {
        res.status(503).send('site closed, site is only available during working hours (Monday to Friday, from 9am to 5pm')
        
      }
      else{
    res.render("contact", {text: "Conatct us"})
      }
})
app.get("/Services", (req, res) =>{
    if (dayOfWeek === 6 || dayOfWeek === 0) {
        res.status(503).send('site closed, site is only available during working hours (Monday to Friday, from 9am to 5pm')
        
      }
      else{
    res.render("services", {text: "Our Services"})
      }
})

app.listen(port, () => console.log(`listening on port ${port} `))
    
