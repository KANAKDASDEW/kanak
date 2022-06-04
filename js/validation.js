$(function () {
	$("#Form").validate({
		// Specify the validation rules
		rules: {
			name: "required",
            phone: {
				required: true,
				minlength: 11,
				maxlength: 18
			},
            user: "required",
			email: {
				required: true,
				email: true
			},
            

			
		},
		// Specify the validation error messages
		messages: {
			name: "Please enter your name",
            phone: {
				required: "Please enter phone number",
				minlength: "Your Phone Number Invalid",
				maxlength: "Your Phone Number Invalid"
			},
            user: "Please enter username",
			email:{
				required: "Please enter a valid email address"
			},
           

		},
		submitHandler: function (form) {
			form.submit();
		}
	});
});

// ********** fixed navbar ************

const navbar = document.getElementById("nav");
const topLink = document.querySelector(".top-link");

window.addEventListener("scroll", function () {
  const scrollHeight = window.pageYOffset;
  const navHeight = navbar.getBoundingClientRect().height;
  if (scrollHeight > navHeight) {
    navbar.classList.add("fixed-nav");
  } else {
    navbar.classList.remove("fixed-nav");
  }
  // setup back to top link

  if (scrollHeight > 800) {
    console.log("helo");

    topLink.classList.add("show-link");
  } else {
    topLink.classList.remove("show-link");
  }
});


