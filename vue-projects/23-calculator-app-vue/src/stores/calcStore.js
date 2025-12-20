import { defineStore } from 'pinia'

const isOperator = (char) => ['+', '-', 'x', '/'].includes(char);

export const calcStore = defineStore('calcStore', {
  state: () => {
    return {
      currentTheme: 1,
      currentLayout: 'standardLayout',
      expression: [],
      themes: [
        {
          id: 1,
          backgroundClasses: {
            appBackground: 'bg-proj-23-theme-1-very-dark-desaturated-blue-var-1',
            keypadBackground: 'bg-proj-23-theme-1-very-dark-desaturated-blue-var-2',
            screenBackground: 'bg-proj-23-theme-1-very-dark-desaturated-blue-var-3',
          },
          keysClasses: {
            actionKeysBackground: 'bg-proj-23-theme-1-desaturated-dark-blue-var-1',
            actionKeysShadow: 'shadow-proj-23-theme-1-desaturated-dark-blue-var-2',
            actionKeysHover: 'hover:proj-23-theme-1-desaturated-dark-blue-var-1-hover',
            actionKeysActive: 'active:proj-23-theme-1-desaturated-dark-blue-var-1-active',
            mainKeyBackground: 'bg-proj-23-theme-1-red',
            mainKeyShadow: 'shadow-proj-23-theme-1-dark-red',
            mainKeyHover: 'hover:proj-23-theme-1-red-hover',
            mainKeyActive: 'active:proj-23-theme-1-red-active',
            numericKeysBackground: 'bg-proj-23-theme-1-light-grayish-orange',
            numericKeysShadow: 'shadow-proj-23-theme-1-grayish-orange',
            numericKeysHover: 'hover:bg-proj-23-theme-1-light-grayish-orange-hover',
            numericKeysActive: 'active:proj-23-theme-1-light-grayish-orange-active',
          },
          textClasses: {
            keyText: 'text-proj-23-theme-1-very-dark-grayish-blue',
            screenText: 'text-white'
          }
        },
        {
          id: 2,
          backgroundClasses: {
            appBackground: 'bg-proj-23-theme-2-light-gray',
            keypadBackground: 'bg-proj-23-theme-2-grayish-red',
            screenBackground: 'bg-proj-23-theme-2-very-light-gray'
          },
          keysClasses: {
            actionKeysBackground: 'bg-proj-23-theme-2-dark-moderate-cyan',
            actionKeysShadow: 'shadow-proj-23-theme-2-very-dark-cyan',
            actionKeysHover: 'hover:bg-proj-23-theme-2-dark-moderate-cyan-hover',
            actionKeysActive: 'active:bg-proj-23-theme-2-dark-moderate-cyan-active',
            mainKeyBackground: 'bg-proj-23-theme-2-orange',
            mainKeyShadow: 'shadow-proj-23-theme-2-dark-orange',
            mainKeyHover: 'hover:bg-proj-23-theme-2-orange-hover',
            mainKeyActive: 'active:bg-proj-23-theme-2-orange-active',
            numericKeysBackground: 'bg-proj-23-theme-2-light-grayish-yellow',
            numericKeysShadow: 'shadow-proj-23-theme-2-dark-grayish-orange',
            numericKeysHover: 'hover:bg-proj-23-theme-2-light-grayish-yellow-hover',
            numericKeysActive: 'active:bg-proj-23-theme-2-light-grayish-yellow-active',
            text: 'text-proj-23-theme-2-very-dark-grayish-yellow',
          },
          textClasses: {
            keyText: 'text-proj-23-theme-2-very-dark-grayish-yellow',
            screenText: 'text-proj-23-theme-2-very-dark-grayish-yellow'
          }
        },
        {
          id: 3,
          backgroundClasses: {
            appBackground: 'bg-proj-23-theme-3-very-dark-violet-var-1',
            keypadBackground: 'bg-proj-23-theme-3-very-dark-violet-var-2',
            screenBackground: 'bg-proj-23-theme-3-very-dark-violet-var-2'
          },
          keysClasses: {
            actionKeysBackground: 'bg-proj-23-theme-3-dark-violet',
            actionKeysShadow: 'shadow-proj-23-theme-3-vivid-magenta',
            actionKeysHover: 'hover:bg-proj-23-theme-3-dark-violet-hover',
            actionKeysActive: 'active:bg-proj-23-theme-3-dark-violet-active',
            mainKeyBackground: 'bg-proj-23-theme-3-pure-cyan',
            mainKeyShadow: 'shadow-proj-23-theme-3-soft-cyan',
            mainKeyHover: 'hover:bg-proj-23-theme-3-pure-cyan-hover',
            mainKeyActive: 'active:bg-proj-23-theme-3-pure-cyan-active',
            numericKeysBackground: 'bg-proj-23-theme-3-very-dark-violet-var-3',
            numericKeysShadow: 'shadow-proj-23-theme-3-dark-magenta',
            numericKeysHover: 'hover:bg-proj-23-theme-3-very-dark-violet-var-3-hover',
            numericKeyActive: 'active:bg-proj-23-theme-3-very-dark-violet-var-3-active',
          },
          textClasses: {
            keyText: 'text-proj-23-theme-3-light-yellow',
            textSecondary: 'text-proj-23-theme-3-very-dark-blue',
            screenText: 'text-proj-23-theme-3-light-yellow'
          }
        },
      ],
      calculatorLayouts: [
        {
          name: 'standardLayout',
          label: 'Standard',
          layout: [
            [
              { label: '7', type: 'digit' },
              { label: '8', type: 'digit' },
              { label: '9', type: 'digit' },
              { label: 'DEL', type: 'delete' }
            ],
            [
              { label: '4', type: 'digit' },
              { label: '5', type: 'digit' },
              { label: '6', type: 'digit' },
              { label: '+', type: 'operator' }
            ],
            [
              { label: '1', type: 'digit' },
              { label: '2', type: 'digit' },
              { label: '3', type: 'digit' },
              { label: '-', type: 'operator' }
            ],
            [
              { label: '.', type: 'decimal' },
              { label: '0', type: 'digit' },
              { label: '/', type: 'operator' },
              { label: 'x', type: 'operator' }
            ],
            [
              { label: 'RESET', type: 'reset' },
              { label: '=', type: 'equals' }
            ]
          ]
        },
        {
          name: 'reversedLayout',
          label: 'Reversed',
          layout: [
            [
              { label: 'RESET', type: 'reset' },
              { label: '=', type: 'equals' }
            ],
            [
              { label: '1', type: 'digit' },
              { label: '2', type: 'digit' },
              { label: '3', type: 'digit' },
              { label: '-', type: 'operator' }
            ],
            [
              { label: '4', type: 'digit' },
              { label: '5', type: 'digit' },
              { label: '6', type: 'digit' },
              { label: '+', type: 'operator' }
            ],
            [
              { label: '7', type: 'digit' },
              { label: '8', type: 'digit' },
              { label: '9', type: 'digit' },
              { label: 'x', type: 'operator' }
            ],
            [
              { label: '.', type: 'decimal' },
              { label: '0', type: 'digit' },
              { label: '/', type: 'operator' },
              { label: 'DEL', type: 'delete' }
            ]
          ]
        }
      ]
    }
  },
  getters: {
    activeTheme() {
      return this.themes.find(item => item.id === this.currentTheme);
    },
    activeLayout() {
      return this.calculatorLayouts.find(layout => layout.name === this.currentLayout);
    },
    screenDisplay() {
      return this.expression.join(' ');
    },
    isCalcScreenPureText() {
      return /^[a-zA-Z\s]+$/.test(this.expression);
    }
  },
  actions: {
    applyNextTheme() {
      if (this.currentTheme === this.themes.length) {
        return this.currentTheme = 1;
      }

      this.currentTheme += 1;
    },
    applyLayout(layout) {
      this.currentLayout = layout;
    },
    addDigitToCurrentExpression(keyObject) {
      if (keyObject.type === 'operator' && !this.expression.length) {  // do not allow to type operator as first character
        return;
      }

      if (keyObject.type === 'reset' || keyObject.type === 'delete' || keyObject.type === 'equals') {
        return;
      }

      if (this.expression.length > 0) {
        const lastItem = this.expression[this.expression.length - 1];

        if (keyObject.type === 'operator') {
          // do not allow two operators in a row
          if (isOperator(lastItem)) return;

          this.expression.push(keyObject.label);
          console.log(this.expression);
          return;
        }

        if (isOperator(lastItem)) {
          this.expression.push(keyObject.label);  // push number as new element if last item is operator
        } else {
          console.log(keyObject.type)
          if (keyObject.type === 'decimal' && lastItem.includes(keyObject.label)) {  // do not add . 2nd time if it was already added to the digit
            console.log('wlazłem')
            return;
          }

          this.expression[this.expression.length - 1] += keyObject.label; // only clicking an operator should add new item to array
        }

        console.log(this.expression);
        return;
      }

      // First item, push digit directly
      this.expression.push(keyObject.label);
    },
    calculateExpression() {
      this.evaluateOperators(['x', '/']);
      this.evaluateOperators(['+', '-']);
    },
    resetCalculator() {
      this.expression = [];
    },
    handleDelKey() {
      if (this.expression.length === 0) return;

      const lastItem = this.expression[this.expression.length - 1];

      if (lastItem.length === 1) {
        this.expression.pop();
      } else {
        this.expression[this.expression.length - 1] = lastItem.slice(0, -1);
      }
    },
    add(num1, num2) {
      return num1 + num2;
    },
    subtract(num1, num2) {
      return num1 - num2;
    },
    multiply(num1, num2) {
      return num1 * num2;
    },
    divide(num1, num2) {
      return num1 / num2;
    },
    evaluateOperators(operators) {
      let index;

      while ((index = this.expression.findIndex(item => operators.includes(item))) !== -1) {
        const operator = this.expression[index];
        const num1 = parseFloat(this.expression[index - 1]);
        const num2 = parseFloat(this.expression[index + 1]);

        let result;
        switch (operator) {
          case 'x':
            result = this.multiply(num1, num2);
            break;
          case '/':
            if (num2 === 0) {
              return this.expression = ["It is not allowed to divide by zero"];
            }
            result = this.divide(num1, num2);
            break;
          case '+':
            result = this.add(num1, num2);
            break;
          case '-':
            result = this.subtract(num1, num2);
            break;
          default:
            return;
        }

        // Replace num1, operator, num2 with result
        this.expression.splice(index - 1, 3, result.toString());
      }
    }
  }
})
