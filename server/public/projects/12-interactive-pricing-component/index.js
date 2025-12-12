const sliderInput = document.querySelector('.pricing-component__slider');
const price = document.querySelector('.pricing-component__price');
const ctaButton = document.querySelector('.pricing-component__cta-button');
const yearlyPricingBadge = document.querySelector('.pricing-component__yearly-pricing-badge');
const billingTypeCheckbox = document.querySelector('.pricing-component__billing-checkbox');
const pricingType = document.querySelector('.pricing-component__pricing-type');
const monthlyPricingTypeInfoLabel = document.querySelector('.pricing-component__pricing-type-info--monthly');
const yearlyPricingTypeInfoLabel = document.querySelector('.pricing-component__pricing-type-info--yearly');

let isYearlyBillingSet = false;

const maxPricePerMonth = 32;
const fullYearMonths = 12;
const discountForYearlyPrice = 0.1;
const sliderYearlyPricingSteps = 6;

const yearlyPricing = (maxPricePerMonth * fullYearMonths) * (1 - discountForYearlyPrice);

const yearlySliderConfig = {
  max: `${yearlyPricing * sliderYearlyPricingSteps}`,
  min: yearlyPricing,
  value: yearlyPricing,
  step: yearlyPricing,
  display: '/ year',
};

const defaultSliderConfig = {
  max: '32',
  min: '1',
  value: '1',
  step: '1',
  display: '/ month',
};

const updateSliderPrice = (sliderPrice) => {
  const formattedPrice = Number(sliderPrice).toFixed(2);
  price.innerHTML = `$${formattedPrice}`;
}

const highlightYearlyPricing = () => {
  monthlyPricingTypeInfoLabel.classList.remove('active');
  yearlyPricingTypeInfoLabel.classList.add('active');
}

const highLightMonthlyPricing = () => {
  monthlyPricingTypeInfoLabel.classList.add('active');
  yearlyPricingTypeInfoLabel.classList.remove('active');
}

const toggleYearlyPricing = () => {
  isYearlyBillingSet = !isYearlyBillingSet;
}

const setPricintType = (configObj) => {
  pricingType.textContent = configObj.display;
  for (const property in configObj) {
    sliderInput.setAttribute(property, configObj[property]);
  }
}

const loadAppDefaultState = () => {
  setPricintType(defaultSliderConfig);
  updateSliderPrice(sliderInput.value);
  highLightMonthlyPricing();
}

const loadAppYearlyState = () => {
  setPricintType(yearlySliderConfig);
  updateSliderPrice(yearlyPricing);
  highlightYearlyPricing();
};

loadAppDefaultState();

sliderInput.addEventListener('input', () => {
  updateSliderPrice(sliderInput.value);
});

ctaButton.addEventListener('click', () => {
  alert('Thanks for choosing our product! Page will reload now...');
  location.reload();
});

billingTypeCheckbox.addEventListener('click', () => {
  toggleYearlyPricing();
  isYearlyBillingSet ? loadAppYearlyState() : loadAppDefaultState();
});