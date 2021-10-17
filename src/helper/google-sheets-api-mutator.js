import { GET_SHEETS_ENDPOINT } from "../constants/google-sheets";

export async function getSheetData(sheetIndex) {
  const result = await fetch(GET_SHEETS_ENDPOINT)
  const { sheets } = await result.json();
  const sheet = sheets[sheetIndex];

  const columns = [];
  const data = [];
  for(let i = 0; i < sheet.data[0].rowData.length; i++){
    if(i === 0) {
      const { values } = sheet.data[0].rowData[i];
      for(const value of values){
        if (value.formattedValue) {
          columns.push(value.formattedValue);
        }
      }
    }
    else {
      const { values } = sheet.data[0].rowData[i];
      const item = {};
      for(let j = 0; j < columns.length; j++) {
        item[columns[j]] = values[j].formattedValue;
      }
      data.push(item);
    }
  }
  return data;
}