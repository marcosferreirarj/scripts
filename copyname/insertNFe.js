const fs = require("fs");
const path = require("path");

// Diretório onde estão os arquivos
const directoryPath = "./arquivos";
// Letras a serem inseridas antes do nome do arquivo
const prefix = "NFe";

const prependToFileNames = () => {
  fs.readdir(directoryPath, (err, files) => {
    if (err) {
      return console.log("Não foi possível listar os arquivos: " + err);
    }

    files.forEach((file) => {
      const oldFilePath = path.join(directoryPath, file);
      const newFileName = prefix + file;
      const newFilePath = path.join(directoryPath, newFileName);

      fs.rename(oldFilePath, newFilePath, (err) => {
        if (err) {
          console.log(`Erro ao renomear ${file}: ${err}`);
        } else {
          console.log(`Arquivo ${file} renomeado para ${newFileName}`);
        }
      });
    });
  });
};

// Chama a função para renomear os arquivos
prependToFileNames();
