function myFunction() {
  Logger.log("Start");
  callCovinAPI();
  Logger.log("End");
}


function callCovinAPI() {

  var headers = {
      "accept": "application/json",
      "Accept-Language": "hi_IN",
      //"Authorization": "BearerAuth "+ Utilities.base64Encode(123)
  };

  var options = {
      "method" : "get",
      "headers" : headers
  };

  var pinsarray = ['411033','411026','411017','411057','411027','411001'];
  var available_sess = [];
  var datecore = new Date();
  var date = String(datecore.getDate()+1).padStart(2,'0') + '-' + String((datecore.getMonth()+1)).padStart(2, '0') + '-' +datecore.getFullYear();

  for(i=0; i<pinsarray.length; i++) {
    var url = `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByPin?pincode=${pinsarray[i]}&date=${date}`

    var response = UrlFetchApp.fetch(url, options);

    // Make request to API and get response before this point.
    var json = response.getContentText();
    var data = JSON.parse(json);
    
    //for loop for centers
    for (var centerkey in data.centers) {
      
      //check for availability
      if(data.centers[centerkey].sessions[0].available_capacity > 0 && data.centers[centerkey].sessions[0].min_age_limit == 18) {
        available_sess.push({
          'name': data.centers[centerkey].name,
          'pincode': data.centers[centerkey].pincode,
          'min_age_limit': data.centers[centerkey].sessions[0].min_age_limit,
          'available_capacity': data.centers[centerkey].sessions[0].available_capacity.toString(),
          'date': data.centers[centerkey].sessions[0].date,
          'vaccine': data.centers[centerkey].sessions[0].vaccine,
          'fee_type': data.centers[centerkey].fee_type

        });
      }
    }

  }

  Logger.log(available_sess);
  if(available_sess.length !==0) {
    sendEmail('abc@def.com,xyz@abcd.com,ramakantingle@gmail.com', available_sess);
    Logger.log('Email Sent!');    
  }
  else {
    Logger.log("Email not sent as no data.")
  }


}

function sendEmail(emailid, available_sess) {
  var datastring = "";
  for (var sesskey in available_sess) {
    datastring += `Sr.No.: ${(parseInt(sesskey)+1)}\nCenter Name: ${available_sess[sesskey].name}\nPincode: ${available_sess[sesskey].pincode} \nAge: ${available_sess[sesskey].min_age_limit}+ \nAvailable capacity: ${available_sess[sesskey].available_capacity} \nDate: ${available_sess[sesskey].date}  \nVaccine: ${available_sess[sesskey].vaccine} \nFee: ${available_sess[sesskey].fee_type} \n-------------------------------------\n`;
  }
  var emailbody = `Hi,\nVaccine is available schedule and check at centers below:\n\n${datastring}\n\nThank you, \nVijaykumar`;
  MailApp.sendEmail(emailid, "Urgent!! Vaccine Available.", emailbody);
}
