var email=document.getElementById("inputEmail");
var mobile=document.getElementById("mobile");
var date=document.getElementById("date");
var ddate=document.getElementById("ddate");

function isBeforeToday(date) {
    return new Date(date).valueOf() > new Date().valueOf();
  }

function isBeforeArrival(date,ddate) {
    return new Date(date).valueOf() > new Date(ddate).valueOf();
  }

function formValidation(){

    if (!email.value.match(/(.+)@(.+){2,}\.(.+){2,}/)) {
        
        document.getElementById("valemail").innerHTML =
          "Invalid Email address.";
        return false;
      }
      document.getElementById("valemail").innerHTML = "";

    if (!(mobile.value.length == 10 && mobile.value.match(/^[1-9][0-9]{9}$/))) {
        document.getElementById("valmob").innerHTML =
          "Should be 10 digits";
        return false;
      }
      document.getElementById("valmob").innerHTML = "";

    if (!isBeforeToday(date.value)) {
        document.getElementById("dateof").innerHTML =
          "Arrival Date can't be past";
        return false;
      }
      document.getElementById("dateof").innerHTML = "";

      if (isBeforeArrival(date.value,ddate.value)) {
        document.getElementById("ddateof").innerHTML =
          "Departure date should be after Arrival date";
        return false;
      }
      document.getElementById("ddateof").innerHTML = "";
      
      return true;
}
