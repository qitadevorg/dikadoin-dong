const SPREADSHEET_ID = '174Tqrv_G4c4BU4gKrUXCvYlTwX1Xc6glVh2D3-guIL8';
const API_KEY = process.env.GOOGLE_API_KEY;
export const GET_SHEETS_ENDPOINT = `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/?key=${API_KEY}&includeGridData=true`;
export const sheetIndex = {
  bouquets: 0,
  hampersItems: 1,
  hampersBoxes: 2,
}