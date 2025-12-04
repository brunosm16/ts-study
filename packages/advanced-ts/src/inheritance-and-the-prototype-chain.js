/**
 * Prototype Chain
 { username: 'user123', email: 'user@example.com'} -> { isAdmin: false, isLoggedIn: true } -> Object.prototype -> null
 */

const object = {
  // Own properties
  username: 'user123',
  email: 'user@example.com',
  __proto__: {
    // Prototype properties
    isAdmin: false,
    isLoggedIn: true,
    __proto__: {
      isActive: true,
    },
  },
};

const objectProto = Object.getPrototypeOf(object);

const nestedProto = Object.getPrototypeOf(objectProto);

const deepNestedProto = Object.getPrototypeOf(nestedProto);

console.log(objectProto);
console.log(nestedProto);
console.log('End of prototype chain:', deepNestedProto);
console.log('Nested isActive: ', object?.isActive);
