const express = require('express');
const app = express();
const cors = require('cors');
const { google }  = require('googleapis')
const authData = require('./credentials')
app.use(cors())

// const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const months = ['Sep','Oct'];


app.listen(8080, () => {
      console.log('server listening on port 8080')
})

app.get('/year/:year', async (req, res) => {
  const year = req.params.year;
  const data = {};

  await Promise.all(months.map(month => {
    const getMonthData = async (data, month, year) => {
      data[month] = await getSheetsData(`${month} ${year}`);
    }
    return getMonthData(data, month, year);
  }))
  res.send(data);
})

async function getSheetsData(sheetName) {
  const { private_key, client_email } = authData.credentials;

  const auth = new google.auth.JWT({
    email: client_email,
    key: private_key,
    scopes: ["https://www.googleapis.com/auth/spreadsheets"]
  })
  const sheet = google.sheets("v4")

  const data = await sheet.spreadsheets.values.get({
    spreadsheetId: authData.spreadsheetId,
    range: `${sheetName}!A1:E100`,
    auth,
  });

  return data;
}