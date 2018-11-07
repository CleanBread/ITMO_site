'use strict';
(function () {
    var moveTop = document.querySelector('.move-to-top');

    window.onscroll = () => {
        if (window.pageYOffset > 200) {
            moveTop.classList.add('show');
        } else {
            moveTop.classList.remove('show');
        }
    }

    var onMoveTopClick = () => {
        window.scrollTo(0, 0);
    }

    moveTop.addEventListener('click', onMoveTopClick);
})();