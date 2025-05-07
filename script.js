$(document).ready(function() {
    $("#toggle").click(function() {
        $("#togglep").toggle("slow", function() {
            if ($("#togglep").is(":visible")) {
                $("#toggle").text("Hide Content");
            } else {
                $("#toggle").text("Show Content");
            }
        });
    });

    $("#showhide").click(function() {
        if ($("#showhidep").is(":visible")) {
            $("#showhidep").hide("slow");
            $("#showhide").text("Show Content");
        } else {
            $("#showhidep").show("slow"); {
                $("#showhide").text("Hide Content")
            };
        }
    });

    $("#controllerfade").click(function() {
        if ($("#fadep1, #fadep2, #fadep3, #fadep4").is(":hidden")) {
            $("#fadep1, #fadep2, #fadep3, #fadep4").fadeIn("slow");
            $("#controllerfade").text("Click me to hide the paragraph menggunakan fadeOut()")
        } else {
            $("#fadep1, #fadep2, #fadep3, #fadep4").fadeOut("fast");
            $("#controllerfade").text("Click me to show the paragraph menggunakan fadeIn()")
        }
    })

    $("#controllerfade2").click(function() {
        if ($("#fadep5, #fadep6, #fadep7, #fadep8").is(":hidden")) {
            $("#fadep5, #fadep6, #fadep7, #fadep8").fadeToggle("slow");
            $("#controllerfade2").text("Click me to hide the paragraph menggunakan fadeToggle()")
        } else {
            $("#fadep5, #fadep6, #fadep7, #fadep8").fadeToggle("fast");
            $("#controllerfade2").text("Click me to show the paragraph menggunakan fadeToggle()")
        }
    })

    $("#controllerfade3").click(function() {
        if ($("#fadep9").css("opacity") == 0) {
            $("#fadep9, #fadep10, #fadep11, #fadep12").fadeTo("fast", 1);
            $("#controllerfade3").text("Click me to hide the paragraph menggunakan fadeTo()");
        } else {
            $("#fadep9, #fadep10, #fadep11, #fadep12").fadeTo("fast", 0);
            $("#fadep9, #fadep10, #fadep11, #fadep12").css("display", "none");
            $("#controllerfade3").text("Click me to show the paragraph menggunakan fadeTo()");
        }
    });

    $("#controllerslide").click(function() {
        if ($("#slidep1, #slidep2, #slidep3, #slidep4").is(":hidden")) {
            $("#slidep1, #slidep2, #slidep3, #slidep4").slideDown("fast");
            $("#controllerslide").text("Click me to hide the paragraph menggunakan slideUp()")
        } else {
            $("#slidep1, #slidep2, #slidep3, #slidep4").slideUp("fast");
            $("#controllerslide").text("Click me to hide the paragraph menggunakan slideDown()")
        }
    })

    $("#controllerslide2").click(function() {
        if ($("#slidep5, #slidep6, #slidep7, #slidep8").is(":hidden")) {
            $("#slidep5, #slidep6, #slidep7, #slidep8").slideToggle("fast");
            $("#controllerslide2").text("Click me to hide the paragraph menggunakan slideToggle()")
        } else {
            $("#slidep5, #slidep6, #slidep7, #slidep8").slideToggle("fast");
            $("#controllerslide2").text("Click me to hide the paragraph menggunakan slideToggle()")
        }
    })

    $("#controlleranimate").click(function() {
        if ($("#animatep1").is(":hidden")) {
            $("#animatep1, #animatep2, #animatep3, #animatep4")
                .css({ display: "block", left: "0px", opacity: 0, fontSize: "14px" })
                .animate({ 
                    left: '100px',
                    opacity: 1,
                    fontSize: '24px'
                }, 1000);
            $("#controlleranimate").text("Click me to hide the paragraphs menggunakan animate()");
        } else {
            $("#animatep1, #animatep2, #animatep3, #animatep4").animate({ 
                left: '0px',
                opacity: 0,
                fontSize: '14px'
            }, 1000, function() {
                $("#animatep1, #animatep2, #animatep3, #animatep4").css("display", "none");
            });
            $("#controlleranimate").text("Click me to show the paragraphs menggunakan animate()");
        }
    });

    $("#startcontroller").click(function() {
        $("#boxanimate").animate({
            left: "400px"
        }, 5000);
    });

    $("#stopcontroller").click(function() {
        $("#boxanimate").stop().animate({
            left: "0px"
        }, 1000);
    });

    var isToggled = false; 

    $("#chaincontroller").click(function() {
        if (!isToggled) {
            $("#chainbox")
                .animate({
                    left: "300px",
                    opacity: 0.5
                }, 2000) 
                .css("background-color", "blue")
                .slideUp(1000) 
                .slideDown(1000); 
            
            isToggled = true; 
            $("#chaincontroller").text("Go Back");
        } else {
            $("#chainbox")
                .animate({
                    left: "0px", 
                    opacity: 1 
                }, 2000) 
                .css("background-color", "coral") 
                .slideUp(1000)
                .slideDown(1000); 

            isToggled = false; 
            $("#chaincontroller").text("Start Chaining"); 
        }
    });
});
