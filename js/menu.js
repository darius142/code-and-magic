'use strict';

(function () {

  var ENTER = 13;

  var ESC = 27;

  var wizardBag = document.querySelector('.setup');

  var openWizardBagButton = document.querySelector('.setup-open');

  var closeWizardBagButton = wizardBag.querySelector('.setup-close');

  var inputName = wizardBag.querySelector('.setup-user-name');

  var inputCurrentTarget = null;

  var inputFocusHendler = function (evt) {
    inputCurrentTarget = evt.currentTarget;
  };
  inputName.addEventListener('focus', inputFocusHendler);

  var escKeydownkHendler = function (evt) {
    if (inputCurrentTarget !== null && evt.keyCode === ESC) {
      evt.stopPropagation();
    } else if (inputCurrentTarget === null && evt.keyCode === ESC) {
      closeWizardBag();
    }
  };
  // Взаимодействие пользователя с меню настройками волшебника.
  var openWizardBag = function () {
    wizardBag.classList.remove('hidden');
    document.addEventListener('keydown', escKeydownkHendler);
  };

  var closeWizardBag = function () {
    wizardBag.classList.add('hidden');
    wizardBag.removeEventListener('keydown', escKeydownkHendler);
    closeWizardBagButton.addEventListener('keydown', enterCloseKeydownHendler);
  };

  var deleteHiddenClickHendler = function () {
    openWizardBag();
  };
  openWizardBagButton.addEventListener('click', deleteHiddenClickHendler);

  var enterOpenKeydownHendler = function (evt) {
    if (evt.keyCode === ENTER) {
      openWizardBag();
    }
  };
  openWizardBagButton.addEventListener('keydown', enterOpenKeydownHendler);

  var addHiddenClickHendler = function () {
    closeWizardBag();
  };
  closeWizardBagButton.addEventListener('click', addHiddenClickHendler);

  var enterCloseKeydownHendler = function (evt) {
    if (evt.keyCode === ENTER) {
      closeWizardBag();
    }
  };
})();