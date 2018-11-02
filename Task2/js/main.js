'use strict';

let formOK = 0;

const inputsArr = document.querySelectorAll('input'); //returns an array of inputs

console.log(inputsArr); //test

console.log(inputsArr[0].value); // test

// function


// =====================================
//              functions
// =====================================
const checkAttribute = (elements, attr, fun) => {
  elements.forEach((item) => {
        if (item.hasAttribute(attr)) {
          fun(item);
        }
      },
  );
};

const checkEmpty = (item) => {
  if (!(item.value === '')) {
    formOK++;
    console.log("checkEmpty OK / formOK +1 ="+formOK);
    item.removeAttribute('style');
  } else {
    formOK--;
    console.log("checkEmpty # / formOK -1 ="+formOK);
    item.setAttribute('style', 'border: red 2px solid');
    document.getElementById(item.name+"-s").innerHTML = errorMsg(item);
    console.log(item.name);
    console.log(item.name+"-s");
    console.log(errorMsg(item));
  }
};

const checkPattern = (item) => {
  const pattern = new RegExp(item.pattern);
  if (pattern.test(item.value)) {
    formOK++;
    console.log("checkPattern OK / formOK +1 ="+formOK);
    item.removeAttribute('style');
  } else {
    formOK--;
    console.log("checkPattern # / formOK -1 ="+formOK)
    item.setAttribute('style', 'border: red 2px solid');
  }
};

const errorMsg = (item) => {
  switch(item.name) {
    case "first-name":
      return "Please provide a First name containing only letters."
      break;
    case "last-name":
      return "Please provide a last name containing only letters."
      break;
    case "email":
      return "Please provide a valid email address. e.g. robin.hood@sherwood.uk"
      break;
    case "phone-number":
      return "Please provide a phone number with this format +0123456789"
      break;
    case "password":
      return "Please provide a password."
      break;

    default:
  }
};
// ============================================

const form = document.querySelector('form');

console.log(form); //test

//function
form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  formOK = 0;
  checkAttribute(inputsArr, 'pattern', checkPattern);
  checkAttribute(inputsArr, 'required', checkEmpty);
  if (formOK === 10) {
    form.submit();
    alert("Thank you. your form has been submitted :)")
  }
});





