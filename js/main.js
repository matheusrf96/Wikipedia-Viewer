$(document).ready(function(){
  $('#searchButton').click(function(){
    var searchTerm = $('.searchBar').val();

    var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + searchTerm + "&format=json&callback=?";

    $.ajax({
      type: "GET",
      url: url,
      async: false,
      dataType: "json",
      success: function(data){
        for(var i = 9; i >= 0; i--) $(".added").remove();

        for(i = 9; i >= 0; i--){
          if(data[1][i] !== undefined || data[2][i] !== undefined){
            $("#output").prepend(
              "<li class='added'>" +
              "<a class='linkResult' href='" + data[3][i] + "' target='blank'>" +
                "<div class='result'>" +
                  "<h3>" + data[1][i] +"</h3>" +
                  "<p>" + data[2][i] + "</p>" +
                "</div>" +
              "</a>" +
            "</li>"
            );
          }
        }
      },
      error: function(errorMessage){
        alert("Error! Please reload the page. =)");
      }
    });
  });
});
