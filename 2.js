let num = prompt("Enter a number: "); // prompt is only allow in web environment not in node.js environment

if (num % 5 === 0){
    console.log(`${num} is multiple of 5`);
} 
else{
    console.log(`${num} is not a multiple of 5`)
}
