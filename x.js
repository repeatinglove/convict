$(document).ready(function(){
  // smooth subtle 3D tilt
  $('.blurred-background-div').tilt({
    maxTilt: 5,
    scale: 1,
    speed: 700,
    perspective: 400,
    easing: "cubic-bezier(.05,.9,.1,.9)",
    reset: true,
    glare: false,
    gyroscope: false
  });

  // typed description
  new Typed('#typed-description', {
    strings: [
      "I love my sweet baby lex",
      "left all you niggas behind",
      "no one will know im gone"
    ],
    typeSpeed: 100,
    backSpeed: 50,
    loop: true,
    startDelay: 500,
    backDelay: 2000,
    showCursor: false
  });

  // overlay click to enter
  $('#enter-overlay').click(function(){
    $(this).addClass('fade-out');
    setTimeout(() => $(this).remove(), 600);
    document.getElementById('background-audio')?.play();
  });

  // music
  const audio = new Audio('x.mp3');
  audio.loop = true;
  audio.volume = 0.5;
  audio.play().catch(() => console.log("Autoplay blocked. Music will play on click."));
  $('#enter-overlay').click(function(){ audio.play(); });

  // social buttons hover
  $('.social-links a').css('transition', 'transform 0.25s ease, text-shadow 0.25s ease');
  $('.social-links a').hover(
    function(){ $(this).css('transform','scale(1.1)'); },
    function(){ $(this).css('transform','scale(1)'); }
  );
});