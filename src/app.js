const express = require("express");

const app = express(); //calling express function to create an express application

app.use("/hello", (req, res) => {
  //"/hello" is the route path, req is the request object, res is the response object->response handler function
  res.send("Hello from express");
}); //middleware function to handle incoming requests->request handler function

app.listen(3000, () => {
  //call back function to run when server is running
  console.log("server is running on port 3000");
});
