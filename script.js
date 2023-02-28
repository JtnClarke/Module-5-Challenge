// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

//working on the save button so that it will save user edits to local storage
$(document).ready(function () {
  
});

function saveBtnFunction(event){
  console.log(event)
  var value 
  var time 
  if (event.target.nodeName === 'I') {
    value = (event.target.parentNode.previousElementSibling.value)
    time = (event.target.parentNode.previousElementSibling.previousElementSibling.innerText)
  } else {
    value = (event.target.previousElementSibling.value)
    time = (event.target.previousElementSibling.previousElementSibling.innerHTML)
  }
  console.log(time, value)


window.localStorage.setItem(time, value)


}

document.querySelectorAll('.saveBtn').forEach(element => {
  element.addEventListener('click', saveBtnFunction)
});

document.querySelectorAll('.time-block').forEach(element => {
  console.log(element.children[0].innerHTML)
  var time = element.children[0].innerHTML
  var task = localStorage.getItem(time)
  element.children[1].value = task
})

//function and varibles to create a live clock
function liveTime(){
  var dateTime = new Date();
  var hrs = dateTime.getHours();
  var mins = dateTime.getMinutes();
  var sec = dateTime.getSeconds();

  document.getElementById('hours').innerHTML = hrs;
  document.getElementById('minutes').innerHTML = mins;
  document.getElementById('seconds').innerHTML = sec;
}

setInterval(liveTime, 10)



// TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.