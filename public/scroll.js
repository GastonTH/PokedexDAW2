window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("root").style.height = "30px";
    console.log("abajo");
    
  } else {
    document.getElementById("root").style.height = "90px";
    console.log("arriba");
    
  }
} 