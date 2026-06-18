function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);
    var timestamp = new Date();
    
    // Explicitly map data to the columns A through F
    var rowData = [
      timestamp,          // A: Timestamp
      data.fullName || "",// B: Full Name
      data.email || "",   // C: Email
      data.phone || "",   // D: Phone
      data.company || "", // E: Company
      data.description || "" // F: Description
    ];
    
    sheet.appendRow(rowData);
    
    return ContentService.createTextOutput(JSON.stringify({"success": true}))
      .setMimeType(ContentService.MimeType.JSON);
  } catch(error) {
    return ContentService.createTextOutput(JSON.stringify({"success": false, "error": error.toString()}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
