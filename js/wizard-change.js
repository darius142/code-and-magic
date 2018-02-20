'use strict';
(function () {
  var wizardCoat = document.querySelector('.wizard-coat');
  var wizardEyes = document.querySelector('.wizard-eyes');
  var wizardFireball = document.querySelector('.setup-fireball-wrap');

  wizardCoat.style.cursor = 'pointer';
  wizardEyes.style.cursor = 'pointer';
  wizardFireball.style.cursor = 'pointer';

  var changeWizardCoatClickHendler = function () {

    wizardCoat.style.fill = window.coat();
  };
  wizardCoat.addEventListener('click', changeWizardCoatClickHendler);


  var changeWizardEyesClickHendler = function () {

    wizardEyes.style.fill = window.eyes();
  };
  wizardEyes.addEventListener('click', changeWizardEyesClickHendler);


  var changeWizardFireballClickHendler = function () {
    wizardFireball.style.backgroundColor = window.fireball();
  };
  wizardFireball.addEventListener('click', changeWizardFireballClickHendler);
})();