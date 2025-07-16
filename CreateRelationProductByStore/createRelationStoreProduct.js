const fs = require('fs');

const cnpjs = [
'27639873000103',
'18581567000164',
'21595326000189'
];

const gtin = '7896436103865';

const dataArray = cnpjs.map(cnpj => ({ cnpj, gtin }));

const fileContent =
  'const data = [\n' +
  dataArray.map(obj => `  {\n    cnpj: '${obj.cnpj}',\n    gtin: '${obj.gtin}'\n  }`).join(',\n') +
  '\n]';

fs.writeFileSync('output.txt', fileContent, 'utf8');

console.log('Arquivo "output.txt" gerado com sucesso!');
