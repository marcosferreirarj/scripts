const fs = require("fs");
const path = require("path");

// Caminho para o arquivo de entrada
const inputFilePath = path.join(__dirname, "nomes_dos_arquivos.txt");
// Caminho para o arquivo de saída
const outputFilePath = path.join(__dirname, "nomes_dos_arquivos_editado.txt");

// Função para formatar o texto
const formatText = () => {
  fs.readFile(inputFilePath, "utf8", (err, data) => {
    if (err) {
      console.log("Erro ao ler o arquivo:", err);
      return;
    }

    // Divide o conteúdo do arquivo em linhas
    const lines = data.split("\n");

    // Formata cada linha
    const formattedLines = lines.map((line) => `"${line.trim()}",`);

    // Junta as linhas formatadas em uma única string
    const formattedText = formattedLines.join("\n");

    // Escreve o texto formatado no arquivo de saída
    fs.writeFile(outputFilePath, formattedText, "utf8", (err) => {
      if (err) {
        console.log("Erro ao escrever no arquivo:", err);
      } else {
        console.log("Arquivo formatado com sucesso!");
      }
    });
  });
};

// Chama a função para formatar o texto
formatText();
