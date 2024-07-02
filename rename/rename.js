const fs = require("fs");
const path = require("path");

// Diretório onde estão os arquivos
const directoryPath = "./image";

// Carrega a lista de novos nomes
const newNames = require("./names.json").names;

const renameFiles = () => {
  fs.readdir(directoryPath, (err, files) => {
    if (err) {
      return console.log("Não foi possível listar os arquivos: " + err);
    }

    if (files.length !== newNames.length) {
      return console.log(
        "O número de arquivos e o número de novos nomes não correspondem."
      );
    }

    files.forEach((file, index) => {
      const newFileName = newNames[index] + path.extname(file);
      const oldFilePath = path.join(directoryPath, file);
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
renameFiles();
