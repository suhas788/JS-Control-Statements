// Challenge 1: Create a for loop to print all the even numbers till 100 in the console.
for (let i = 2; i <= 100; i += 2) {
  console.log(i);
}

// Challenge 2: Create a while loop to print all the odd numbers till 100 in the console.
let number = 1;
while (number <= 100) {
  console.log(number);
  number += 2;
}
// Challenge 3: Create a do while loop to print all the multiples of 3 till 100 in the console.
let nos = 3;
do {
  console.log(number);
  number += 3;
}
 while (number <= 100);

// Challenge 4: Create a for loop to print all the prime numbers till 100 in the console.
function isPrime(num) {
  if (num <= 1) return false;
  if (num <= 3) return true;
  if (num % 2 === 0 || num % 3 === 0) return false;
  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) {
      return false;
    }
  }
  return true;
}

for (let i = 2; i <= 100; i++) {
  if (isPrime(i)) {
    console.log(i);
  }
}

