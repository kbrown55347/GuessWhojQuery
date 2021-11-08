$(document).ready(jqReady);

console.log('Here are all the available people:', people);

function jqReady() {
  console.log('javascript and jquery loaded');  
  console.log(people); // Properly accessing data.js!
  renderGuessWhoPanels(people);
  $('img').on('click', imageClick);

};

// divs with people's pictures
  // do we hardcode them, or do we render them based on the data


//define a function that does this ()
function renderGuessWhoPanels(array){
  for (let i in array){
    let guessWhoPanel = `
    <img src="https://github.com/${array[i].name}.png?size=250" alt="Profile image of ${array[i].githubUsername}" data-name="${array[i].name}"></img>
  `;

    // meta data so we can identify when we click them ✅

  $('.guessWhoDiv').append(guessWhoPanel);
  }; // end for-in through array loop
}; // end renderGuessWhoPanels
 //people [], for each render the following
  
function imageClick() {
  console.log('image clicked');
  
}




