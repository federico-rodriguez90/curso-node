require("dotenv").config();
const hbs = require("hbs");
const express = require("express");

const app = express();
const port = process.env.PORT;

// Handlebars
app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");

// Servir contenido estatico
app.use(express.static("public"));

// RUTAS
app.get("/", (req, res) => {
  res.render("home", { nombre: "Fede", titulo: "Curso Node" });
});

app.get("/generic", (req, res) => {
  res.render("generic", { nombre: "Fede", titulo: "Curso Node" });
  //   res.sendFile(__dirname + "/public/generic.html");
});

app.get("/elements", (req, res) => {
  res.render("elements", { nombre: "Fede", titulo: "Curso Node" });
  //   res.sendFile(__dirname + "/public/elements.html");
});
// app.get("*", (req, res) => {
//   res.sendFile(__dirname + "/public/404.html");
// });

app.listen(port, () => {
  console.log(`Escuchando el puerto ${port}...`);
});
