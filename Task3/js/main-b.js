// Create function 'showImages' which
// loads images.json which has links to images as an array.

// create a loop which builds the following HTML from every image in the array: 
/*
<li>
    <figure>
        <a href="img/original/filename.jpg"><img src="img/thumbs/filename.jpg"></a>
        <figcaption>
            <h3>Title</h3>
        </figcaption>
    </figure>
</li>
*/
// After the loop print the HTML into <ul> element using innerHTML.
const showImages = (images) => {
  /*images.forEach((image) => {
    document.querySelector('ul').innerHTML += `<li>
    <figure>
        <a href="img/original/${image.mediaUrl}"><img src="img/thumbs/${image.mediaThumb}"></a>
        <figcaption>
            <h3>${image.mediaTitle}</h3>
        </figcaption>
    </figure>
</li>`;
  });
};*/
  /*
  // or
    for (let i = 0 ; i < images.lenght; i++){
      console.log(images[i]);
    }
    */
  // or
  document.querySelector('ul').innerHTML = images.map((image) => {
    return`<li>
        <figure>
           <a href="img/original/${image.mediaUrl}"><img src="img/thumbs/${image.mediaThumb}"></a>
           <figcaption>
               <h3>${image.mediaTitle}</h3>
           </figcaption>
        </figure>
    </li>`;
  }).join('');
};

fetch('images.json').then((response) => {
  return response.json();
}).then((json) => {
  showImages(json);
});

