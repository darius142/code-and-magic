'use strict';

var NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(146, 100, 161)', 'rgb(146, 100, 161)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];
var WIZARD_QUANTITY = 4;

var wizards = [];

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

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

 