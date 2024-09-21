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

  req.session.views;
  req.session.user = { name: user };
  req.user = { name: user };
  next();
});

import playlists from "../data/playlists.json";

app.get("/playlists", (req, res) => {
  // res.json(req.query);
  const name = req.query["name"];

  // Type Casting
  // const name = req.query["name"] as any;
  // const name = req.query["name"] as string;

  // Conversion
  // const name = String(req.query["name"])

  // Type Narrowing
  if (typeof name === "string") {
    res.json(playlists.filter((p) => p.name.includes(name)));
  } else if (!name) {
    res.json(playlists);
  } else if (name) {
    res.json({ message: "Invalid query" });
  } else {
    name; // never
  }
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

const PORT = Number(process.env["PORT"] || 8080);
const HOST = process.env["HOST"] || "localhost";

app.listen(PORT, HOST, () => {
  console.log("Server is running on http://localhost:8080/ <3 <3 <3");
});
