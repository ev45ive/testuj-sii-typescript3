import express from "express";
import session from "express-session";

const app = express();
app.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: "cat",
  })
);


app.use((req, res, next) => {
  const user = process.argv[2] || "Stranger";
  // console.log(`Hello ${user}`);

  req.session.user = { name: user };
  req.user = { name: user };
  next();
});

app.get("/", (req, res) => {
  res.write(/* html */ `
    <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
        </head>
        <body>
    <h1> ❤️❤️❤️ Welcome ${req.user.name} ❤️❤️❤️</h1>`);
  res.end();
  res.write("");
});

app.listen(8080, () => {
  console.log("Server is running on http://localhost:8080/ <3 <3 <3");
});
