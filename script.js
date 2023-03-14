

/*function changeIcon(img) {
  img.src = 'images/icon-close.svg';
}*/

//function changeIcon(x) {
 // x.classList.toggle("images/icon-close.svg");
//}



/*function changeIcon() {
  var img = document.getElementById('toggle').src;
  if (img.indexOf('icon-hamburger.svg')!=-1) {
    document.getElementById('toggle').src = 'images/icon-close.svg';
  } else {
    document.getElementById('toggle').src = 'images/icon-hamburger.svg';
  }
}*/

function changeIcon() {
  var img = document.getElementById('toggle').src;
  var x = document.getElementById("nav-menu");
  
  if (img.indexOf('icon-hamburger.svg')!=-1) {
    if (x.style.display === "none") {
      x.style.display = "block";
      
    document.getElementById('toggle').src = 'images/icon-close.svg';
    } else {
    x.style.display = "none";
    
    document.getElementById('toggle').src = 'images/icon-close.svg';
    } 
    
  } else {
    document.getElementById('toggle').src = 'images/icon-hamburger.svg';
  }
  
  /*var x = document.getElementById("nav-menu");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }*/
  
}

