'use strict';

// HTML contains element 'message'. This is used to show the server's response
// Select it and save it as a variable/object

// "DONE" make function 'upload' which
// "DONE" prevents the form from sending
// "DONE" writes 'Upload in progress...' into 'message' element
// - selects the file input field
// - makes FormData -object and adds the file selected byt the user into the object
// - send the file to the same url as in task a by using fetch -method
// - when file upload is complete, writes server response to 'message' element
// function ends

// make an event listener which calls upload function when the form is submitted

// get data from e.g. form
const myForm = document.querySelector('form');
const msg = document.querySelector('#message');

const upload = (form) =>{
  form.preventDefault();
  msg.innerHTML = "Upload in progress...";
  const input = document.querySelector('input[type="file"]');
  const fData = new FormData(myForm);
  console.log('Input file is'+ input.files[0]);

  const settings = {
    method: 'post',
    body: fData
  };
  fetch('/node/upload', settings)
  .then( (response) => {
    return response.json();
  })
  .then( (result) => {
    console.log(result);
  });
};

form.addEventListener('submit', upload);