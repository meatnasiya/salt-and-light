console.log("Salt & Light website is ready!");

// Contact button
const contactButton = document.querySelector(".contact .button");

contactButton.addEventListener("click", function(event) {
    event.preventDefault();

    alert("Call Salt & Light: 0913697272");
});