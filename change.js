document.getElementById("services").addEventListener("mouseover", function() {
    document.getElementById("services").style.backgroundColor = "grey";
});
    
document.getElementById("services").addEventListener("mouseout", function() {
    document.getElementById("services").style.backgroundColor = "white";
});
document.getElementById("myID").addEventListener("mouseover", function() {
    document.getElementById("myID").style.backgroundColor = "black";
});
    
document.getElementById("myID").addEventListener("mouseout", function() {
    document.getElementById("myID").style.backgroundColor = "white";
});
var $Osc = {
    hover: function(event) {
      event.target.style.backgroundColor = "blue";
    },
    out: function(event) {
      event.target.style.backgroundColor = "white";
    }
  
  }
  var $OscElement = document.getElementById("col-lg-4 col-md-6 box wow bounceInUp");
  $OscElement.addEventListener("mouseover", $Osc.hover, false);
  $OscElement.addEventListener("mouseout", $Osc.out, false);