// https://css-tricks.com/automatic-table-of-contents/
var table =
  "<nav role='navigation' class='table-of-contents'>" + "<h2>Table of Contents:</h2>" + "<ul>";

var entry, card, title, link;

$(".card-title").each(function() {
  card = $(this);
  title = card.text();
  link = "#" + card.attr("id");
  entry = "<li>" + "<a href='" + link + "'>" + title + "</a>" + "</li>";
  table += entry;

});

table += "</ul>" + "</nav>";

$(".right").prepend(table);