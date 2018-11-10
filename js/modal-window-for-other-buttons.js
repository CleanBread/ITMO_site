'use strict';
(function () {
    
    var modalBox = document.querySelector('.modal-for-other-buttons');

    var buttons = document.querySelectorAll('.anactive-btn');

    window.ClickNotOnModalWindow();

    buttons.forEach((item) => {
        item.addEventListener('click', () => {
            modalBox.classList.add('show');
            

        var hideModal = () => {
            modalBox.classList.remove('show');
        }

        setTimeout(hideModal, 2000);
        })
    })


})();