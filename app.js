function doGet(req){
    //this gets the spreadsheet we are working...
    var doc = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = doc.getSheetByName('college_sheet');
    var values = sheet.getDataRange().getValues();
  
    var output = [];
    for(var i=0;i<values.length;i++){
      var row = {};
      row['college']=values[i][0];
      row['city']=values[i][10];
      row['state']=values[i][11];
      output.push(row);
    }
    return ContentService.createTextOutput(JSON.stringify({data:output})).setMimeType(ContentService.MimeType.JSON);
  }