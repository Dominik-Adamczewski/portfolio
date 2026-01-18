<template>
  <form class="p-4 lg:p-8 w-full lg:w-4/6 max-w-4xl bg-white rounded-lg" @submit.prevent="submitForm" novalidate>
    <h1 class="text-2xl lg:text-3xl font-bold">Contact us</h1>
    <div class="lg:flex lg:items-start lg:justify-between">
      <div class="mt-4 w-full lg:w-[48%]">
        <SingleInputField
          label="First Name"
          inputType="text"
          class="mr-4"
          placeholder="e.g. John"
          v-model="firstName"
          :errors="errors.firstName"
          @focus="clearErrorState('firstName')"
        />
      </div>
      <div class="mt-4 w-full lg:w-[48%]">
        <SingleInputField
          label="Last Name"
          inputType="text"
          placeholder="e.g. Sunderland"
          v-model="lastName"
          :errors="errors.lastName"
          @focus="clearErrorState('lastName')"
        />
      </div>
    </div>
    <div class="mt-4 w-full">
      <SingleInputField
        label="Email address"
        inputType="email"
        placeholder="e.g. j.sunderland@gmail.com"
        @dataOk="collectData"
        :errors="errors.email"
        v-model="email"
        @focus="clearErrorState('email')"
      />
    </div>
    <GroupedRadioInputFields
      label="Query Type"
      :options="radioInputOptions"
      v-model="chosenQuery"
      :errors="errors.chosenQuery"
      @click="clearErrorState('chosenQuery')"
    />
    <div class="mt-6">
      <MessageBox
        label="Message"
        rows="6"
        placeholder="How can we assist you? Please provide as much detail as possible."
        v-model="userMessage"
        :errors="errors.userMessage"
        @focus="clearErrorState('userMessage')"
      />
    </div>
    <div class="mt-6">
      <CheckboxInputField 
        label="I consent to being contacted by the team" 
        v-model="consentChecked" 
        :errors="errors.consentChecked" 
        @change="clearErrorState('consentChecked')"
      />  
    </div> 
    <BaseButton>Submit</BaseButton>
  </form>
</template>

<script>
import GroupedRadioInputFields from "./GroupedRadioInputFields.vue";
import SingleInputField from "./SingleInputField.vue";
import MessageBox from "./MessageBox.vue";
import BaseButton from "./BaseButton.vue";
import CheckboxInputField from "./CheckboxInputField.vue";
export default {
  components: {
    SingleInputField,
    GroupedRadioInputFields,
    MessageBox,
    BaseButton,
    CheckboxInputField,
  },
  data() {
    return {
      firstName: '',
      lastName: '',
      email: '',
      chosenQuery: '',
      userMessage: '',
      consentChecked: false,
      errors: {
        firstName: [],
        lastName: [],
        email: [],
        chosenQuery: [],
        userMessage: [],
        consentChecked: [],
      },
      errorMessages: {
        firstName: 'First name field is required!',
        lastName: 'Last name field is required!',
        email: 'Email field is required!',
        emailInvalid: 'Please, provide a valid email address!',
        chosenQuery: 'Please choose Query Type!',
        userMessage: 'Message is required!',
        consentChecked: 'To submit this form, please consent to being contacted',
      },
      radioInputOptions: ['General Enquiry', 'Support Request'],
    }
  },
  methods: {
    validateForm() {
      const rules = {
        firstName: {
          required: true,
        },
        lastName: {
          required: true,
        },
        email: {
          required: true,
          pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        },
        chosenQuery: {
          required: true,
        },
        userMessage: {
          required: true,
        },
        consentChecked: {
          required: true,
        },
      };

      let isValid = true;

      Object.keys(rules).forEach((field) => {
        const value = this[field];
        const fieldRules = rules[field];
        this.errors[field] = [];

        if (fieldRules.required && !value) {
          this.errors[field].push(this.errorMessages[field]);
          isValid = false;
        }

        if (field === 'email' && value && !fieldRules.pattern.test(value)) {
          this.errors[field].push(this.errorMessages.emailInvalid);
          isValid = false;
        }
      });

      return isValid;
    },
    clearErrorState(field) {
      this.errors[field] = [];
    },
    submitForm(e) {
      e.preventDefault();

      if (this.validateForm()) {
        alert('Form submitted successfully!');
        location.reload();
      }
    },
  },
};
</script>

<style>
</style>