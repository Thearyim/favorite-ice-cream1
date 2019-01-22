$(document).ready(function() {
  $("#formOne").submit(function(event) {
    // var flavors = ["f1", "f2", "f3", "f4", "f5", "f6"];
    var results=[];
      for (var i=1;i<=6;i++){

      results[i-1]= $("input#f"+i).val();
      $("ul#favoriteList").append("<li>"+results[i-1]+"</li>");
    }
    




  event.preventDefault();

    });
  });
