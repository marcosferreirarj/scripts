const fs = require("fs");
const path = require("path");

// Diretório onde estão os arquivos
const sourceDirectory = "./oldimage";
// Diretório onde os arquivos serão copiados
const targetDirectory = "./image";
// Número de cópias
const numberOfCopies = 686;

const copyFiles = () => {
  fs.readdir(sourceDirectory, (err, files) => {
    if (err) {
      return console.log("Não foi possível listar os arquivos: " + err);
    }

    files.forEach((file) => {
      const sourceFilePath = path.join(sourceDirectory, file);
      const fileExtension = path.extname(file);
      const fileName = path.basename(file, fileExtension);

      for (let i = 1; i <= numberOfCopies; i++) {
        const newFileName = `${fileName}_copy${i}${fileExtension}`;
        const targetFilePath = path.join(targetDirectory, newFileName);

        fs.copyFile(sourceFilePath, targetFilePath, (err) => {
          if (err) {
            console.log(`Erro ao copiar ${file}: ${err}`);
          } else {
            console.log(`Arquivo ${file} copiado como ${newFileName}`);
          }
        });
      }
    });
  });
};

// Cria o diretório de destino se não existir
if (!fs.existsSync(targetDirectory)) {
  fs.mkdirSync(targetDirectory, { recursive: true });
}

// Chama a função para copiar os arquivos
copyFiles();
