import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import cors from "cors";
import categoryRoutes from './routes/categoryRoutes.js'

// configure env
dotenv.config();

const app = express();


app.use(cors());
app.use(express.json());
app.use(morgan("dev"));




app.use("/api/", categoryRoutes);


//rest api
app.get("/", (req, res) => {
   res.send("<h1>Wellcome to Ecommerce</h1>");
});


//port
const PORT = process.env.PORT  || 3000;
  
//run listen
app.listen(PORT, () => {
   console.log(`sever run on ${PORT}`);
});
  