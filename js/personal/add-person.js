'use strict';
(function () {
    var personBox = document.querySelector('.graduate');

    var personal = [];

    var showPerson = () => {   
        var fragment = document.createDocumentFragment();
        for (var i = 0; i < 5; i++) {
          personal.push(window.createPerson());
          fragment.appendChild(window.renderPerson(personal[i]));
        }
        for (i = 1; i < 5; i++) {
            fragment.childNodes[i].classList.add('hide');
            // fragment.childNodes[i].style.display = 'hide';
        }
        personBox.appendChild(fragment);
      };

    showPerson();
})();