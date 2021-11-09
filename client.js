$(document).ready(jqReady);

function jqReady() {
  renderGuessWhoPanels(people);
  $('.guessWhoDiv').on('click', 'img', handlePersonClick);
};

// Function renders all the images from provided array's githubUsername profile picture
function renderGuessWhoPanels(array){
    //people [], for each render the following
  for (let i in array){
    let guessWhoPanel = `
    <img src="https://github.com/${array[i].githubUsername}.png?size=250" alt="Profile image of ${array[i].name}" data-name="${array[i].name}"></img>
  `;     // meta data so we can identify when we click them ✅

  //Append each picture to the guessWhoDiv
  $('.guessWhoDiv').append(guessWhoPanel);
  }; // end for-in through array loop
}; // end renderGuessWhoPanels

// Function that is called when image is clicked
function handlePersonClick() {
  let clickedPerson = $(this).data('name');
  if (clickedPerson === 'Kelsey') {
    alert('You found Kelsey!')
  } else {
    alert('That is not Kelsey. Try again.')
  }
}

// Random Number Generator Function provided in README ✅
function randomNumber(min, max){
  return Math.floor(Math.random() * (1 + max - min) + min);
}; // end randomNumber

// function pickRandomPerson(peopleList) {
//     return peopleList[randomNumber((0, (people.length - 1)))].name;
//   };
