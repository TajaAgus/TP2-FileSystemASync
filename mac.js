const fs = require("fs");

function RDWRAsyncCallBack() {
  fs.readFile("package.json", "utf8", (error, datos) => {
    if (error) throw Error(error.message);

    const objeto = JSON.parse(datos);
    const tamanio = Buffer.from(datos).length;

    const info = {
      datos,
      objeto,
      tamanio,
    };

    console.log(info);

    const infoStr = JSON.stringify(info);

    fs.writeFile("./info.txt", infoStr, (error) => {
      if (error) throw Error(error.message);
    });
  });
}

RDWRAsyncCallBack();

console.log("Otras tareas......");
console.log("Otras tareas......");
console.log("Otras tareas......");
console.log("Otras tareas......");
