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
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
    };

    const serviceID = "service_w3d8921";
    const templateID = "template_qtgei99";

    emailjs.send(serviceID, templateID, params)
        .then(res => {
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            console.log(res);
        })
        .catch(err => console.log(err));

}
