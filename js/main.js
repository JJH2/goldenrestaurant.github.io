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

// document.getElementById('myBtn').addEventListener('click', e => {
//   const a = document.querySelectorAll('.fade');
//   a[b].classList.remove('fade');
//   console.log(a[b]);
//   random2();
//   a[c].classList.add('show');
// })
function erase(){
  document.querySelectorAll('.show').classList.remove('show');
}
document.getElementById('myBtn').addEventListener('click',e=>{
  let arr=['.googleMap','.youtube','.snow-game'];
  console.log(arr[Math.floor(Math.random() * 3)])
  document.querySelector(arr[Math.floor(Math.random()*3)]).classList.add('show');
})
