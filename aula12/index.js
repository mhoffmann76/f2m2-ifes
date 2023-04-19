const express = require("express");
const app = express();
const nodemailer = require("nodemailer");
app.use(express.static(__dirname + "/public"));
const porta = 8080;

app.get("/", (req, res) => {
  res.send("Enviando e-mail com o Nodemailer");
});

app.get("/send", (req, res) => {
  const transport = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "ec08f6f91806ed",
      pass: "8236c6b9b3fcb1",
    },
  });

  transport
    .sendMail({
      from: "sender@server.com",
      to: "receiver@sender.com",
      subject: "Instrução para recuperar senha",
      text: "Marcelo. \n\n Você solicitou alteração de senha. \n\n Equipe Reprograma-se<br>",
      html: "<p>Prezado Marcelo, <br><br> Você solicitou alteração de senha.<br><br></p>Equipe Reprograma-se<br>",
    })
    .then((info) => {
      res.write("<h1>Email enviado com sucesso</h1>");
    })
    .catch((error) => {
      res.send(error);
    });
});

app.listen(porta, () => {
  console.log("Serving on port 8080");
});
