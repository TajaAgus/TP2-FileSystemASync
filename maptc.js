const fs = require("fs");

fs.promises
  .readFile("package.json", "utf8")
  .then((data) => {
    const objeto = JSON.parse(data);
    const tamanio = Buffer.from(data).length;
    info = {
      texto: data,
      objeto,
      tamanio,
    };
    console.log(info);
    return info;
  })
  .then((info) => {
    const infoStr = JSON.stringify(info);

    fs.promises.writeFile("./info.txt", infoStr).catch((error) => {
      console.log(error.message);
    });
  })
  .catch((error) => {
    console.log(error.message);
  });

console.log("Otras tareas......");
console.log("Otras tareas......");
console.log("Otras tareas......");
console.log("Otras tareas......");
