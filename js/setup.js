'use strict';


//DOM

var NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(146, 100, 161)', 'rgb(146, 100, 161)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];
var WIZARD_QUANTITY = 4;

var wizards = [];

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
var userDialog = document.querySelector('.setup');
// userDialog.classList.remove('hidden');

function getRandom(number) {	// випадкове число
	return Math.floor(Math.random() * number);
}

function createWizardsArray(wizardsArray) {		// генерує масив обєктів
	for (var i =  0; i < WIZARD_QUANTITY; i++) {
		wizardsArray.push({name: NAMES[getRandom(NAMES.length)] + " " + SURNAMES[getRandom(SURNAMES.length)], coatColor: COAT_COLOR[getRandom(COAT_COLOR.length)], eyesColor: EYES_COLOR[getRandom(EYES_COLOR.length)]});
	}
	return wizardsArray;
}

function renderWizard(wizard) {		// клонує елемнети
	var wizardElement = similarWizardTemplate.cloneNode(true);

	wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
	wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
	wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

	return wizardElement;
}

function drawWizards() {	//
	var fragment = document.createDocumentFragment();
	var wizardsData = createWizardsArray(wizards);

	for (var i =  0; i < wizardsData.length; i++) {
		fragment.appendChild(renderWizard(wizardsData[i]));
	}

	return fragment;
}


similarListElement.appendChild(drawWizards());
document.querySelector('.setup-similar').classList.remove('hidden');

 //EVENTS


// OPEN CLOSE USERDIALOG WINDOW
var ENTER_KEYCODE = 13;
var ESCAPE_KEYCODE = 27;
var setupOpen = document.querySelector('.setup-open');
var setupClose = document.querySelector('.setup-close');
var setupSubmit = document.querySelector('.setup-submit');

function onPopupEscPress(evt) {
	if (evt.keyCode === ESCAPE_KEYCODE) {
		closePopup();
	}
}

function togglePopup() {
	userDialog.classList.toggle('hidden');
	document.addEventListener('keydown', onPopupEscPress);
}

function closePopup() {
	userDialog.classList.add('hidden');
}

setupOpen.addEventListener('click', function() {
	togglePopup();
});

setupOpen.addEventListener('keydown', function(evt) {
	if (evt.keyCode === ENTER_KEYCODE) {
		togglePopup();
	}
});

setupClose.addEventListener('keydown', function(evt) {
	if (evt.keyCode === ENTER_KEYCODE) {
		closePopup();
	}
});

setupClose.addEventListener('click', function() {
	closePopup();
});


// Send form on Save Btn
setupSubmit.addEventListener('click', function(evt) {

	console.log('Form has been sent');
});

setupSubmit.addEventListener('keydown', function(evt) {
	if (evt.keyCode === ENTER_KEYCODE) {
		console.log('Form has been sent');
	}
});

// 3.CHANGE COAT COLOR ON CLICK

console.log(COAT_COLOR[getRandom(COAT_COLOR.length)]);

var wizardCoat = document.querySelector('.wizard-coat');
wizardCoat.addEventListener('click', function() {
	wizardCoat.style.fill = COAT_COLOR[getRandom(COAT_COLOR.length)];
});

// 4.CHANGE EYES COLOR ON CLICK
var wizardEyes = document.querySelector('.wizard-eyes');
wizardEyes.addEventListener('click', function() {
	wizardEyes.style.fill = EYES_COLOR[getRandom(EYES_COLOR.length)];
});

// 5.CHANGE FIREBALL COLOR ON CLICK
var FIREBALL_COLOR = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

var wizardFireballColor = document.querySelector('.setup-fireball-wrap');
wizardFireballColor.addEventListener('click', function() {
	wizardFireballColor.style.background = FIREBALL_COLOR[getRandom(FIREBALL_COLOR.length)];
});

