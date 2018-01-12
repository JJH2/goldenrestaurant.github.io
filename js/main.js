$(function() {
  $(".main-box__typed").typed({
    strings: ["Travelling Google Map?", "Snow Game?", "Listening Winter Music?"],
    stringsElement: null,
    typeSpeed: 30,
    startDelay: 1200,
    backSpeed: 20,
    backDelay: 500,
    loop: true,
    loopCount: Infinity,
    showCursor: false,
    cursorChar: "|",
    attr: null,
    contentType: 'html',
    callback: function() {},
    preStringTyped: function() {},
    onStringTyped: function() {},
    resetCallback: function() {}
  });
});

// let b, c;
// function random() {
//   b = Math.floor(Math.random() * 3)
// }

// random();

// function random2() {
//   c = Math.floor(Math.random() * 3)
// }

function erase() {
  document.querySelectorAll('.main-contents').forEach(el => {
    el.classList.remove('show')
  })
}
document.getElementById('myBtn').addEventListener('click', e => {
  erase();
  let arr = ['.googleMap', '.youtube', '.snow-game'];
  document.querySelector(arr[Math.floor(Math.random() * 3)]).classList.add('show');
})