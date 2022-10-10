const express = require('express');
const app = express();

app.use(
  express.urlencoded({
    extended: true,
  })
)
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
})

app.listen(3000)

// mongodb+srv://dbuser:<password>@bovcontrol.2tji3im.mongodb.net/?retryWrites=true&w=majority
// user:dbuser
// senha:mkw2Yq69ZfmdoR49
