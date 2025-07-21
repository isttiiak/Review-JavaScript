/* 
Array is a collection of items.

Array methods:

push('what you want to push') ---> add to end (also push multiple element at a time)
pop() ---> delete from end and return the deleted value
toString() ---> convert array to string
concat()  ---> join multiple arrays and return a new array
unshift() ---> add to start (like push but add to the start)
shift() ---> delete from the start and the deleted value (like pop but delete from the start)
slice() ---> return a piece of the array. Original array does not change rather return a new array. aVariable.slice(start idx, end idx) the end idx is exclusive.
splice() ---> change original array (add, remove, replace). Takes 3 parameter   

*/

let price = [250, 300, 600, 900, 100, 50];
let offer = 10;

for (let p=0; p<price.length; p++){
    // console.log(price[p]);
    price[p] = price[p] * ((100 - offer)/100);
    // console.log(price[p]);
}
console.log(price);

let myName = ["Istiak", "Sabin", "Farikh", "Salar"];
console.log(myName);

// push()
myName.push("Olik");

console.log(myName);

// pop()
let popedItem = myName.pop();

console.log(myName);

console.log(popedItem);

// toString()
console.log(myName.toString());

// slice
let sliceItem1 = myName.slice(1, 3);
console.log(sliceItem1);

let sliceItem2 = myName.slice(1); // start at 1 to the end
console.log(sliceItem2);


// splice(start idx, how many number you want to delete, replace value)
let num = [10, 20, 30, 40, 50, 60, 70];
num.splice(2, 0, 100); // add an element at the provided index
console.log(num);

num.splice(2, 1);  // delete 1 element starting from index 2.
console.log(num);

num.splice(3, 1, 300); // At index 3 delete 1 element and replace it with 300.
console.log(num);

num.splice(2); // if we do not add delete value then it will delete all element starting from that index and return the rest of array.
console.log(num);



