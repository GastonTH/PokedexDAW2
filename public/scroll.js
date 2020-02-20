window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementsByClassName("App-texto")[0].style.width = "30px";
    console.log("abajo");
    
  } else {
    document.getElementsByClassName("App-texto")[0].style.width = "90px";
    console.log("arriba");
    
  }
} 