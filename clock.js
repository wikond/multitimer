function clockDisplay() {
  let date = new Date();
  let clockHour = date.getHours(); // 0 - 23
  let clockMinute = date.getMinutes(); // 0 - 59
  let clockSecond = date.getSeconds(); // 0 - 59
  let dateYear = date.getFullYear();
  let dateMonth = date.getMonth() + 1;
  let dateDay = date.getUTCDay();


  if (clockHour < 10) clockHour = "0" + clockHour;
  if (clockMinute < 10) clockMinute = "0" + clockMinute;
  if (clockSecond < 10) clockSecond = "0" + clockSecond;
  if (dateDay < 10) dateDay = "0" + dateDay;
  if (dateMonth < 10) dateMonth = "0" + dateMonth;

  let clockTime = clockHour + ":" + clockMinute + ":" + clockSecond + " ";
  let clockDate = dateYear + "/" + dateMonth + "/" + dateDay + "  ";
  document.getElementById("date").innerText = clockDate;
  document.getElementById("time").innerText = clockTime;
  //document.getElementById("clock").textContent = clockDate + clockTime;

  setTimeout(clockDisplay, 1000);
}

clockDisplay();
