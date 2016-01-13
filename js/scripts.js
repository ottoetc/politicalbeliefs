$(document).ready(function() {
  $("form#beliefs").submit(function(event) {
    var socialServices = $("select#social-services").val();
    var gunControl = $("select#gun-control").val();
    var result = ("");
    if (socialServices === "Anti services" && gunControl === "Anti gun control") {
      result = "right";
    }
    else if (socialServices === "Pro services" && gunControl === "Pro gun control") {
      result = "left";
    }
    else {
      result = "middle";
    }
    $("#position").text(result);
    $("#result").show();

    event.preventDefault();
  });
});
