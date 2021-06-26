function ques1() {
  var date = new Date();
  document.getElementById("ques1").innerHTML = date;
}

function ques2() {
  var date = new Date();
  var months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "Septemeber",
    "October",
    "November",
    "December",
  ];
  var curMonth = date.getMonth();
  document.getElementById("ques2").innerHTML =
    "Current Month: " + months[curMonth];
}

function ques3() {
  var date = new Date();
  var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  var curDay = date.getDay();
  document.getElementById("ques3").innerHTML = "Today is: " + days[curDay];
}

function ques4() {
  var date = new Date();
  var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  var curDay = date.getDay();
  if (curDay == 6 || curDay == 0) {
    document.getElementById("ques4").innerHTML = "It's Fun Day";
  } else {
    document.getElementById("ques4").innerHTML = "Today is: " + days[curDay];
  }
}

function ques5() {
  var date = new Date();
  var dateOfMonth = date.getDate();
  if (dateOfMonth < 16) {
    document.getElementById("ques5").innerHTML =
      "First fifteen days of the Month";
  } else {
    document.getElementById("ques5").innerHTML = "Last days of the Month";
  }
}

function ques6() {
  var date = new Date();
  var miliSecondsSince = date.getTime();
  var minsSince = Math.floor(miliSecondsSince / 60000);
  document.getElementById("ques6").innerHTML = "Current Date: " + date;
  document.getElementById("ques6").innerHTML +=
    " <br> Elapsed Miliseconds since January 1, 1970: " +
    miliSecondsSince +
    "<br> Elapsed Miliseconds since January 1, 1970: " +
    minsSince;
}

function ques7() {
  var date = new Date();
  var checkNoon = date.getHours();
  if (checkNoon < 12) {
    document.getElementById("ques7").innerHTML = "It's AM";
  } else {
    document.getElementById("ques7").innerHTML = "It's PM";
  }
}

function ques8() {
  var laterDate = new Date("Dec 31, 2020");
  document.getElementById("ques8").innerHTML = "Later date: " + laterDate;
}

function ques9() {
  var ramzan2021 = new Date("April 13,2021");
  var today = new Date();

  var todaymiliSecond = today.getTime();
  var ramzanMiliSecond = ramzan2021.getTime();

  var diff = todaymiliSecond - ramzanMiliSecond;

  var daysDiff = Math.floor(diff / (1000 * 60 * 60 * 24));

  document.getElementById("ques9").innerHTML =
    daysDiff + " days have passed since 1st ramadan, 2021";
}

function ques10() {
  var beginning = new Date("Jan 01,2021");
  var ref = new Date();

  var todaymiliSecond = ref.getTime();
  var beginningMiliiSec = beginning.getTime();

  var diff = todaymiliSecond - beginningMiliiSec;

  var secDiff = Math.floor(diff / 1000);

  document.getElementById("ques10").innerHTML =
    "On reference date " +
    ref +
    "<br> " +
    secDiff +
    " Seconds had been passed since beginning of 2021";
}

function ques11() {
  var today = new Date();
  var currentDate = today.toString();
  document.getElementById("ques11").innerHTML = currentDate;

  var currentHour = today.getHours();
  var replaceHour = currentDate.replace(currentHour, --currentHour);
  document.getElementById("ques11").innerHTML +=
    "<br>1 hour ago: it was " + replaceHour;
}

function ques12() {
  var today = new Date();
  var currentDate = today.toString();

  var currentYear = today.getFullYear();

  var replaceYear = currentDate.replace(currentYear, currentYear - 100);
  document.getElementById("ques12").innerHTML =
    "Current date :" +
    currentDate +
    "<br>100 Years back , it was " +
    replaceYear;
}

function ques13() {
  var inp13 = Number(prompt("Enter your age "));
  var date = new Date();

  var currentYear = date.getFullYear();

  var birthYear = currentYear - inp13;

  document.getElementById("ques13").innerHTML =
    "Your age is " + inp13 + "<br> Your birth year is " + birthYear;
}

function ques14() {
  var date = new Date();
  var months = [
    "January",
    "Febuary",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "Octuber",
    "November",
    "December",
  ];

  var customerName = prompt("Enter you Name");
  var currentMonth = months[date.getMonth()];

  var noOfUnits = Number(prompt("Enter Number of units"));
  var chargesPerUnit = 16;
  var latePaymentSurcharge = 350;

  var netAmountPayable = noOfUnits * chargesPerUnit; //Within Due Date
  var grossAmountPayable = netAmountPayable + latePaymentSurcharge; //After Due Date

  document.getElementById("ques14").innerHTML = "<h1>K-Electric Bill</h1>";
  document.getElementById("ques14").innerHTML +=
    "<br> Customer Name: <b> " + customerName + "</b>";
  document.getElementById("ques14").innerHTML +=
    "<br>Month: <b>" + currentMonth + "</b>";
  document.getElementById("ques14").innerHTML +=
    "<br>No of units: <b> " + noOfUnits + "</b>";
  document.getElementById("ques14").innerHTML +=
    "<br>Charges per units: <b>" + chargesPerUnit + "</b><br>";
  document.getElementById("ques14").innerHTML +=
    "<br>Net amount payable (within Due Date): <b> " +
    netAmountPayable +
    "</b>";
  document.getElementById("ques14").innerHTML +=
    "<br>Late payment surcharge:  <b>" + latePaymentSurcharge + "</b>";
  document.getElementById("ques14").innerHTML +=
    "<br>Gross amount payable (after Due Date):  <b>" +
    grossAmountPayable +
    "</b>";
}
