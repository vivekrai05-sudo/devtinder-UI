const express = require("express");

const app = express(); //calling express function to create an express application

// app.use("/user", (req, res) => {
//   //"/user" is the route path, req is the request object, res is the response object->response handler function
//   res.send(
//     "HAHHAHAHHAHAHAHHAHAHHAHAHHAHAHHAHAHHAHAHHAHAHHAHAHHAHAHHAHAHHAHAHHAHAHHAHAHHAHAHHAHAHHAHAHHAHAHHAHAHHAHAHHAHAHHAHAHHAHAHHAHAHHAHAHHAHAHH",
//   );
// }); //middleware function to handle incoming requests->request handler function

// app.use(
//   "/user",
//   (req, res, next) => {
//     //"/user" is the route path, req is the request object, res is the response object->response handler function
//     console.log("middleware function is called");
//     next(); //call the next middleware function in the stack
//   },
//   (req, res) => {
//     res.send(
//       "HAHHAHAHHAHAHAHHAHAHHAHAHHAHAHHAHAHHAHAHHAHAHHAHAHHAHAHHAHAHHAHAHHAHAHHAHAHHAHAHHAHAHHAHAHHAHAHHAHAHHAHAHHAHAHHAHAHH",
//     );
//   },
// ); //middleware function to handle incoming requests->request handler function

app.use(
  "/user",
  (req, res, next) => {
    //"/user" is the route path, req is the request object, res is the response object->response handler function
    console.log("Handling the route 1!");
    // res.send("1st response");
    next(); //call the next middleware function in the stack
  },
  (req, res, next) => {
    console.log("Handling the route 2!");
    // res.send("2nd response");
    next(); //call the next middleware function in the stack
  },
  (req, res, next) => {
    console.log("Handling the route 3!");
    res.send("3rd response");
    next(); //call the next middleware function in the stack
  },
);

// app.use("/", (req, res) => {
//   //"/" is the route path, req is the request object, res is the response object->response handler function
//   res.send("Hello from express");
// });

// app.use("/hello", (req, res) => {
//   //"/hello" is the route path, req is the request object, res is the response object->response handler function
//   res.send("Hello from express");
// }); //middleware function to handle incoming requests->request handler function

app.listen(3000, () => {
  //call back function to run when server is running
  console.log("server is running on port 3000");
});
