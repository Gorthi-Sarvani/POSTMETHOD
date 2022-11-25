const express=require("express")
const app=express()
const cors=require("cors")
const bodyParser=require("body-parser")
const port=4000;

app.use(bodyParser.urlencoded({
	extended:true
}))
app.use(bodyParser.json())
app.use(cors())

app.get("/",(req,res)=>{
	res.send("server started")
})
app.post("/newData",(req,res)=>{
	const{name,password,course}=req.body
	console.log(name,password,course)
	res.send("Added Data")
}) 
app.listen(port,()=>console.log("server is running on port 3000"))