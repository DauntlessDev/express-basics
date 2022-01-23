const express = require("express");
const app = express();

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json())

app.set("view engine", "ejs");
// app.use(logger)

// app.get("/", (req, res) => {
//   console.log("Here");
//   // res.status(500).send({message:"Hi"})
//   // res.download('server.js')

//   res.render("index", { text: "World" });
// });

const userRouter = require("./routes/users");
// const postRouter = require('./routes/posts')

app.use("/users", userRouter);
// app.use('/posts', postRouter)

app.listen(3000);
