'use strict';
(function () {
    var modalBox = document.querySelector('.modal-box');

    var btn = document.querySelector('#btn-for-story');

    var closeBtn = document.querySelector('#close-btn');

    var onButtonClick = () => {
        modalBox.classList.add('show');
        // window.onscroll = function () { window.scrollTo(0, 1700); }; // не забыть переделать запред скрола
    }

    var onCloseBtnClick = () => {
        modalBox.classList.remove('show');
    }

    btn.addEventListener('click', onButtonClick);
    closeBtn.addEventListener('click', onCloseBtnClick);

    window.addEventListener('click', (evt) => {
        if(evt.target == modalBox) {
            modalBox.classList.remove('show');
        }
    })
})();