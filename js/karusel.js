'use strict';
(function () {

    var personal = document.querySelectorAll('.person');

    var leftBtn = document.querySelector('.left-arrow');
    var rightBtn = document.querySelector('.right-arrow');

    var index = 0;

    var onClickLeftArrow = () => {
        if (index <= 0) {
            personal[index].classList.add('hide');
            index = 4;
            personal[index].classList.remove('hide');
            return;
        }
        personal[index].classList.add('hide');
        personal[index - 1].classList.remove('hide');
        index--;
    }


    var onClickRightArrow = () => {
        if (index >= 4) {
            personal[index].classList.add('hide');
            index = 0;
            personal[index].classList.remove('hide');
            return;
        }
        personal[index].classList.add('hide');
        personal[index + 1].classList.remove('hide');
        index++;
    }

    leftBtn.addEventListener('click', onClickLeftArrow);
    rightBtn.addEventListener('click', onClickRightArrow);
})();