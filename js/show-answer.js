'use strict';
(function () {
    var boxQuestion = document.querySelector('.question-answer').querySelector('.box');
    var box = document.querySelector('.question-answer');

    boxQuestion.addEventListener('click', function(evt) {
        var target = evt.target;
        if (target.className !== 'question') {
            if ( target.offsetParent.className !== 'question') {
                return;
            }
        };

        var answer = target.querySelector('.answer-box');
        if (!answer) {
            answer = target.offsetParent.querySelector('.answer-box');
        }

        var arrow = target.querySelector('.arrow');
        if (!arrow) {
            arrow = target.offsetParent.querySelector('.arrow');
        }

        if (answer.style.maxHeight) {
            answer.style.maxHeight = null;
            box.style.height = box.offsetHeight - answer.scrollHeight + 'px';
            arrow.style.transform = 'rotate(0deg)';
        } else {
            answer.style.maxHeight = answer.scrollHeight + 'px';
            box.style.height = box.offsetHeight + answer.scrollHeight + 'px';
            arrow.style.transform = 'rotate(180deg)';
        }
    })
})();