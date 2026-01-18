import { defineStore } from 'pinia';
import { capitalCase } from 'change-case';

export const useMultiStepFormStore = defineStore('multiStepFormStore', {
  state: () => ({
    formSteps: [
      {
        stepNumber: 1,
        stepNumberLabel: 'STEP 1',
        stepText: 'YOUR INFO'
      },
      {
        stepNumber: 2,
        stepNumberLabel: 'STEP 2',
        stepText: 'SELECT PLAN'
      },
      {
        stepNumber: 3,
        stepNumberLabel: 'STEP 3',
        stepText: 'ADD-ONS'
      },
      {
        stepNumber: 4,
        stepNumberLabel: 'STEP 4',
        stepText: 'SUMMARY'
      }
    ],
    currentStep: 1,
    currentPricingType: 'monthly',
    isFormSubmitted: false,
    isStepOneValid: false,
    formData: {
      personalInfo: {
        name: '',
        email: '',
        phoneNumber: ''
      }
    },
    formErrors: {
      personalInfo: {
        name: [],
        emailAddress: [],
        phoneNumber: []
      },
      selectedPlan: []
    },
    availablePlans: [
      {
        imgUrl: '/images/icon-arcade.svg',
        imgAlt: 'Arcade icon',
        type: 'Arcade',
        priceMonthlyLabel: '$9/mo',
        priceYearlyLabel: '$90/yr',
        priceMonthly: 9,
        priceYearly: 90
      },
      {
        imgUrl: '/images/icon-advanced.svg',
        imgAlt: 'Advanced icon',
        type: 'Advanced',
        priceMonthlyLabel: '$12/mo',
        priceYearlyLabel: '$120/yr',
        priceMonthly: 12,
        priceYearly: 120
      },
      {
        imgUrl: '/images/icon-pro.svg',
        imgAlt: 'Pro icon',
        type: 'Pro',
        priceMonthlyLabel: '$15/mo',
        priceYearlyLabel: '$150/yr',
        priceMonthly: 15,
        priceYearly: 150
      }
    ],
    currentPlan: 'Arcade',
    availableAddOns: [
      {
        primaryLabel: 'Online service',
        secondaryLabel: 'Access to multiplayer games',
        priceMonthlyLabel: '+1$/mo',
        priceYearlyLabel: '+10$/yr',
        priceMonthly: 1,
        priceYearly: 10
      },
      {
        primaryLabel: 'Larger store',
        secondaryLabel: 'Extra 1TB of cloud save',
        priceMonthlyLabel: '+2$/mo',
        priceYearlyLabel: '+20$/yr',
        priceMonthly: 2,
        priceYearly: 20
      },
      {
        primaryLabel: 'Customizable profile',
        secondaryLabel: 'Custom theme on your profile',
        priceMonthlyLabel: '+2$/mo',
        priceYearlyLabel: '+20$/yr',
        priceMonthly: 2,
        priceYearly: 20
      }
    ],
    chosenAddOns: [],
    errorMessages: {
      emptyField: 'This field is required.',
      invalidField: 'This field is invalid.',
      valueTooShort: 'This field is too short! Please add more characters to proceed.'
    }
  }),
  getters: {
    getCurrentPlanLabelForSummary () {
      let label;
      const capitalizedPricingType = capitalCase(this.currentPricingType);
      switch (this.currentPlan) {
        case 'Arcade':
          label = `${capitalCase('arcade')} (${capitalizedPricingType})`;
          break;
        case 'Advanced':
          label = `${capitalCase('advanced')} (${capitalizedPricingType})`;
          break;
        case 'Pro':
          label = `${capitalCase('pro')} (${capitalizedPricingType})`;
          break;
        default:
          console.error('Error when creating label  for summary component!');
      }

      return label;
    },
    getPlanDataForSummary () {
      const planObj = this.availablePlans.find(plan => this.currentPlan === plan.type);
      return {
        label: planObj.type,
        priceLabel: this.currentPricingType === 'monthly' ? planObj.priceMonthlyLabel : planObj.priceYearlyLabel,
        price: this.currentPricingType === 'monthly' ? planObj.priceMonthly : planObj.priceYearly
      };
    },
    getChosenAddOnsDataForSummary () {
      const array = [];
      this.chosenAddOns.forEach(addOn => {
        array.push(
          {
            label: addOn.primaryLabel,
            priceLabel: this.currentPricingType === 'monthly' ? addOn.priceMonthlyLabel : addOn.priceYearlyLabel,
            price: this.currentPricingType === 'monthly' ? addOn.priceMonthly : addOn.priceYearly
          }
        );
      });
      console.log(array);
      return array;
    },
    getTotalPriceForSummary () {
      const planObj = this.availablePlans.find(plan => this.currentPlan === plan.type);
      const planPrice = this.currentPricingType === 'monthly' ? planObj.priceMonthly : planObj.priceYearly;
      const addOnsPrice = this.chosenAddOns.map(addon => this.currentPricingType === 'monthly' ? addon.priceMonthly : addon.priceYearly);
      const allPrices = [planPrice, ...addOnsPrice];
      const initialPrice = 0;

      return allPrices.reduce((accumulator, currentValue) => accumulator + currentValue, initialPrice);
    },
    getSummaryObject () {
      return {
        planData: this.getPlanDataForSummary,
        chosenAddOnsData: this.getChosenAddOnsDataForSummary,
        totalPrice: this.getTotalPriceForSummary
      };
    }
  },
  actions: {
    goToTheNextStep () {
      if (this.currentStep >= this.formSteps.length) {
        return;
      }
      return this.currentStep++;
    },
    goToThePreviousStep () {
      if (this.currentStep <= 1) {
        return;
      }
      return this.currentStep--;
    },
    updatePersonalInfo (data) {
      this.formData.personalInfo = { ...data };
    },
    goBackToCurrentPlanStep () {
      this.currentStep = 2;
    },
    changeCurrentPlan (planType) {
      this.currentPlan = planType;
    },
    changePricingType () {
      this.currentPricingType === 'monthly' ? this.currentPricingType = 'yearly' : this.currentPricingType = 'monthly';
      console.log(this.currentPricingType);
    },
    chooseAddOn (addOnPrimaryLabel) {
      const chosenAddOn = this.availableAddOns.find(element => element.primaryLabel === addOnPrimaryLabel);
      this.chosenAddOns.push(chosenAddOn);
      console.log(this.chosenAddOns);
    },
    unChooseAddOn (addOnPrimaryLabel) {
      const indexOfUnchosenAddOn = this.chosenAddOns.findIndex(element => element.primaryLabel === addOnPrimaryLabel);
      this.chosenAddOns.splice(indexOfUnchosenAddOn, 1);
    },
    validateName () {
      if (!this.formData.personalInfo.name) {
        this.formErrors.personalInfo.name.push(this.errorMessages.emptyField);
        this.isStepOneValid = false;
      }
    },
    validateEmail () {
      const emailAddressRegexPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

      if (!this.formData.personalInfo.email) {
        this.formErrors.personalInfo.emailAddress.push(this.errorMessages.emptyField);
        this.isStepOneValid = false;
      }

      if (!emailAddressRegexPattern.test(this.formData.personalInfo.email)) {
        this.formErrors.personalInfo.emailAddress.push(this.errorMessages.invalidField);
        this.isStepOneValid = false;
      }
    },
    validatePhone () {
      const phoneNumberRegexPattern = /^[0-9+\-()\s.]*$/;

      if (!this.formData.personalInfo.phoneNumber) {
        this.formErrors.personalInfo.phoneNumber.push(this.errorMessages.emptyField);
        this.isStepOneValid = false;
      }

      if (this.formData.personalInfo.phoneNumber.length < 8) {
        this.formErrors.personalInfo.phoneNumber.push(this.errorMessages.valueTooShort);
        this.isStepOneValid = false;
      }

      if (!phoneNumberRegexPattern.test(this.formData.personalInfo.phoneNumber)) {
        this.formErrors.personalInfo.phoneNumber.push(this.errorMessages.invalidField);
        this.isStepOneValid = false;
      }
    },
    clearErrorMessage (inputType) {
      switch (inputType) {
        case 'Name':
          this.formErrors.personalInfo.name = [];
          break;
        case 'Email Address':
          this.formErrors.personalInfo.emailAddress = [];
          break;
        case 'Phone Number':
          this.formErrors.personalInfo.phoneNumber = [];
          break;
        default:
          console.error('No errors to clear!');
      };
      this.isStepOneValid = true;
    },
    submitFirstStepOfTheForm () {
      this.validateName();
      this.validateEmail();
      this.validatePhone();
      if (this.isStepOneValid) {
        this.goToTheNextStep();
      }
    },
    submitTheForm () {
      this.isFormSubmitted = true;
    }
  }
});
