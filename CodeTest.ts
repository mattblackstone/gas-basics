function logActiveSheetData() {
  Logger.log(getSheetData());
}
  
function logColumnCombos() {
  const data = getSheetData();
  const columns = rowsToColumnsFlat(data.slice(1));
  Logger.log(data.slice(0, 1));
  Logger.log(columns);
  Logger.log(combinations(columns));
}

function logSheetNames() {
  Logger.log(getSheetNames());
}

function testWriteColumnCombos() {
  writeColumnCombos({src: 'Sheet1', dest: 'Sheet3', header: true});
}