document.addEventListener('DOMContentLoaded', () => {
    const imageWrapper = document.querySelector('.images');
    const controls = document.querySelectorAll('.button_span');
    const comments = document.querySelectorAll('.comment p');
    let imageIndex = 0;

    function showSlide(index) {
        imageWrapper.style.transform = `translateX(-${index * 100}%)`;

        comments.forEach(comment => comment.classList.remove('active'));
        comments[index].classList.add('active');

        imageIndex = index;
    }

    controls.forEach((control, index) => {
        control.addEventListener('click', () => {
            showSlide(index);
        });
    });

    showSlide(imageIndex);
});