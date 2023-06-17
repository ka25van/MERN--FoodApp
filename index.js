const express = require('express')
const app = express()
const port = 5000
const mongoDB=require("./db")

app.use((req,res,next)=>{
  res.setHeader('Access-Control-Allow-Origin','http://localhost:5000');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  next();
})

app.use(express.json());
app.use('/api', require("./Routes/CreateUser"));
app.use('/api', require("./Routes/Disdata"));

app.get('/', (req, res) => {
  res.send('Hello World!')
}); 





app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})