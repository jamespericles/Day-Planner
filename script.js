$(document).ready(function () {
  // Variables

  setInterval(updateTime, 1000);
  setInterval(checkHour, 1000);

  // Call and display the time using moment.js
  function updateTime() {
    const time = moment();
    const eDisplayMoment = document.getElementById("currentDay");
    eDisplayMoment.innerHTML = time.format("M-D-YYYY hh:mm:ss");
  }

  // Create array from the string in <h2> elements
  // Split the value at the colon to compare just the hour of <li> to current hour
  function checkHour() {
    let h2_9Tag = document.getElementById("9");
    // $("9") change all to jquery
    let tag9Hour = h2_9Tag.textContent.split(":");
    let tag9HourVal = parseInt(tag9Hour[0]);

    let h2_10Tag = document.getElementById("10");
    let tag10Hour = h2_10Tag.textContent.split(":");
    let tag10HourVal = parseInt(tag10Hour[0]);

    let h2_11Tag = document.getElementById("11");
    let tag11Hour = h2_11Tag.textContent.split(":");
    let tag11HourVal = parseInt(tag11Hour[0]);

    let h2_12Tag = document.getElementById("12");
    let tag12Hour = h2_12Tag.textContent.split(":");
    let tag12HourVal = parseInt(tag12Hour[0]);

    let h2_1Tag = document.getElementById("1");
    let tag1Hour = h2_1Tag.textContent.split(":");
    let tag1HourVal = parseInt(tag1Hour[0]);

    let h2_2Tag = document.getElementById("2");
    let tag2Hour = h2_2Tag.textContent.split(":");
    let tag2HourVal = parseInt(tag2Hour[0]);

    let h2_3Tag = document.getElementById("3");
    let tag3Hour = h2_3Tag.textContent.split(":");
    let tag3HourVal = parseInt(tag3Hour[0]);

    let h2_4Tag = document.getElementById("4");
    let tag4Hour = h2_4Tag.textContent.split(":");
    let tag4HourVal = parseInt(tag4Hour[0]);

    let h2_5Tag = document.getElementById("5");
    let tag5Hour = h2_5Tag.textContent.split(":");
    let tag5HourVal = parseInt(tag5Hour[0]);

    // Formats time into (h:mm), split at the colon to focus only on the hour
    const hour = moment().format("LT");
    let localTime = hour.split(":");
    let currentHour = localTime[0];
    currentHour = 9;
    // Check whether the time is in the past, present, or future, append the appropriate class
    $("#timeBlock9am").toggleClass("present", tag9HourVal == currentHour);
    $("#timeBlock9am").toggleClass("past", tag9HourVal > currentHour);
    $("#timeBlock9am").toggleClass("future", tag9HourVal < currentHour);

    $("#timeBlock10am").toggleClass("present", tag10HourVal == currentHour);
    $("#timeBlock10am").toggleClass("past", tag10HourVal < currentHour);
    $("#timeBlock10am").toggleClass("future", tag10HourVal > currentHour);

    $("#timeBlock11am").toggleClass("present", tag11HourVal == currentHour);
    $("#timeBlock11am").toggleClass("past", tag11HourVal < currentHour);
    $("#timeBlock11am").toggleClass("future", tag11HourVal > currentHour);

    $("#timeBlock12pm").toggleClass("present", tag12HourVal == currentHour);
    $("#timeBlock12pm").toggleClass("past", tag12HourVal < currentHour);
    $("#timeBlock12pm").toggleClass("future", tag12HourVal > currentHour);

    $("#timeBlock1pm").toggleClass("present", tag1HourVal == currentHour);
    $("#timeBlock1pm").toggleClass("past", tag1HourVal > currentHour);
    $("#timeBlock1pm").toggleClass("future", tag1HourVal < currentHour);

    $("#timeBlock2pm").toggleClass("present", tag2HourVal == currentHour);
    $("#timeBlock2pm").toggleClass("past", tag2HourVal > currentHour);
    $("#timeBlock2pm").toggleClass("future", tag2HourVal < currentHour);

    $("#timeBlock3pm").toggleClass("present", tag3HourVal == currentHour);
    $("#timeBlock3pm").toggleClass("past", tag3HourVal > currentHour);
    $("#timeBlock3pm").toggleClass("future", tag3HourVal < currentHour);

    $("#timeBlock4pm").toggleClass("present", tag4HourVal == currentHour);
    $("#timeBlock4pm").toggleClass("past", tag4HourVal > currentHour);
    $("#timeBlock4pm").toggleClass("future", tag4HourVal < currentHour);

    $("#timeBlock5pm").toggleClass("present", tag5HourVal == currentHour);
    $("#timeBlock5pm").toggleClass("past", tag5HourVal > currentHour);
    $("#timeBlock5pm").toggleClass("future", tag5HourVal < currentHour);

    // Recombine currentHour because we need to
    // specify if we're past 5pm rather than comparing just the hour "5"
    // currentHour = localTime.join(":");

    // $("#timeBlock9am").removeClass("future", currentHour >= "5:00 PM");
    // $("#timeBlock9am").addClass("past", currentHour >= "5:00 PM");

    // $("#timeBlock10am").removeClass("future", currentHour >= "5:00 PM");
    // $("#timeBlock10am").addClass("past", currentHour >= "5:00 PM");

    // $("#timeBlock11am").removeClass("future", currentHour >= "5:00 PM");
    // $("#timeBlock11am").addClass("past", currentHour >= "5:00 PM");

    // $("#timeBlock12pm").removeClass("future", currentHour >= "5:00 PM");
    // $("#timeBlock12pm").addClass("past", currentHour >= "5:00 PM");

    // $("#timeBlock1pm").removeClass("future", currentHour >= "5:00 PM");
    // $("#timeBlock1pm").addClass("past", currentHour >= "5:00 PM");

    // $("#timeBlock2pm").removeClass("future", currentHour >= "5:00 PM");
    // $("#timeBlock2pm").addClass("past", currentHour >= "5:00 PM");

    // $("#timeBlock3pm").removeClass("future", currentHour >= "5:00 PM");
    // $("#timeBlock3pm").addClass("past", currentHour >= "5:00 PM");

    // $("#timeBlock4pm").removeClass("future", currentHour >= "5:00 PM");
    // $("#timeBlock4pm").addClass("past", currentHour >= "5:00 PM");

    // $("#timeBlock5pm").removeClass("future", currentHour >= "5:00 PM");
    // $("#timeBlock5pm").addClass("past", currentHour >= "5:00 PM");
  }

  // Load time immediately, check hour related to timeblock value and current time
  updateTime();
  checkHour();

  // Update DOM

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
});
