var x = document.getElementById("veigar-audio");
var quotesArr = ["I will swallow your soul.","What's black and blue and is about to show you the definition of pain?!", "It's only a short way? Is that a short joke?!"]
var newQuote = document.querySelector("#new-quote");
var quote = document.querySelector("#text");



onStart();

function onStart() {
  newQuote.addEventListener('click', function name(params) {
  
    quote.textContent = quotesArr[getRandomInt(2)];
  
  
  });
  
    generateRandomColors();
    generateRandomQuote()
}





function playAudio() { 
  x.play(); 
} 


function generateRandomColors() {

    
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

