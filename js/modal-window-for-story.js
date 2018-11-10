'use strict';
(function () {
    var modalBox = document.querySelector('.modal-box');

    var btn = document.querySelector('#btn-for-story');

    var closeBtn = document.querySelector('#close-btn');

    var onButtonClick = () => {
        window.onwheel = (e) => {
            e.preventDefault();
            return false;
        }
        modalBox.classList.add('show');
    }

    var onCloseBtnClick = () => {
        window.onwheel = null;
        modalBox.classList.remove('show');
    }

    btn.addEventListener('click', onButtonClick);
    closeBtn.addEventListener('click', onCloseBtnClick);

    window.ClickNotOnModalWindow = (box) => {
        window.addEventListener('click', (evt) => {
            if(evt.target == box) {
                window.onwheel = null;
                box.classList.remove('show');
            }
        });
    }

    window.ClickNotOnModalWindow(modalBox);
    
})();