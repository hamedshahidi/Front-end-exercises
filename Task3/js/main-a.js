// Create function 'showImages' which
// adds the loaded HTML content to <ul> element


//=========== using fetch ==============
const showImages = (html) => {
  document.querySelector('ul').innerHTML = html;
};

fetch('images.html').then((response) => {
  console.log(response);
  return response.text();
}).then((html) => {
  showImages(html);
});


//============ usuin ajax ==================



//============ using ===============

