var newNumber = 0;

var quotesObj = {
  // Quote, name, icon, voice, laugh
  0: [
    "I will swallow your soul.",
    "Veigar",
    "https://vignette.wikia.nocookie.net/leagueoflegends/images/d/d3/Veigar_OriginalCircle.png/revision/latest?cb=20171112184736",
    "https://vignette.wikia.nocookie.net/leagueoflegends/images/a/a9/Veigar.attack1.ogg/revision/latest?cb=20121127014702",
    "https://vignette.wikia.nocookie.net/leagueoflegends/images/e/e4/Veigar.laugh1.ogg/revision/latest?cb=20140205175658"
  ],
  1: [
    "Even death trembles in my presence.",
    "Veigar",
    "https://vignette.wikia.nocookie.net/leagueoflegends/images/d/d3/Veigar_OriginalCircle.png/revision/latest?cb=20171112184736",
    "https://vignette.wikia.nocookie.net/leagueoflegends/images/0/02/Veigar.attack2.ogg/revision/latest?cb=20121127014703",
    "https://vignette.wikia.nocookie.net/leagueoflegends/images/d/df/Veigar.laugh2.ogg/revision/latest?cb=20140205175658"
  ],
  2: [
    "Give up now!",
    "Veigar",
    "https://vignette.wikia.nocookie.net/leagueoflegends/images/d/d3/Veigar_OriginalCircle.png/revision/latest?cb=20171112184736",
    "https://vignette.wikia.nocookie.net/leagueoflegends/images/7/71/Veigar.attack3.ogg/revision/latest?cb=20121127014703",
    "https://vignette.wikia.nocookie.net/leagueoflegends/images/7/73/Veigar.laugh3.ogg/revision/latest?cb=20140205175659"
  ],
  3: [
    "There's a chill in the air.",
    "Lucian",
    "https://vignette.wikia.nocookie.net/leagueoflegends/images/c/c9/Lucian_OriginalCircle.png/revision/latest?cb=20171112101525",
    "https://vignette.wikia.nocookie.net/leagueoflegends/images/c/cd/Lucian.move04.ogg/revision/latest?cb=20130713213845",
    "https://vignette.wikia.nocookie.net/leagueoflegends/images/8/8b/Lucian.laugh02.ogg/revision/latest?cb=20130713214100"
  ],
  4: [
    "Poor lost souls.",
    "Thresh",
    "https://gamepedia.cursecdn.com/lolesports_gamepedia_en/7/7b/ThreshSquare.png",
    "https://vignette.wikia.nocookie.net/leagueoflegends/images/c/cb/Thresh.move5.ogg/revision/latest?cb=20130108052734",
    "https://vignette.wikia.nocookie.net/leagueoflegends/images/c/c3/Thresh.laugh02.ogg/revision/latest?cb=20130527175920"
  ],
  5: [
    "Back, you dirty ape, back!",
    "Heimerdinger",
    "https://www.mobafire.com/images/avatars/heimerdinger-classic.png",
    "https://vignette.wikia.nocookie.net/leagueoflegends/images/d/d9/Heimerdinger.attack05.ogg/revision/latest?cb=20140228032442",
    "https://vignette.wikia.nocookie.net/leagueoflegends/images/b/bd/Heimerdinger.laugh03.ogg/revision/latest?cb=20140228032705"
  ],
  6: [
    "Imagine if I had a real weapon!",
    "Jax",
    "https://vignette.wikia.nocookie.net/leagueoflegends/images/8/8a/Jax_OriginalCircle.png/revision/latest?cb=20171112100622",
    "https://vignette.wikia.nocookie.net/leagueoflegends/images/d/d2/Jax.joke.ogg/revision/latest?cb=20121127045836",
    "https://vignette.wikia.nocookie.net/leagueoflegends/images/2/28/Jax.laugh2.ogg/revision/latest?cb=20140101195119"
  ],
  7: [
    "I've heard a lot about this hero with a hammer, can't wait to meet him.",
    "Poppy",
    "https://pbs.twimg.com/media/DZj7m63VQAAcxZq.jpg",
    "https://vignette.wikia.nocookie.net/leagueoflegends/images/3/39/Poppy.start02.ogg/revision/latest?cb=20151125180806",
    "https://vignette.wikia.nocookie.net/leagueoflegends/images/c/cf/Poppy.laugh02.ogg/revision/latest?cb=20151125180555"
  ],
  8: [
    "Ok.",
    "Rammus",
    "https://gamepedia.cursecdn.com/lolesports_gamepedia_en/7/7c/RammusSquare.png",
    "https://vignette.wikia.nocookie.net/leagueoflegends/images/1/1b/Rammus.attack3.ogg/revision/latest?cb=20121127014817",
    "https://vignette.wikia.nocookie.net/leagueoflegends/images/1/1b/Rammus.attack3.ogg/revision/latest?cb=20121127014817"
  ],
  9: [
    "Tonight, we hunt!",
    "Rengar",
    "https://vignette.wikia.nocookie.net/leagueoflegends/images/6/6b/Rengar_OriginalCircle.png/revision/latest?cb=20171112102714",
    "https://vignette.wikia.nocookie.net/leagueoflegends/images/9/98/Rengar_Select.ogg/revision/latest?cb=20121119073023",
    "https://vignette.wikia.nocookie.net/leagueoflegends/images/1/13/Rengar.laugh2.ogg/revision/latest?cb=20130829075943"
  ],
  10: [
    "Time flies like an arrow; fruit flies like banana.",
    "Zilean",
    "https://www.mobafire.com/images/avatars/zilean-classic.png",
    "https://vignette.wikia.nocookie.net/leagueoflegends/images/e/ef/Chronokeeper.joke.ogg/revision/latest?cb=20120616031936",
    "https://vignette.wikia.nocookie.net/leagueoflegends/images/8/89/Chronokeeper.laugh2.ogg/revision/latest?cb=20130729072653"
  ]
};

onStart();

function onStart() {
  onclick();
  quote();
  audio();
  author();
  icon();
}

function onclick() {
  $("#new-quote").on("click", function() {
    newNumber = getRandomInt(10);
  });
}

function quote() {
  $("#text").text(quotesObj[newNumber][0]);
}

function author() {
  $("#author").text(quotesObj[newNumber][1]);
}

function icon() {
  $("#champ-Icon").attr("src", quotesObj[newNumber][2]);
}

function audio() {
  var audio = new Audio(quotesObj[newNumber][3]);
  var laugh = new Audio(quotesObj[newNumber][4]);
  $("#audio-btn").click(e => audio.play());
  $(audio).on("ended", e => laugh.play());
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
