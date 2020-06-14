$(document).ready(function () {
  // Variables

  let currentTime = setInterval(updateTime, 1000);

  function updateTime() {
    const time = moment();
    const eDisplayMoment = document.getElementById("currentDay");
    eDisplayMoment.innerHTML = time.format("M-D-YYYY hh:mm:ss");
  }

  let colorFormatter = setInterval(checkHour, 1000);
  console.log(currentHour);
  console.log(tag9HourVal);
  function checkHour() {
    let h2_9Tag = document.getElementById("9");
    let h2_10Tag = document.getElementById("10");
    let h2_11Tag = document.getElementById("11");
    let h2_12Tag = document.getElementById("12");
    let h2_1Tag = document.getElementById("1");
    let h2_2Tag = document.getElementById("2");
    let h2_3Tag = document.getElementById("3");
    let h2_4Tag = document.getElementById("4");
    let h2_5Tag = document.getElementById("5");

    let tag9Hour = h2_9Tag.textContent.split(":");
    let tag9HourVal = tag9Hour[0];
    const hour = moment().format("LT");
    let localTime = hour.split(":");
    let currentHour = localTime[0];
  }
  checkHour();
  // Load time immediately
  updateTime();
  checkStanding();

  //   Update DOM

  function updateDOM() {
    //   Specific handlers for each text input field
    let savedEvent9am = localStorage.getItem("9am");
    let display9am = $("#display9am");
    display9am.html(savedEvent9am);

    let savedEvent10am = localStorage.getItem("10am");
    let display10am = $("#display10am");
    display10am.html(savedEvent10am);

    let savedEvent11am = localStorage.getItem("11am");
    let display11am = $("#display11am");
    display11am.html(savedEvent11am);

    let savedEvent12pm = localStorage.getItem("12pm");
    let display12pm = $("#display12pm");
    display12pm.html(savedEvent12pm);

    let savedEvent1pm = localStorage.getItem("1pm");
    let display1pm = $("#display1pm");
    display1pm.html(savedEvent1pm);

    let savedEvent2pm = localStorage.getItem("2pm");
    let display2pm = $("#display2pm");
    display2pm.html(savedEvent2pm);

    let savedEvent3pm = localStorage.getItem("3pm");
    let display3pm = $("#display3pm");
    display3pm.html(savedEvent3pm);

    let savedEvent4pm = localStorage.getItem("4pm");
    let display4pm = $("#display4pm");
    display4pm.html(savedEvent4pm);

    let savedEvent5pm = localStorage.getItem("5pm");
    let display5pm = $("#display5pm");
    display5pm.html(savedEvent5pm);
  }
  //   Execute update function before listening for more user input
  updateDOM();
  const saveBtns = $(".saveBtn");

  for (let i = 0; i < saveBtns.length; i++) {
    saveBtns[i].addEventListener("click", function (e) {
      let id = e.target.id;
      let parentElement = $(`#timeBlock${id}`);
      let newValue = parentElement.children()[0].value;
      localStorage.setItem(id, newValue);
      let input = parentElement.children()[0];
      //   Clear textfield after user saves event
      input.value = "";
      //   Update DOM after user saves new event
      updateDOM();
    });
  }
  function checkStanding() {}
  // Check if current time is past, present, or future

  // if else statements using isBefore() isAfter() isSame() to append classes for each time block
  // if isSame === True, add present class, if isSame === False, check if isAfter is true or if isSame is trye
  // append respective class for each time block
});
