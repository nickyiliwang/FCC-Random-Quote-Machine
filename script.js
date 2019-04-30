var quotesObj = {
  0: [
    "I will swallow your soul.",
    "https://vignette.wikia.nocookie.net/leagueoflegends/images/a/a9/Veigar.attack1.ogg/revision/latest?cb=20121127014702",
    "https://vignette.wikia.nocookie.net/leagueoflegends/images/e/e4/Veigar.laugh1.ogg/revision/latest?cb=20140205175658"
  ],
  1: [
    "Even death trembles in my presence.",
    "https://vignette.wikia.nocookie.net/leagueoflegends/images/0/02/Veigar.attack2.ogg/revision/latest?cb=20121127014703",
    "https://vignette.wikia.nocookie.net/leagueoflegends/images/d/df/Veigar.laugh2.ogg/revision/latest?cb=20140205175658"
  ],
  2: [
    "Give up now!",
    "https://vignette.wikia.nocookie.net/leagueoflegends/images/7/71/Veigar.attack3.ogg/revision/latest?cb=20121127014703",
    "https://vignette.wikia.nocookie.net/leagueoflegends/images/7/73/Veigar.laugh3.ogg/revision/latest?cb=20140205175659"
  ]
};

var newNumber = 0;

onStart();

function onStart() {
  onclick();
  newQuoteButton();
  playAudio();
}

function onclick() {
  $("#new-quote").on("click", function() {
    getRandomInt(2);
  });
}

function newQuoteButton() {
  $("#new-quote").on("click", function() {
    $("#text").text(quotesObj[newNumber][0]);
  });
}

function playAudio() {
  var audio = new Audio(quotesObj[newNumber][1]);
  var laugh = new Audio(quotesObj[newNumber][2]);
  $("#audio-btn").click(e => audio.play());
  $(audio).on("ended", e => laugh.play());
}

function getRandomInt(max) {
  newNumber = Math.floor(Math.random() * Math.floor(max));
  return newNumber;
}
