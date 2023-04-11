const http = require("http");
const fs = require("fs");
const readline = require('readline')
const port = 443;

const server = http.createServer((req, res) => {
  fs.readFile("pagina.html", (erro, file) => {
    res.writeHead(200, { "Content-Type": "text/html" });

    fs.appendFile("file.txt", " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis placerat quam felis, venenatis euismod nunc dignissim lobortis. Proin accumsan hendrerit iaculis. Aenean ac magna odio. Etiam vitae maximus est. Nulla eu sapien congue, sagittis mauris commodo, venenatis felis. Sed vitae mi varius, congue augue ut, rhoncus enim. Quisque cursus et metus euismod posuere. Morbi eleifend interdum imperdiet. Fusce varius eros urna, sed maximus ante venenatis eu. Duis ex augue, condimentum eu pulvinar at, luctus sit amet arcu. Aenean eu lacus at eros blandit tempor quis id dolor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin nulla enim, ornare ut elit ut, blandit faucibus ante. Fusce ut ligula a ante accumsan malesuada sit amet id ante.  ", (erro) => {
      if (erro) throw erro;
      console.log("Arquivo criado")
      console.log("------------------------------------------")
      })

      console.log("-------------------------------------------")



   async function readFileByLine(file) {

  const fileStream = fs.createReadStream(file);

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  });
  for await (const line of rl) {
    console.log(line);
  }
}

readFileByLine('file.txt')

    

    res.write(file);
    return res.end();
  });





});







server.listen(port, () => {
  console.log("Servidor rodando");
});













