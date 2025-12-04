/**
 * 'getValue()' does the same thing on every object inside boxes,
 * repeating code and creating redudancy.
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const boxes = [
  {
    value: 1,
    getValue() {
      return this.value;
    },
  },
  {
    value: 2,
    getValue() {
      return this.value;
    },
  },
  {
    value: 3,
    getValue() {
      return this.value;
    },
  },
];

const boxPrototype = {
  getValue() {
    return this.value;
  },
};

/**
 * Reusing code via prototype binding, even tough this works is not the
 * best practice because you have to manually set on each object instance
 * the binding of prototype.
 *
 * Instead of manual binding is used Class Constructor which set the
 * Prototype for each object instance created
 */
const boxesPrototype = [
  {
    value: 1,
    __proto__: boxPrototype,
  },
  {
    value: 2,
    __proto__: boxPrototype,
  },
  {
    value: 3,
    __proto__: boxPrototype,
  },
];

console.log(boxesPrototype[0].getValue());
console.log(boxesPrototype[1].getValue());
console.log(boxesPrototype[2].getValue());
