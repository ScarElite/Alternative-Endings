var slider = tns({
  container: ".movieslider",
  items: 8,
  slideBy: "page",
  autoplay: false,
  pages: false,
});

var slider = tns({
  container: ".intheaters",
  items: 8,
  slideBy: "page",
  autoplay: false,
  pages: false,
});

const quotes = [
  "Human beings love stories because they safely show us beginnings, middles and ends. ~A. S. Byatt",
  "Our story has three parts: a beginning, a middle, and an end. And although this is the way all stories unfold, I still can’t believe that ours didn’t go on forever. ~Nicholas Sparks",
  "Every new beginning comes from some other beginning’s end. ~Seneca",
  "There is no real ending. It’s just the place where you stop the story. ~Frank Herbert",
  "I always had this idea that you should never give up a happy middle in the hopes of a happy ending, because there is no such thing as a happy ending. Do you know what I mean? There is so much to lose. ~John Green",
  "The opposite of the happy ending is not actually the sad ending–the sad ending is sometimes the happy ending. The opposite of the happy ending is actually the unsatisfying ending. ~Orson Scott Card",
  "Life is not so much about beginnings and endings as it is about going on and on and on. It is about muddling through the middle. ~Anna Quindlen",
  "The last thing one settles in writing a book is what one should put in first. ~Pascal",
];

function randomQuoteHandler() {
  const quoteEl = document.querySelector(".quote");
  quoteEl.textContent = quotes[Math.floor(Math.random() * quotes.length)];
}

randomQuoteHandler();

document.addEventListener('DOMContentLoaded', () => {
  // Functions to open and close a modal
  function openModal($el) {
    $el.classList.add('is-active');
  }

  function closeModal($el) {
    $el.classList.remove('is-active');
  }

  function closeAllModals() {
    (document.querySelectorAll('.modal') || []).forEach(($modal) => {
      closeModal($modal);
    });
  }

  // Add a click event on buttons to open a specific modal
  (document.querySelectorAll('.js-modal-trigger') || []).forEach(($trigger) => {
    const modal = $trigger.dataset.target;
    const $target = document.getElementById(modal);

    $trigger.addEventListener('click', () => {
      openModal($target);
    });
  });

  // Add a click event on various child elements to close the parent modal
  (document.querySelectorAll('.modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button') || []).forEach(($close) => {
    const $target = $close.closest('.modal');

    $close.addEventListener('click', () => {
      closeModal($target);
    });
  });

  // Add a keyboard event to close all modals
  document.addEventListener('keydown', (event) => {
    const e = event || window.event;

    if (e.keyCode === 27) { // Escape key
      closeAllModals();
    }
  });
});