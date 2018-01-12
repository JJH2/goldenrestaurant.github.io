$(function() {
  $(".main-box__typed").typed({
    strings: ["Travelling Google Map?", "Snow Game?", "Listening Winter Music?"],
    stringsElement: null,
    typeSpeed: 30,
    startDelay: 1200,
    backSpeed: 20,
    backDelay: 500,
    loop: true,
    loopCount: 5,
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