import { google } from 'googleapis'

const auth = new google.auth.GoogleAuth({
  credentials: {
    client_email: process.env.GOOGLE_CLIENT_EMAIL,
    private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
  },
  scopes: ['https://www.googleapis.com/auth/spreadsheets'],
})

export async function appendToSheet(
  sheetTab: string,
  rowValues: any[]
) {
  const sheets = google.sheets({
    version: 'v4',
    auth,
  })

  await sheets.spreadsheets.values.append({
    spreadsheetId: process.env.GOOGLE_SHEET_ID,
    range: `${sheetTab}!A:J`,
    valueInputOption: 'USER_ENTERED',
    requestBody: {
      values: [rowValues],
    },
  })

  return {
    success: true,
  }
}
