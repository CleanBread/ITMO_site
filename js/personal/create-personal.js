'use strict';
(function () {
    var NAME = ['Ярослав Павлов', 'Чистяков Глеб', 'Роман Чучмеков', 'Олег Криволев', 'Шахром Мусаев'];

    var PHOTO = ['./images/men.png', './images/lama.jpg', './images/men1.jpg', './images/men2.jpg', './images/men3.jpg',];

    var TEXT = ['“Очень здорово, когда ты что-то даешь людям и видишь, что ты можешь повлиять на них в позитивном ключе, помочь им решить их задачи”.', 'Дайте работу', 'Каждой работе человек должен научиться сам.', 'Поменьше грез, рожденных скукою,побольше дела и труда!'];
    
    var returnRandomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      };

    window.createPerson = () => {
        var person = {
          name: NAME[returnRandomNumber(0, NAME.length)],
          photo: PHOTO[returnRandomNumber(0, PHOTO.length)],
          text: TEXT[returnRandomNumber(0, TEXT.length)]
        };
        return person;
      };
})();