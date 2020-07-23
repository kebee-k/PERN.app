const express = require("express");
const app = express();
const cors =require("cors");
const pool = require("./db");

app.use(cors());
app.use(express.json());

//post
app.post("/post", async(req,res)=>{
    try {
  const {description}= req.body;
  const newPost = await pool.query(
  "INSERT INTO test1 (description) VALUES($1) RETURNING * ",
  [description]
  );
  res.json(newPost.rows[0]);
    }
     catch (err) {
        console.error(err.message);
    }
});
//get
app.get("/get",async(req,res)=>{
    const newGet= await pool.query(" SELECT * FROM test1");
    try {
        res.json(newGet.rows);
    } catch (err) {
        console.log(err.message);
    }
})
//get;id 
app.get("/get/:id", async(req,res)=>{
    try {
        const {id}= req.params;
        const newGet = await pool.query("SELECT * FROM test1 WHERE test1_id=$1",[id])
        res.json(newGet.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
})
//updated 
app.put("/update/:id",async(req,res)=>{
try {
    const {id}=req.params;
    const {description} =req.body;
    const update= await pool.query("UPDATE test1 SET description=$1 WHERE test1_id=$2",
    [description,id]
    );
    res.json("test1 updated success")
} catch (err) {
    console.log(err.message);
}
})
//delete
app.delete("/delete/:id",async(req,res)=>{
    try {
        const {id} = req.params;
        const del = await pool.query("DELETE FROM test1 WHERE test1_id=$1",[id])
        res.json("deleted success")
    } catch (err) {
        console.log(err.message)
    }
})
app.listen(5001, ()=>{
    console.log("server start on port 500");
});