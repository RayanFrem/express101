const express = require('express')
const app = express()

app.set('view engine','ejs')

app.get("/",(req,resp) => {
   resp.render("index",{text: "test var"})
})

app.listen(4000)