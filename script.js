
function changeIcon() {
  var img = document.getElementById('toggle').src;
  var x = document.getElementById("nav-menu");
  
  if (img.indexOf('icon-hamburger.svg')!=-1) {
    if (x.style.display === "none") {
      x.style.display = "block";
      
    document.getElementById('toggle').src = 'icon-close.svg';
    } else {
    x.style.display = "none";
    
    document.getElementById('toggle').src = 'icon-close.svg';
    } 
    
  } else {
    document.getElementById('toggle').src = 'icon-hamburger.svg';
  }
}

