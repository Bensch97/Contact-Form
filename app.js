const express = require('express')
const app = express()
const port = 3000;

// allows us to process submitted form data
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => res.send())

app.post('/', function(req, res) {
    res.status(201)
  var name = req.body.user_name;
  var message = req.body.user_message;
  var email = req.body.user_email;
  var cell = req.body.user_cell;
  var homepage = req.body.user_homepage;
  var prefComm = req.body.user_prefComm;
  var devices = req.body.user_devices;
  var subject = req.body.user_subject;
  var pissed = req.body.user_pissed;

  console.log("Name: " + name);
  console.log("Message: " + message);
  console.log("E-Mail: " + email);
  console.log("Cell: " + cell);
  console.log("Homepage: " + homepage);
  console.log("prefComm: " + prefComm);
  console.log("Devices: " + devices);
  console.log("Subject:" + subject);
  console.log("Pissed: " + pissed);
  

  res.send(`
    <h1>Thanks ${name}!</h1>
    <p>We received your message below, and will get back to you at <strong>${email}</strong>.</p>
    <blockquote>${message}</blockquote>
    `);
});

app.listen(port);