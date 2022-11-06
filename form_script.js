

function myPrintFn(that) {
  let ccode;
  let cnum;
  
  if (that.ccode.value != "") {
     ccode = that.ccode.value; 
  }
  if (that.cnum.value != "") {
     cnum = that.cnum.value; 
  }

  if (findCourse(cnum, ccode)) {
    
  } else {
    //TODO
  }
  
}

document.getElementById("confirm_in").innerHTML = that.ccode.value + that.cnum.value + " was recieved";

function getCcode() {
  return this.ccode;
}

function getCnum() {
  return this.cnum;
}