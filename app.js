"use strict";
let clcikBtn = document.querySelector(".dice");
let changeH2 = document.querySelector("h2");
let Spantag = document.querySelector("span");
let Allquotes = [
  "'' Design is not just what it looks like and feels like. it's how it works. ''",
  "'' Technology is best when it brings people together. ''",
  "'' The art challenges the technology, and the technology inspires the art. ''",
  "'' Everything is designed. But few things are designed well. '",
  "'' Humanity is acquiring all the right technology for all the wrong reasons. '",
  "'' The web as I envisaged it, we have not seen it yet. The future is still so much bigger than the past. ''",
  "'' Maybe we need less real stupidity and more artificial intelligence. ''",
  "'' All this modern technology just makes people try to do everything at once. ''",
  "'' Anyone who keeps learning stays young. ''",
  "'' Innovation distinguishes between a leader and a follower. ''",
];

console.log(Spantag);

function Changequote(params) {
  Spantag.innerText = Math.round(Math.random() * 117);
  let NewQuotes = Math.floor(Math.random()*Allquotes.length);
  let AllQuotes = Allquotes[NewQuotes];
  changeH2.innerText = AllQuotes;
}

clcikBtn.addEventListener("click", Changequote);
