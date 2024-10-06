
$(document).ready(function () { 
$(window).load(function() {
      $("body").css('overflow','visible');
      $("body").addClass('loaded');
 });
}); 

$(document).ready(function () {    
$('#zipcode').keypress(function (e) {    
    var charCode = (e.which) ? e.which : event.keyCode    
    if (String.fromCharCode(charCode).match(/[^0-9]/g))    
        return false;                        
});    
});

$('.eu #myMenu li a').click(function(e){
  var menuanchor = $(this).attr('data-menuanchor');
  setTimeout(function(){
    $('#myMenu li').each(function(){  
      if($(this).attr('data-menuanchor') == menuanchor){          
        var li_class = $(this).attr('class');         
        $('li.'+li_class).addClass('active');         
      }
    });
  }, 150);    
});

$(document).ready(function(){
  if (window.matchMedia("(max-width: 767px)").matches)  
      { 
    var $root = $('html, body');
    $('a.scroll-nav').click(function(){
      var href = $.attr(this, 'href').replace("_","");
      console.log("href== "+href);        

      $root.animate({
        scrollTop: $(href).offset().top - 50
      }, 500, function () {
        window.location.hash = href;
      });

      return false;
    });
  }
});


// Map
 const getNodeindex = elm => [...elm.parentNode.children].indexOf(elm)
      var paths = document.querySelectorAll("#map #place1,#map #place2,#map #place3,#map #place4,#map #place5,#map #place6,#map #place7,#map #place8,#map #place9,#map #place10,#map #place11,#map #place12,#map #place13");
      var boxes = document.querySelectorAll(".map_box_inner");
      var eq = 0;

      paths.forEach(function (el) {
        el.addEventListener("mouseenter", () => {
          const stateId = el.getAttribute("id");
          if (stateId) {
            paths.forEach(el => el.classList.remove("active"));
            boxes.forEach(el => el.classList.remove("active"));
            el.classList.add("active");
            document.querySelector(".map_box_inner[data-group=" + stateId + "]").classList.add("active")
          }
        });
        el.addEventListener("mouseleave", () => {
          paths.forEach(el => el.classList.remove("active"));
          boxes.forEach(el => el.classList.remove("active"));
          document.querySelectorAll(".map_box_inner")[eq].classList.add("active")
        })
      })

      paths.forEach(function (el) {
        el.addEventListener("click", () => {
          paths.forEach(el => el.classList.remove("clicked"));
          boxes.forEach(el => el.classList.remove("active"));
          el.classList.add("clicked");
          const stateId = el.getAttribute("id");
          const rel_box = document.querySelector(".map_box_inner[data-group=" + stateId + "]")
          eq = getNodeindex(rel_box);
          rel_box.classList.add("active")
        });
      });
// Map

// contain and invoke browser API
(function () {

var matched, browser;

// More details: https://api.jquery.com/jQuery.browser
// jQuery.uaMatch maintained for back-compat
jQuery.uaMatch = function (ua) {
ua = ua.toLowerCase();

var match = /(chrome)[ \/]([\w.]+)/.exec(ua) ||
  /(webkit)[ \/]([\w.]+)/.exec(ua) ||
  /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(ua) ||
  /(msie) ([\w.]+)/.exec(ua) ||
  ua.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(ua) ||
  [];

return {
  browser: match[1] || "",
  version: match[2] || "0"
};
};

matched = jQuery.uaMatch(navigator.userAgent);
browser = {};

if (matched.browser) {
browser[matched.browser] = true;
browser.version = matched.version;
}

// Chrome is Webkit, but Webkit is also Safari.
if (browser.chrome) {
browser.webkit = true;
} else if (browser.webkit) {
browser.safari = true;
}

jQuery.browser = browser;

jQuery.sub = function () {
function jQuerySub(selector, context) {
  return new jQuerySub.fn.init(selector, context);
}
jQuery.extend(true, jQuerySub, this);
jQuerySub.superclass = this;
jQuerySub.fn = jQuerySub.prototype = this();
jQuerySub.fn.constructor = jQuerySub;
jQuerySub.sub = this.sub;
jQuerySub.fn.init = function init(selector, context) {
  if (context && context instanceof jQuery && !(context instanceof jQuerySub)) {
    context = jQuerySub(context);
  }

  return jQuery.fn.init.call(this, selector, context, rootjQuerySub);
};
jQuerySub.fn.init.prototype = jQuerySub.fn;
var rootjQuerySub = jQuerySub(document);
return jQuerySub;
};

})();
$(document).ready(function () {
// Get browser and add to body
$.each($.browser, function (i) {
$('body').addClass(i);
return false;
});
// Get OS and add to body
var os = [
'iphone',
'ipad',
'windows',
'mac',
'linux'
];
var match = navigator.appVersion.toLowerCase().match(new RegExp(os.join('|')));
if (match) {
$('body').addClass(match[0]);
};
//https://codepen.io/freshmasterj/pen/NNzmdj

});



//******** Add your form id here********

var loginform = "#loginform";
$(loginform).validate({

	ignore: [],
	rules: {
		fname: {
			required: true,
		},
		lname: {
			required: true,
		},
		email1:{
            required: true,
			 email: true
		},
		zipcode: {
			required: true,
		},
	},
	onfocusout: function (element) {
		$(element).valid();
	},
	errorClass: 'error',
	validClass: 'valid',
	errorElement: 'span',
	highlight: function (element, errorClass, validClass) {
		$(element).addClass(errorClass).removeClass(validClass);
	},
	unhighlight: function (element, errorClass, validClass) {
		$(element).removeClass(errorClass).addClass(validClass);
	},
	/*comment this code if you dont want messages*/
	messages: {
		fname: {
			required: "This field is required.",
		},
		lname: {
			required: "This field is required.",
		},
		email1:{required: "This field is required.", email1: "Please enter a valid email address", }, 
		phone: {
			required: "This field is required.",
		},
		zipcode: {
			required: "This field is required.",
		},

	},
	//***********comment this code if you dont want messages*/


	errorPlacement: function (error, element) {
		if ($(element).is("input")) {
			error.insertAfter($(element).closest(".form-msg"));
		} else if ($(element).is("select")) {
			error.insertAfter($(element).closest(".form-msg"));
		} else {
			error.insertAfter(element)
		}
	},
	submitHandler: function (loginform) {
		var request = $.ajax({
			url: "sendmail.php",
			type: "POST",
			data: {
				fname: $("#fname").val().toString(),
				lname: $("#lname").val().toString(),
				email1: $("#email1").val().toString(),
				zipcode: $("#zipcode").val().toString(),
			},
			dataType: "html"
		});
		request.done(function (msg) {
			if (msg == 1) {
				$('.successmsg').fadeIn();
				window.location.href = 'https://secure.anedot.com/tammy-stokes-for-superior-court-judge/action-page_volunteer-1'; 
				setTimeout(function () {
					$('#loginform .successmsg').fadeOut();
					$('#loginform #result').fadeOut();
					$('#loginform')[0].reset();
					$(".valid").each(function () {
							$(this).removeClass("valid")
						}),
						$(".form-row:first input").focus()
				}, 3000)
			} else {

			}
		});
		return false;
	}
});
//**********On Submit form will be submit 
$(loginform + " input[type='submit']").click(function () {
	setTimeout(function () {
		$("input.error").first().focus();
	}, 50)
});