$(document).ready(function () {
    $('.image-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        focusOnSelect: true,
        prevArrow: '<div class="slick-arrow slick-prev"><img src="img/arrow-left.png" alt="Назад" style="width: 30px; height: 30px; background-color: transparent;"></div>',
        nextArrow: '<div class="slick-arrow slick-next"><img src="img/arrow-right.png" alt="Вперед" style="width: 30px; height: 30px; background-color: transparent;"></div>',
    });
});
function openModal(event) {
    event.preventDefault(); // Запобігаємо стандартному поведінці посилання
    var modal = document.getElementById("myModal");
    modal.style.display = "block";
}

function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
}

function sendMail() {
    // Get the input values
    var nameInput = document.getElementById("name");
    var emailInput = document.getElementById("email");
    var passwordInput = document.getElementById("password");

    // Get the error message elements
    var nameError = document.getElementById("nameError");
    var emailError = document.getElementById("emailError");
    var passwordError = document.getElementById("passwordError");

    // Reset previous error messages
    nameError.textContent = "";
    emailError.textContent = "";
    passwordError.textContent = "";

    // Validate name field
    if (nameInput.value.trim() === "") {
        nameError.textContent = "Name is required";
        nameInput.focus();
        return;
    }

    // Validate email field
    if (emailInput.value.trim() === "") {
        emailError.textContent = "Email is required";
        emailInput.focus();
        return;
    } else if (!isValidEmail(emailInput.value.trim())) {
        emailError.textContent = "Invalid email format";
        emailInput.focus();
        return;
    }

    // Validate password field
    if (passwordInput.value.trim() === "") {
        passwordError.textContent = "Password is required";
        passwordInput.focus();
        return;
    }

    // Proceed with sending the email
    var params = {
        name: nameInput.value,
        email: emailInput.value,
        password: passwordInput.value
    };

    const serviceID = "service_w3d8921";
    const templateID = "template_qtgei99";

    emailjs.send(serviceID, templateID, params)
        .then(res => {
            // Reset the form
            nameInput.value = "";
            emailInput.value = "";
            passwordInput.value = "";

            console.log(res);
        })
        .catch(err => console.log(err));
}

function isValidEmail(email) {
    // Simple email format validation using regex
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}



// Get the button:
function scrollToTop() {
    var currentPosition = document.documentElement.scrollTop || document.body.scrollTop;

    if (currentPosition > 0) {
        window.requestAnimationFrame(scrollToTop);
        window.scrollTo(0, currentPosition - currentPosition / 10);
    }
}

window.addEventListener("scroll", function () {
    var scrollHeight = document.documentElement.scrollHeight;
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    var windowHeight = document.documentElement.clientHeight;

    if (scrollTop > (scrollHeight / 3)) {
        document.getElementById("scrollUpButton").style.display = "flex";
    } else {
        document.getElementById("scrollUpButton").style.display = "none";
    }
});

document.getElementById("scrollUpButton").addEventListener("click", function () {
    scrollToTop();
});



new WOW().init();