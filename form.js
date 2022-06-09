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

var semail=document.getElementById("valemail");
var smob=document.getElementById("valmob");
var sarr=document.getElementById("dateof");
var sdep=document.getElementById("ddateof");

function emailValidator(email){
  if (!email.value.match(/(.+)@(.+){2,}\.(.+){2,}/)){
    return false;
  }
  return true;
}
function mobileValidator(mobile){
  if (!(mobile.value.length == 10 && mobile.value.match(/^[1-9][0-9]{9}$/))){
    return false;
  }
  return true;
}
function isBeforeTodayVal(date) {
  if(!isBeforeToday(date.value)){
    return false;
  }
  return true;
}
function isBeforeArrivalVal(date,ddate) {
  if((isBeforeArrival(date.value,ddate.value))){
    return false;
  }
  return true;
}

var funArr=[[emailValidator,[email],semail,"Invalid Email address."],
            [mobileValidator,[mobile],smob,"Should be 10 digits"],
            [isBeforeTodayVal,[date],sarr, "Arrival Date can't be past"],
            [isBeforeArrivalVal,[date,ddate],sdep,"Departure date should be after Arrival date"]];

 function validatorFun(){
    funArr.forEach((func) => {
     // console.log((func[0](...func[1])));
      if (!(func[0](...func[1]))){
        func[2].innerHTML=func[3];
    }
  })
 }
