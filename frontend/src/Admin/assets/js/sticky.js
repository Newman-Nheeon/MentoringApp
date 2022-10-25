import $ from 'jquery';

$(document).ready(function(){


    $(".stickyside").stick_in_parent({
        offset_top: 60
    });
   
   
  $('.stickyside a').click(function() {
    $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top - 60
    }, 500);
    return false;
});
// This is auto select left sidebar
// Cache selectors
// Cache selectors
var lastId,
    topMenu = $(".stickyside"),
    topMenuHeight = topMenu.outerHeight(),
    // All list items
    menuItems = topMenu.find("a"),
    // Anchors corresponding to menu items
    scrollItems = menuItems.map(function() {
        var item = $($(this).attr("href"));
        if (item.length) {
            return item;
        }
    });

// Bind click handler to menu items

  // Bind to scroll
  $(window).scroll(function() {
    // Get container scroll position
    var fromTop = $(this).scrollTop() + topMenuHeight - 250;

    // Get id of current scroll item
    var cur = scrollItems.map(function() {
        if ($(this).offset().top < fromTop)
            return this;
    });
    // Get the id of the current element
    cur = cur[cur.length - 1];
    var id = cur && cur.length ? cur[0].id : "";

    if (lastId !== id) {
        lastId = id;
        // Set/remove active class
        menuItems
            .removeClass("active")
            .filter("[href='#" + id + "']").addClass("active");
    }
});  
   });
