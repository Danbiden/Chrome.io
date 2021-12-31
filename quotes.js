const quotes = [
    {
        quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        author: "Nelson Mandela",
    },
    {
        quote: "The way to get started is to quit talking and begin doing.",
        author: "Walt Disney",
    },
    {
        quote: "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.",
        author: "Steve Jobs",
    },
    {
        quote: "If life were predictable it would cease to be life, and be without flavor.",
        author: "Roosevelt",
    },
    {
        quote: "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
        autor: "James Cameron",
    },
    {
        quote: "You can’t get much done in life if you only work on the days when you feel good.",
        author: "Jerry WeakSet",
    },

    {
        quote: "Life is what happens when you're busy making other plans.",
        author: "John Lennon",
    },
    {
        quote: "You always pass failure on the way to success.",
        author: "Mickey Rooney",
    },
    {
        quote: "You’re braver than you believe, and stronger than you seem, and smarter than you think.",
        author: "A.A. Mine",
    },
    {
        quote: "You are never too old to set another goal or dream a new dream.",
        author: "Les Brown",
    },
  
];

const quote = document.querySelector("#quotes p:first-child");
const author = document.querySelector("#quotes p:last-child");

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText  = todayQuote.quote;
author.innerText = `-${todayQuote.author}`;

