const express = require("express");
const app = express();
require("dotenv").config();
const connectDB = require("./db/connect");
const tasks = require("./routers/tasks");
const notFound = require("./middleware/not-found");
const errorHandler = require("./middleware/error-handle");
const port = process.env.PORT || 3000;

// Middleware configuration
app.use(express.json());
app.use(express.static("./public"));

// routes
app.use("/api/v1/tasks", tasks);
app.use(notFound);
app.use(errorHandler);

app.get('/api/v1/tasks')       
app.post('/api/v1/tasks')       
app.get('/api/v1/tasks/:id')   
app.patch('/api/v1/tasks/:id')  
app.delete('/api/v1/tasks/:id') 

const start = async () => {
  try {
    await connectDB(process.env.MONGODB_URL);
    app.listen(port, () => {
      console.log(`Task manager system is running on port ${port}`);
    });
  } catch (err) {
    console.log(err);
  }
};

start()
