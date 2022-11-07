let courses = [];

let ccode = "";
let cnum = 000;

//copy all the work after current date here to form a new array
let count = 0
let current_working = [];
let tasks = getAllTasks();
let total_tasks = tasks.length;

//get the current time
const current_time = new Date();


fetch('./data/UBC_courses.json')
  .then((response) => response.json())
  .then((json) => parseJson(json))


//Purpose: to parse all the date strings into Date objects
function parseJson(json) {
  courses = json;
  for (categories in courses.deadline_categories) {
    for (category of categories) {
      for (deadline of category.deadlines) {
        deadline.due_date = new Date("deadline.due_date");
      }
    }
  }
  console.log(courses);
  setTasksInProgress();
}

//check the latest tasks, don't get tasks that have already passed
function setTasksInProgress() {
  while (count < total_tasks) {
    if (current_time <= tasks[count].due_date) {
      current_working.push(tasks[count]);
    }
    count++;
  }
}

function printVar() {

  let elem = document.getElementById("name");
  if (elem != null) {
   // elem.innerHTML = courses[0].code + " " + courses[0].number;
  }
  console.log(courses[0]);

}

//recomendation algorithm

//purpose: returns an arry of all the individual deadlines, regardless of category
function getAllTasks() {
  let tasks = [];
  for (categories in courses.deadline_categories) {
    for (category of categories) {
      for (deadline of category.deadlines) {
        tasks.push(deadline);
      }
    }
  }
  return tasks;
}

//reutrns the nearest deadline (coursework) need to do
function findNearestCourse() {
  //number of the total tasks currently need to be done
  let total_current_tasks = current_working.length;

  let nearest_time = new Date("3000-12-24T18:33:30.000Z");

  for (let iter = 0; iter < total_current_tasks; iter++) {
    if (current_working[iter].due_date < nearest_time) {
      nearest_time = current_working[iter];
    }
  }
  return nearest_time;
}


//--------------------------

function setCourse(that) {
  this.ccode = that.ccode.value;
  this.cnum = that.cnum.value;
  if (findCourse(this.ccode, this.cnum)) {

    alert("Found course: " + this.ccode + " " + this.cnum);
  } else {
    alert("Course not in database! Sorry for the inconvienience.");
  }

  window.location.href = "coursework.html";
}

//SCRIPT FOR FORM
//purpose: produce true if the course code and num matches given code and num 
function findCourse(ccode, cnum) {
  for (course of courses) {
    if (course.code == ccode && course.number == cnum) {
      return true;
    }
  }
  return false;
}

function getCcode() {
  return this.ccode;
}

function getCnum() {
  return this.cnum;
}





