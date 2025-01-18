document.addEventListener("DOMContentLoaded", function() {
    const watchButtons = document.querySelectorAll('.watch-btn');
    watchButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault();
            alert("Em breve, o streaming será disponibilizado!");
        });
    });
});
