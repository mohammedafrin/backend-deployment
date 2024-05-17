import app from "./app.js"      

app.listen(process.env.PORT,()=>{
    console.log(`app is running onn ${process.env.PORT}`)
})