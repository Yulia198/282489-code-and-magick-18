'use strict';
// 1. Найдём и покажем окно настроек пользователя:
var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

// 2. Покажем блок с похожими персонажами
// querySelector returns the first element that matches a specified CSS selector(s) in the document.
document.querySelector('.setup-similar').classList.remove('hidden');

// 3. Cоздадим массив из 4-х объектов:
var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];

var WIZARDS_AMOUNT = 4;

// 4. Найдём шаблон, который мы будем копировать. И найдём элемент, в который мы будем вставлять похожих магов.
var similarListElement = document.querySelector('.setup-similar-list');

// 5. И найдём элемент, в который мы будем вставлять похожих магов.
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');

// 7. Функция генерации случайных данных
// Math.floor возвращает наибольшее целое, меньшее или равное аргументу, Math.random - округляет
var getRandomItemFromArray = function (array) {
  return array[Math.floor(Math.random() * array.length)];
};

// 8. Стоит отдельно объявить функцию генерации случайных данных
var createWizardsArray = function (wizardsAmount) {

  for (var i = 0; i < wizardsAmount; i++) {
  /* КАК? 1. цвет мантии coatColor задайте как цвет заливки fill в стилях элемента .wizard-coat;
2. цвет глаз eyesColor задайте как цвет заливки fill в стилях элемента .wizard-eyes.
Функция получения случайного элемента массива
*/
  }
  return ?;
};

// функция создания DOM-элемента на основе JS-объекта
var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
  return wizardElement;
};

// функция заполнения блока DOM-элементами на основе массива JS-объектов
var insertWizards = function (wizards) {
  var fragment = document.createDocumentFragment();
  for (var i = 0; i < wizards.length; i++) {
    fragment.appendChild(renderWizard(wizards[i]));
  }
  similarListElement.appendChild(fragment);
};

var wizards = createWizardsArray(WIZARDS_AMOUNT);
insertWizards(wizards);

document.querySelector('.setup-similar').classList.remove('hidden');



