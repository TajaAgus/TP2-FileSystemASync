const fs = require("fs");

const RDWRAsyncAwait = async () => {
  try {
    const texto = await fs.promises.readFile("package.json", "utf8");
    const objeto = JSON.parse(texto);
    const tamanio = Buffer.from(texto).length;
    const info = {
      texto,
      objeto,
      tamanio,
    };
    console.log(info);
    const infoStr = JSON.stringify(info);
    await fs.promises.writeFile("./info.txt", infoStr);
  } catch (error) {
    console.log(error);
  }
};

RDWRAsyncAwait();

console.log("Otras tareas......");
console.log("Otras tareas......");
console.log("Otras tareas......");
console.log("Otras tareas......");
