const express = require('express');
const app = express();
const cors = require('cors');
const { google }  = require('googleapis')
const authData = require('./credentials')
app.use(cors())

const months = ['Sep', 'Oct', 'Nov'];

app.listen(8080, () => {
      console.log('server listening on port 8080')
})

app.get('/year/:year', async (req, res) => {
  const year = req.params.year;
  const data = await getSheetsData(year);
  res.send(data);
})

async function getSheetsData(year) {
  const { private_key, client_email } = authData.credentials;

  const auth = new google.auth.JWT({
    email: client_email,
    key: private_key,
    scopes: ["https://www.googleapis.com/auth/spreadsheets"]
  })
  const sheet = google.sheets("v4")

  let data = null;
  try {
    const response = await sheet.spreadsheets.values.batchGet({
      spreadsheetId: authData.spreadsheetId,
      ranges: months.map(month => `${month} ${year}!A1:E100`),
      auth,
    });

    data = {};
    months.forEach((month, i) => data[month] = response.data.valueRanges[i]);
  } catch (e) {
    console.log(`error in fetching sheets: ${e}`)
  }
  return data;
}