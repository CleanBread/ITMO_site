'use strict';
(function () {
    var similarCardTemplate = document.querySelector('#personal')
      .content
      .querySelector('.person');

    window.renderPerson = (person) => {
      var newPerson = similarCardTemplate.cloneNode(true);

      newPerson.querySelector('.photo').style.backgroundImage = 'url(' + person.photo + ')';
      newPerson.querySelector('.information').querySelector('.name').textContent = person.name;
      newPerson.querySelector('.information').querySelector('.say').textContent = person.text;

      return newPerson;
    }
})();