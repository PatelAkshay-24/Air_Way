const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(express.json());

//port
const { PORT } = require("./config/serverconfig");

const ApiRoutes = require('./routes/index')

//Api
app.use('/api',ApiRoutes)

//listen port
app.listen(PORT, async () => {
  console.log(`sever is start on http://localhost:${PORT}`);
 
});
