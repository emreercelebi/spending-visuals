const express = require('express');
const app = express();
const cors = require('cors');
const { google }  = require('googleapis')
const authData = require('./credentials')

app.use(cors())

console.log(app)

app.listen(8080, () => {
      console.log('server listening on port 8080')
})

app.get('/', async (req, res) => {
  const sheetsData = await getSheetsData();
  res.send(sheetsData);
})

async function getSheetsData() {
  const { private_key, client_email } = authData.credentials;
  const sheetName = 'Sep 2024';

  const auth = new google.auth.JWT({
    email: client_email,
    key: private_key,
    scopes: ["https://www.googleapis.com/auth/spreadsheets"]
  })
  const sheet = google.sheets("v4")

  const data = await sheet.spreadsheets.values.get({
    spreadsheetId: authData.spreadsheetId,
    range: `${sheetName}!A1:D100`,
    auth,
  });

  return data;
}