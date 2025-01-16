// Solution #1
var sum_to_n_a = function(n) {
    var sum = 0;
    for(let i = 1 ; i <= n; i++) {
        sum += i;
    }
    return sum;
};

// Solution #2
var sum_to_n_b = function(n) {
    if (n <= 0) {
        return 0; 
    }
    return n + sum_to_n_b(n - 1); 
};

// Solution #3
var sum_to_n_c = function(n) {
   return (n * (n + 1)) / 2;
};


// =============== Test area =============== //
// -------- Random a number for test ------ //
const min = 1
const max = 100
var number = Math.floor(Math.random() * (max - min + 1)) + min 
console.log("Random number: ", number)

// =============== Test Result =============== //
console.log(`Solution #1: summation to ${number}: `, sum_to_n_a(number))
console.log(`Solution #2: summation to ${number}: `, sum_to_n_b(number))
console.log(`Solution #3: summation to ${number}: `, sum_to_n_c(number))