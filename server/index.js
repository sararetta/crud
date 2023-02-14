import bodyParser from "body-parser";
import  express  from "express";
import morgan from "morgan";
import cors from "cors";
import helmet from "helmet";
import dotenv from "dotenv";
import { dataSongs } from "./data.js";

/* configuration */
dotenv.config()
const app=express()
app.use(express.json())
app.use(helmet())
app.use(helmet.crossOriginResourcePolicy({policy:"cross-origin"}))
app.use(morgan('common'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use(cors())

/* Routes */
app.get('/songs',(req,res)=>{
    res.status(200).json(dataSongs)
})
app.post('/createSong',(req,res)=>{
  dataSongs.push({...req.body,id:dataSongs.length})
  res.status(200).json(dataSongs)
})
app.put('/songs/:id',(req,res)=>{
  const id=req.params.id;
  const data=dataSongs.map((song)=>{
    if(Number(id)===song.id){
      return {
        ...song,
        title:req.body.title
      }
    }
    else{
      return song
    }
  })
  console.log(data)
  res.status(200).json(data)
})
app.delete('/songs/:id',(req,res)=>{
  const id=req.params.id;
  let index=dataSongs.findIndex((song)=>{
    return Number(song.id)===Number(id)
  })
  dataSongs.splice(index,1)
  res.status(200).json(dataSongs)
})

const port=process.env.PORT || 4000
app.listen(port,()=>{
        console.log(`port listen to ${port}`)
})
    