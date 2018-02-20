'use strict';
(function () {


// нахождение селекторов.
  var i;
  var similarListElement = document.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;

  // объявление и заполнение массивов.

  var WIZARD_FIRST_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var WIZARD_LAST_NAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Вальц', 'Топольницкая', 'Нионго', 'Ирвинг'];

  window.fireball = function () {
    var fireballColor = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
    var fireballColorRand = fireballColor.sort(window.compareRandom);
    return fireballColorRand[i];
  };

  window.coat = function () {
    var coatColor = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
    var coatColorRand = coatColor.sort(window.compareRandom);
    return coatColorRand[i];
  };

  window.eyes = function () {
    var eyesColor = ['black', 'red', 'blue', 'yellow', 'green'];
    var eyesRand = eyesColor.sort(window.compareRandom);
    return eyesRand[i];
  };

  // рандомная сортировка массивов.

  window.compareRandom = function () {
    return Math.random() - 0.5;
  };

  WIZARD_FIRST_NAMES.sort(window.compareRandom);
  WIZARD_LAST_NAMES.sort(window.compareRandom);


  // клонирование шаблона DOM элемента с и внедрение массивов данных.


  var wizardItem = function () {
    var wizardElement = similarWizardTemplate.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').style.fontSize = '16px';
    wizardElement.querySelector('.setup-similar-label').textContent = WIZARD_FIRST_NAMES[i] + ' ' + WIZARD_LAST_NAMES[i];
    wizardElement.querySelector('.wizard-coat').style.fill = window.coat();
    wizardElement.querySelector('.wizard-eyes').style.fill = window.eyes();

    return wizardElement;
  };

  // Добавление 4х шаблонов в DOM.

  var fragment = document.createDocumentFragment();
  for (i = 0; i < 4; i++) {
    fragment.appendChild(wizardItem());
  }

  similarListElement.appendChild(fragment);

})();