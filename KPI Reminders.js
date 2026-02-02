function sendKpiReminders() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheets()[0]; // first sheet

  var data = sheet.getDataRange().getValues();

  for (var i = 1; i < data.length; i++) { // skip header
    var employeeName = data[i][0];
    var email = data[i][1];
    var taskLink = data[i][2];
    var dueDate = data[i][3];
    var managerEmail = data[i][4];

    if (!email) continue;

    var subject = "KPI Template Reminder";
    var body =
      "Hi " + employeeName + ",\n\n" +
      "This is your daily KPI reminder.\n\n" +
      "Please complete your KPI template here:\n" +
      taskLink + "\n\n" +
      "Due Date: " + dueDate + "\n\n" +
      "Regards,\nHR System";

    MailApp.sendEmail(email, subject, body);
  }
}