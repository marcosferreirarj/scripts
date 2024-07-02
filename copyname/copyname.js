const fs = require("fs");
const path = require("path");

// Diretório onde estão os arquivos
const directoryPath = "./arquivos";
// Arquivo onde os nomes dos arquivos serão salvos
const outputFilePath = "./nomes_dos_arquivos.txt";

const copyFileNames = () => {
  fs.readdir(directoryPath, (err, files) => {
    if (err) {
      return console.log("Não foi possível listar os arquivos: " + err);
    }

    const fileNames = files.join("\n");

    fs.writeFile(outputFilePath, fileNames, (err) => {
      if (err) {
        console.log("Erro ao escrever no arquivo: " + err);
      } else {
        console.log("Nomes dos arquivos salvos em " + outputFilePath);
      }
    });
  });
};

// Chama a função para copiar os nomes dos arquivos
copyFileNames();
