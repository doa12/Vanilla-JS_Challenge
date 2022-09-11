const quotes = [
  {
    quote: "If you would be loved, love and be lovable.",
    author: "Benjamin Franklin"
  },
  {
    quote:
      "There is always some madness in love. But there is also always some reason in madness.",
    author: "Friedrich Nietzsche"
  },
  {
    quote: "The supreme happiness in life is the conviction that we are loved.",
    author: "Victor Hugo"
  },
  {
    quote:
      "Love doesn’t make the world go round. Love is what makes the ride worthwhile.",
    author: "Franklin P. Jones"
  },
  {
    quote: "The course of true love never did run smooth.",
    author: "William Shakespeare"
  },
  {
    quote:
      "The best and most beautiful things in the world cannot be seen or even touched. They must be felt with the heart.",
    author: "Helen Keller"
  },
  {
    quote: "The way to love anything is to realize that it might be lost.",
    author: "G.K. Chesterton"
  },
  {
    quote: "I think the perfection of love is that it's not perfect.",
    author: "Taylor Swift"
  },
  {
    quote: "The best thing to hold onto in life is each other.",
    author: "Audrey Hepburn"
  },
  {
    quote:
      "You have bewitched me body and soul, and I love, I love, I love you.",
    author: "Mr. Darcy in Pride and Prejudice"
  }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = `-${todaysQuote.author}-`;
