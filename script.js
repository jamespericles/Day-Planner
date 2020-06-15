$(document).ready(function () {
  // Variables

  setInterval(updateTime, 1000);
  setInterval(checkHour, 1000);
  const d = new Date();
  const n = d.getHours();

  // Call and display the time using moment.js
  function updateTime() {
    const time = moment();
    console.log(n);
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

    let h2_1Tag = document.getElementById("13");
    let tag1Hour = h2_1Tag.textContent;
    let tag1HourVal = parseInt(tag1Hour) + 12;

    let h2_2Tag = document.getElementById("14");
    let tag2Hour = h2_2Tag.textContent.split(":");
    let tag2HourVal = parseInt(tag2Hour) + 12;

    let h2_3Tag = document.getElementById("15");
    let tag3Hour = h2_3Tag.textContent.split(":");
    let tag3HourVal = parseInt(tag3Hour) + 12;

    let h2_4Tag = document.getElementById("16");
    let tag4Hour = h2_4Tag.textContent.split(":");
    let tag4HourVal = parseInt(tag4Hour) + 12;

    let h2_5Tag = document.getElementById("17");
    let tag5Hour = h2_5Tag.textContent.split(":");
    let tag5HourVal = parseInt(tag5Hour) + 12;

    // Formats time into (h:mm), split at the colon to focus only on the hour
    // const hour = moment().format("LT");
    // let localTime = hour.split(":");
    let currentHour = n;
    // Check whether the time is in the past, present, or future, append the appropriate class

    if (tag9HourVal === currentHour) {
      $("#timeBlock9am").addClass("present");
      $("#timeBlock9am").removeClass("future");
      $("#timeBlock9am").removeClass("past");
    } else if (tag9HourVal <= currentHour) {
      $("#timeBlock9am").removeClass("present");
      $("#timeBlock9am").removeClass("future");
      $("#timeBlock9am").addClass("past");
    } else if (tag9HourVal >= currentHour) {
      $("#timeBlock9am").addClass("future");
      $("#timeBlock9am").removeClass("present");
      $("#timeBlock9am").removeClass("past");
    }

    if (tag10HourVal === currentHour) {
      $("#timeBlock10am").addClass("present");
      $("#timeBlock10am").removeClass("future");
      $("#timeBlock10am").removeClass("past");
    } else if (tag10HourVal <= currentHour) {
      $("#timeBlock10am").removeClass("present");
      $("#timeBlock10am").removeClass("future");
      $("#timeBlock10am").addClass("past");
    } else if (tag10HourVal >= currentHour) {
      $("#timeBlock10am").addClass("future");
      $("#timeBlock10am").removeClass("present");
      $("#timeBlock10am").removeClass("past");
    }

    if (tag11HourVal === currentHour) {
      $("#timeBlock11am").addClass("present");
      $("#timeBlock11am").removeClass("future");
      $("#timeBlock11am").removeClass("past");
    } else if (tag11HourVal <= currentHour) {
      $("#timeBlock11am").removeClass("present");
      $("#timeBlock11am").removeClass("future");
      $("#timeBlock11am").addClass("past");
    } else if (tag11HourVal >= currentHour) {
      $("#timeBlock11am").addClass("future");
      $("#timeBlock11am").removeClass("present");
      $("#timeBlock11am").removeClass("past");
    }

    if (tag12HourVal === currentHour) {
      $("#timeBlock12pm").addClass("present");
      $("#timeBlock12pm").removeClass("future");
      $("#timeBlock12pm").removeClass("past");
    } else if (tag12HourVal <= currentHour) {
      $("#timeBlock12pm").removeClass("present");
      $("#timeBlock12pm").removeClass("future");
      $("#timeBlock12pm").addClass("past");
    } else if (tag12HourVal >= currentHour) {
      $("#timeBlock12pm").addClass("future");
      $("#timeBlock12pm").removeClass("present");
      $("#timeBlock12pm").removeClass("past");
    }

    if (tag1HourVal === currentHour) {
      $("#timeBlock1pm").addClass("present");
      $("#timeBlock1pm").removeClass("future");
      $("#timeBlock1pm").removeClass("past");
    } else if (tag1HourVal <= currentHour) {
      $("#timeBlock1pm").removeClass("present");
      $("#timeBlock1pm").removeClass("future");
      $("#timeBlock1pm").addClass("past");
    } else if (tag1HourVal >= currentHour) {
      $("#timeBlock1pm").addClass("future");
      $("#timeBlock1pm").removeClass("present");
      $("#timeBlock1pm").removeClass("past");
    }

    if (tag2HourVal === currentHour) {
      $("#timeBlock2pm").addClass("present");
      $("#timeBlock2pm").removeClass("future");
      $("#timeBlock2pm").removeClass("past");
    } else if (tag2HourVal <= currentHour) {
      $("#timeBlock2pm").removeClass("present");
      $("#timeBlock2pm").removeClass("future");
      $("#timeBlock2pm").addClass("past");
    } else if (tag2HourVal >= currentHour) {
      $("#timeBlock2pm").addClass("future");
      $("#timeBlock2pm").removeClass("present");
      $("#timeBlock2pm").removeClass("past");
    }

    if (tag3HourVal === currentHour) {
      $("#timeBlock3pm").addClass("present");
      $("#timeBlock3pm").removeClass("future");
      $("#timeBlock3pm").removeClass("past");
    } else if (tag3HourVal <= currentHour) {
      $("#timeBlock3pm").removeClass("present");
      $("#timeBlock3pm").removeClass("future");
      $("#timeBlock3pm").addClass("past");
    } else if (tag3HourVal >= currentHour) {
      $("#timeBlock3pm").addClass("future");
      $("#timeBlock3pm").removeClass("present");
      $("#timeBlock3pm").removeClass("past");
    }

    if (tag4HourVal === currentHour) {
      $("#timeBlock4pm").addClass("present");
      $("#timeBlock4pm").removeClass("future");
      $("#timeBlock4pm").removeClass("past");
    } else if (tag4HourVal <= currentHour) {
      $("#timeBlock4pm").removeClass("present");
      $("#timeBlock4pm").removeClass("future");
      $("#timeBlock4pm").addClass("past");
    } else if (tag4HourVal >= currentHour) {
      $("#timeBlock4pm").addClass("future");
      $("#timeBlock4pm").removeClass("present");
      $("#timeBlock4pm").removeClass("past");
    }

    if (tag5HourVal === currentHour) {
      $("#timeBlock5pm").addClass("present");
      $("#timeBlock5pm").removeClass("future");
      $("#timeBlock5pm").removeClass("past");
    } else if (tag5HourVal <= currentHour) {
      $("#timeBlock5pm").removeClass("present");
      $("#timeBlock5pm").removeClass("future");
      $("#timeBlock5pm").addClass("past");
    } else if (tag5HourVal >= currentHour) {
      $("#timeBlock5pm").addClass("future");
      $("#timeBlock5pm").removeClass("present");
      $("#timeBlock5pm").removeClass("past");
    }
    // $("#timeBlock10am").toggleClass("present", n == currentHour);
    // $("#timeBlock10am").toggleClass("past", n < currentHour);
    // $("#timeBlock30am").toggleClass("future", n > currentHour);3
    // $("#timeBlock31am").toggleClass("present", n == currentHour);
    // $("#timeBlock11am").toggleClass("past", n < currentHour);
    // $("#timeBlock31am").toggleClass("future", n > currentHour);3
    // $("#timeBlock32pm").toggleClass("present", n == currentHour);
    // $("#timeBlock12pm").toggleClass("past", n < currentHour);
    // $("#timeBlock32pm").toggleClass("future", n > currentHour);3
    // $("#timeBlock3pm").toggleClass("present", n == currentHour);
    // $("#timeBlock1pm").toggleClass("past", n > currentHour);
    // $("#timeBlock1pm").toggleClass("future", n < currentHour);

    // $("#timeBlock2pm").toggleClass("present", n == currentHour);
    // $("#timeBlock2pm").toggleClass("past", n > currentHour);
    // $("#timeBlock2pm").toggleClass("future", n < currentHour);4
    // $("#timeBlock4pm").toggleClass("present", n == currentHour);
    // $("#timeBlock3pm").toggleClass("past", n > currentHour);
    // $("#timeBlock4pm").toggleClass("future", n < currentHour);4
    // $("#timeBlock4pm").toggleClass("present", n == currentHour);
    // $("#timeBlock4pm").toggleClass("past", n > currentHour);
    // $("#timeBlock4pm").toggleClass("future", n < currentHour);

    // $("#timeBlock5pm").toggleClass("present", n == currentHour);
    // $("#timeBlock5pm").toggleClass("past", n > currentHour);
    // $("#timeBlock5pm").toggleClass("future", n < currentHour);

    // Rewrite to toggle, convert strings to integers, military time
    // currentHour = localTime.join(":");5
    // $("#timeBlock5am").toggleClass("future", n <= 17);
    // $("#timeBlock9am").toggleClass("past", n >= 17);5
    // $("#timeBlock10am").toggleClass("future", n <= 17);
    // $("#timeBlock50am").toggleClass("past", n >= 17);5
    // $("#timeBlock11am").toggleClass("future", n <= 17);
    // $("#timeBlock11am").toggleClass("past", n >= 17);

    // $("#timeBlock12pm").toggleClass("future", n <= 17);
    // $("#timeBlock12pm").toggleClass("past", n >= 17);

    // $("#timeBlock1pm").toggleClass("future", n <= 17);
    // $("#timeBlock1pm").toggleClass("past", n >= 17);

    // $("#timeBlock2pm").toggleClass("future", n <= 17);
    // $("#timeBlock2pm").toggleClass("past", n >= 17);

    // $("#timeBlock3pm").toggleClass("future", n <= 17);
    // $("#timeBlock3pm").toggleClass("past", n >= 17);

    // $("#timeBlock4pm").toggleClass("future", n <= 17);
    // $("#timeBlock4pm").toggleClass("past", n >= 17);
    // $("#timeBlock4pm").toggleClass("present", n == n);

    // $("#timeBlock5pm").toggleClass("future", n <= 17);
    // $("#timeBlock5pm").toggleClass("past", n <= 17);
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
