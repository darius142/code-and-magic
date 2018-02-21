'use strict';
(function () {


  var ENTER = 13;

  var ESC = 27;

  var wizardBag = document.querySelector('.setup');

  var openWizardBagButton = document.querySelector('.setup-open');

  var closeWizardBagButton = wizardBag.querySelector('.setup-close');

  var inputName = wizardBag.querySelector('.setup-user-name');

  var wizardBagMove = wizardBag.querySelector('.upload');

  // var wizardBagUpload = wizardBag.querySelector('.upload');

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

    // перетаскивание меню

  wizardBagMove.addEventListener('mousedown', function (evt) {
    evt.preventDefault();

    var startCoords = {
      x: evt.clientX,
      y: evt.clientY
    };
    var dragged = false;

    var onMouseMove = function (moveEvt) {
      moveEvt.preventDefault();

      dragged = true;

      var shift = {
        x: startCoords.x - moveEvt.clientX,
        y: startCoords.y - moveEvt.clientY
      };

      startCoords = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      };

      wizardBag.style.top = (wizardBag.offsetTop - shift.y) + 'px';
      wizardBag.style.left = (wizardBag.offsetLeft - shift.x) + 'px';
    };

    var onMouseUp = function (upEvt) {
      upEvt.preventDefault();

      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);

      if (dragged) {
        var preventDefaultClickHandler = function (drEvt) {
          drEvt.preventDefault();
          wizardBagMove.removeEventListener('click', preventDefaultClickHandler);
        };
        wizardBagMove.addEventListener('click', preventDefaultClickHandler);
      }
    };
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);

  });


})();