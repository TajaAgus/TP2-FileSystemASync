const fs = require("fs");

const texto = fs.readFileSync("package.json", "utf8");
const objeto = JSON.parse(texto);
const tamanio = Buffer.from(texto).length;

const info = {
  texto,
  objeto,
  tamanio,
};

console.log(info);

const infoStr = JSON.stringify(info);

try {
  fs.writeFileSync("./info.txt", infoStr);
} catch (error) {
  console.log(error);
}
