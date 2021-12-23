const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });

  const persona = {
    it: 1,
    nombre: "Juan",
    apellido: "Perez",
  };

  res.write(JSON.stringify(persona));
  res.end();
});

server.listen(3000);

console.log("Escuchando el puerto 3000");
