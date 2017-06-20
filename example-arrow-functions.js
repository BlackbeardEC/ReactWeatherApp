// var names = ['Rich', 'Shawna', 'Jeremy', 'Thor', 'Scarlett'];
//
// names.forEach(function(name){
//   console.log('forEach ', name);
// });
// console.log('================================');
// names.forEach((name) => {
//   console.log('arrowFunc ', name);
// });
// console.log('================================');
// names.forEach((name) => console.log('short arrowFunc', name));
// console.log('================================');
//
// var returnMe = (name) => name + '!';
// console.log(returnMe('Rich'));
// console.log('================================');
//
// var person = {
//   name: 'Rich',
//   greet: function(){
//     names.forEach( (name) => {// this was names.forEach(function(name){ but with that 'this' didn't refer to person anymore with the arrow function it fixes 'this'
//       console.log(this.name + ' says Hi to ' + name);
//     });
//   }
// };
//
// person.greet();


//challenge

function add(a, b){
  return a+b;
}
console.log(add(1, 3));
console.log(add(9, 0));
console.log('================================');
var addStatement = (a, b) => {
  return a + b;
};
console.log(addStatement(1, 3));
console.log(addStatement(9, 0));
console.log('================================');
var addExpression = (a,b) => a+b;
console.log(addExpression(1, 3));
console.log(addExpression(9, 0));
console.log('================================');
