import express from 'express';
import cors from 'cors';

const PORT = 2173;
const app = express();
app.use(cors())

app.use((req, res, next)=> {
  setTimeout(() => {
    next();
  }, 2000);
})

app.route('/')
  .get((req, res) => {
    res.status(200).send(JSON.stringify("OK"));
  });

app.listen(PORT, () =>{
  console.log(`Server is running in port: ${PORT}`)
});