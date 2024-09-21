import express from "express";

const app = express();

const user = process.argv[2] || "Stranger";

console.log(`Hello ${user}`);

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
    <h1> ❤️❤️❤️ Welcome ${user} ❤️❤️❤️</h1>`);
  res.end();
});

app.listen(8080, () => {
  console.log("Server is running on http://localhost:8080/ <3 <3 <3");
});
