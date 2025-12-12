const $billAmount = $('.input-component__input-field--bill');
const $numberOfPeople = $('.input-component__input-field--people');
const $regularPercentageGridElements = $('.percentage-grid__grid-wrapper input[type="radio"]');
const $customPercentageGridElement = $('.percentage-grid__grid-element--custom');
const $customPercentageInputField = $('.percentage-grid__custom-input-field');
const $displayedTipPerPerson = $('#tipPerPerson');
const $displayedTotalPerPerson = $('#totalPerPerson');
const $resetButton = $('.button--reset');
const $percentageGrid = $('.percentage-grid');

let $chosenTipPercentage = null;
let errors = [];

const exponentialRegex = /^-?\d+(\.\d+)?[eE][-+]?\d+$/;

function areAllFieldsFilled() {
  if ($billAmount.val() && $numberOfPeople.val() && $chosenTipPercentage) {
    return true;
  }
  return false;
}

function validateTipPercentageInput() {
  if ($billAmount.val() && $numberOfPeople.val() && ($chosenTipPercentage === null || $chosenTipPercentage === '')) {
    $percentageGrid.find('.input-component__error-msg').addClass('active').text('Choose tip percentage!');
    if (!errors.includes('percentageEmpty')) {
      errors.push('percentageEmpty');
    };
  }

  if ($chosenTipPercentage > 100 || exponentialRegex.test($chosenTipPercentage)) {
    $percentageGrid.find('.input-component__error-msg').addClass('active').text('Tip % is invalid');
    if (!errors.includes('percentageInvalid')) {
      errors.push('percentageInvalid');
    };
  }
}

function checkForErrors($inputField) {
  if ($inputField.val() <= 0 || exponentialRegex.test($inputField.val())) {
    $inputField.addClass('input-error');
    $inputField.closest('.input-component').find('.input-component__error-msg').addClass('active');
    if ($inputField === $billAmount && !errors.includes('billValueInvalid')) {
      errors.push('billValueInvalid');
    };
    if ($inputField === $numberOfPeople && !errors.includes('numberOfPeopleValueInvalid')) {
      errors.push('numberOfPeopleValueInvalid');
    }
  }
}

function clearErrorsArray(errorTypesArray) {
  errorTypesArray.forEach(errorType => {
    const index = errors.indexOf(errorType);
    if (index !== -1) {
      errors.splice(index, 1);
    }
  });
}

function clearErrorState(inputField) {
  inputField.removeClass('input-error');
  inputField.closest('.input-component').find('.input-component__error-msg').removeClass('active');
  if (inputField === $billAmount) {
    clearErrorsArray(['billValueInvalid']);
  };
  if (inputField === $numberOfPeople) {
    clearErrorsArray(['numberOfPeopleValueInvalid']);
  }
}

function getAmountsPerPerson(billAmount, numberOfPeople, tipPercentage) {
  const tipAmount = billAmount * (tipPercentage / 100);
  const tipPerPerson = Number(tipAmount / numberOfPeople).toFixed(2); 
  const totalPerPerson = Number((billAmount / numberOfPeople) + Number(tipPerPerson)).toFixed(2);
  return {
    tipPerPerson,
    totalPerPerson
  };
}


function renderResults() {
  if (areAllFieldsFilled() && errors.length === 0) {
    const amountsObj = getAmountsPerPerson($billAmount.val(), $numberOfPeople.val(), $chosenTipPercentage);
    $displayedTipPerPerson.text('$' + amountsObj.tipPerPerson);
    $displayedTotalPerPerson.text('$' + amountsObj.totalPerPerson);
  }
  return;
}

$regularPercentageGridElements.on('change', function() {
  $percentageGrid.find('.input-component__error-msg').removeClass('active');
  clearErrorsArray(['percentageEmpty', 'percentageInvalid']);
  $chosenTipPercentage = $(this).val();
});

$customPercentageGridElement.click(function() {
  $regularPercentageGridElements.prop('checked', false);
  $('.percentage-grid__custom-placeholder').text('');
  $customPercentageInputField.addClass('active').focus();
  clearErrorsArray(['percentageEmpty', 'percentageInvalid']);
});

$customPercentageInputField.on('input', function() {
  $chosenTipPercentage = $(this).val();
  validateTipPercentageInput();
  renderResults();
});

$customPercentageInputField.on('focus', function() {
  clearErrorsArray(['percentageEmpty', 'percentageInvalid']);
  $percentageGrid.find('.input-component__error-msg').removeClass('active');
});

$customPercentageInputField.on('blur', function() {
  validateTipPercentageInput();
});

$resetButton.click(function() {
  $displayedTipPerPerson.text('$0.00');
  $displayedTotalPerPerson.text('$0.00');
  $billAmount.val('');
  $numberOfPeople.val('');
  $regularPercentageGridElements.removeClass('active');
  $customPercentageGridElement.removeClass('active');
  $customPercentageInputField.removeClass('active').val('');
  $percentageGrid.find('.input-component__error-msg').removeClass('active');
  $('.percentage-grid__custom-placeholder').text('Custom');
  errors = [];
});

$billAmount.on('blur', function() {
  checkForErrors($billAmount);
});

$billAmount.on('input', function() {
  clearErrorState($billAmount);
  checkForErrors($billAmount);
  renderResults();
});

$numberOfPeople.on('blur', function() {
  checkForErrors($numberOfPeople);
});

$numberOfPeople.on('input', function() {
  clearErrorState($numberOfPeople);
  checkForErrors($numberOfPeople);
  renderResults();
});

$regularPercentageGridElements.each(function() {
  $(this).on('click', function() {
    validateTipPercentageInput();
    renderResults();
  });
});