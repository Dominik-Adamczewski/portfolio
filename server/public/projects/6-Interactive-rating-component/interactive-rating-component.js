const submitButton = document.getElementById('submit_button');
const ratings = document.querySelectorAll('.number');
const chosenRatingSpanElement = document.getElementById('num');
const errorMessage = document.querySelector('.error-message');

let chosenRating = null;

function applyChosenRating(rating) {
	chosenRatingSpanElement.innerText = rating;
};

function replace() {
  document.getElementById('initial_component').style.display="none";
  document.getElementById('thank_you_component').style.display="initial";
};

function clearErrorMessage() {
	errorMessage.style.display = 'none';
};

function triggerErrorMessage() {
	errorMessage.style.display = 'block';
}

ratings.forEach(rating => {
  rating.addEventListener('click', event => {
		clearErrorMessage();
		chosenRating = event.target.innerText;
		applyChosenRating(chosenRating);
	});
});

submitButton.addEventListener('click', function () {
	if (!chosenRating) {
		return triggerErrorMessage();
	}
	return replace();
});