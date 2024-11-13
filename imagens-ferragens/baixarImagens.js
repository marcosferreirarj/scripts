const fetch = require("node-fetch"); // Fazrequisições HTTP
const fs = require("fs"); // Edita arquivos
const path = require("path"); // Edita caminhos e cria caminhos

async function downloadImage(url, folder, filename) {
  try {
    const response = await fetch(url);
    if (!response.ok)
      throw new Error(`Failed to fetch image: ${response.statusText}`);

    const fileStream = fs.createWriteStream(path.join(folder, filename));
    await new Promise((resolve, reject) => {
      response.body.pipe(fileStream);
      response.body.on("error", reject);
      fileStream.on("finish", resolve);
    });

    console.log(`Imagem salva como ${filename} na pasta ${folder}`);
  } catch (error) {
    console.error(`Erro ao baixar a imagem de ${url}: ${error.message}`);
  }
}

async function downloadImages(urls, gtins, folder) {
  // Verifica se a pasta existe; caso contrário, cria
  if (!fs.existsSync(folder)) {
    fs.mkdirSync(folder, { recursive: true });
  }

  for (let i = 0; i < urls.length; i++) {
    const url = urls[i];
    const gtin = gtins[i];
    const filename = `${gtin}.jpg`; // Nomeia a imagem com o GTIN

    await downloadImage(url, folder, filename);
  }

  console.log(
    "Todas as imagens foram baixadas e salvas com os nomes dos GTINs."
  );
}

// lista de urls
const urls = [];

// lista de gtins
const gtins = [];

const folder = "./imagens";

downloadImages(urls, gtins, folder);
