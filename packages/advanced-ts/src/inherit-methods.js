const parent = {
  value: 1,
  getValue() {
    return this.value + 1;
  },
};

console.log('Parent output:', parent.getValue()); // Expected output: 2

const child = {
  __proto__: parent,
};

/**
 * Expected output: 2
 * Child does not have its own 'value' property,
 * so 'this.value' in getValue() refers to parent.value
 */
console.log('Child output:', child.getValue());

child.value = 10;

/**
 * Expected ouput: 11
 * After changing value the expcted output is 11,
 * because 'this.value' refers to child and since
 * value in child is 10 the result is 11, this is
 * called 'shadowing' a property
 */
console.log('Child output after reassiging value', child.getValue());
