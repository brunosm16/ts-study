function Box(value) {
  this.value = value;
}

Box.prototype.getValue = function () {
  return this.value;
};

const boxes = [new Box(1), new Box(2), new Box(3)];

/**
 * The Prototype Chain is firstBox -> Object.getPrototypeOf(Box) -> Object.prototype -> null
 */
const firstBox = boxes[0];

console.log(firstBox);

console.log(Object.getPrototypeOf(new Box()) === Box.prototype);

console.log(Object.getPrototypeOf(Box.prototype) === Object.prototype);

/**
 * .constructor allows to access prototype constructor
 */
console.log(Object.getPrototypeOf(new Box()).constructor === Box);

function OverridingConstructor(name) {
  this.name = name;
  this.type = 'Original';

  return {
    type: 'Override type',
    name: 'Override name',
  };
}

const overrideObj = new OverridingConstructor('jonhdoe');

console.log(overrideObj);
