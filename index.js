/**
 * @param {string} word - The word to repeat.
 * @param {number} n - The number of times to repeat the word.
 * @returns {string} The word repeated n times.
 *
 * @example
 * echo("bird", 3); // "birdbirdbird"
 * @example
 * echo("a", 5); // "aaaaa"
 * @example
 * echo("test", 1); // "test"
 */
export function echo(word, n) {
/* I needed to have a result value initialized. i is the counter - n is the number of times it needs to count. += means add to the variable. so result =+ word means I am adding word + word until the loop finishes. The result needs to return outside of the function in order to be correctly executed.
*/
  let result = "";
for (let i = 0; i < n; i++) {
  result += word;
}
return result;
console.log(result)
}
// function number 2
/**
 * @param {string} word - The word to repeat.
 * @param {number} n - The number of times to repeat the word.
 * @returns {string} The word repeated n times, separated by spaces.
 *
 * @example
 * echoWithSpace("badger", 3); // "badger badger badger"
 * @example
 * echoWithSpace("a", 2); // "a a"
 * @example
 * echoWithSpace("test", 1); // "test"
 */

export function echoWithSpace(word, n) {
/* this one very nearly broke me. idk why but loops are hard with looking at numbers. it is really intimidating. But here is what I learned. i is a universal sign for iteration. when addiung spaces it cant be added to first one otherwise we have a trail. so it passes an empty string as the word. The check says if word is empty - dont loop just return empty. I then said if the counter is zero do result + word (variable) then added the space
*/

    let result = "";
      if (word === "") {
      return "";
    }
  for (let i = 0; i < n; i++) {
    if (i === 0) {
      result += word;
    } else {
      result += " " + word;
    }
  }
return result;
}


// function 3


/**
 * @param {number} n - The number to stop at
 * @returns {number} The sum of all integers from 1 to n, inclusive.
 *
 * @example
 * sumTo(5); // 15
 * @example
 * sumTo(1); // 1
 * @example
 * sumTo(100); // 5050
 */
export function sumTo(n) {
/*i is my counter name starting at 0. it will keep looping as long as it is less than N - the number passed to the parameter. After each loop it adds 1 to the iterator until it reaches the number
*/
let result = 0;
      if (n === 0) {
//retuning 0 if 0 is entered
      return 0;
    }
  for (let i = 0; i <= n; i++) {
// i is the numbers it iterates on its own so we are adding it to n each time it loops through. god this is hard
    result += i;
  }
return result;
}

//function 4

/**
 * @param {number} a - The starting integer.
 * @param {number} z - The ending integer.
 * @returns {number} The sum of all integers from a to z, inclusive.
 *
 * @example
 * sumFromTo(1, 3); // 6
 * @example
 * sumFromTo(5, 7); // 18
 * @example
 * sumFromTo(2, 2); // 2
 */
export function sumFromTo(a, z) {
let result = 0;
      if (a === 0) {
//retuning 0 if 0 is entered
      return 0;
    }
/* return 0 if 0 entered and then I said let my initial iterator = a and while it is less than or equal to z - add and return that result. I finally got one without a lot of help and yes I cried.
*/
  for (let i = a; i <= z; i++) {
// i is the numbers it iterates on its own so we are adding it to n each time it loops through. god this is hard
    result += i;
  }
    return result;
  }

//Function 5

/**
 * Counts down from n to 1, inclusive, by logging each number to the console.
 * @param {number} n - The number to start counting down from.
 *
 * @example
 * countdown(3); // logs 3, 2, 1
 * @example
 * countdown(1); // logs 1
 * @example
 * countdown(5); // logs 5, 4, 3, 2, 1
 */
export function countdown(n) {
      if (n === 0) {
//retuning 0 if 0 is entered
      return 0;
    }
/* return 0 if 0 entered and then I said let my initial iterator = a and while it is less than or equal to z - add and return that result.
*/
  for (let i = n; i > 0; i--) {
// my iteration becomes the countdown because I am subtracting from n on each loop.
    console.log(i)
  }
  }




//function 6

/**
 * @param {number} n - The ending number.
 * @returns {number} The sum of all odd numbers from 1 to n, inclusive.
 *
 * @example
 * sumOddsToN(5); // 9
 * @example
 * sumOddsToN(10); // 25
 * @example
 * sumOddsToN(1); // 1
 */
export function sumOddsToN(n) {
/*i is my counter name starting at 0. it will keep looping as long as it is less than N - the number passed to the parameter. After each loop it adds 1 to the iterator until it reaches the number
*/
let result = 0;
      if (n === 0) {
//retuning 0 if 0 is entered
      return 0;
    }
  for (let i = 1; i <= n; i += 2) {
// for odd numbers need to start at 1, to include n add less than or equal to. Then += 2 ito increment by 2 to get my odd numbers
    result += i;
  }
  return result;
}

// function 7



/**
 * A petri dish starts with a certain number of bacteria cells.
 * That number doubles every 20 minutes.
 *
 * @param {number} start - The starting number of bacteria cells.
 * @param {number} target - The target number of bacteria cells.
 * @returns {number} The number of minutes required to reach the target size.
 * @returns {undefined} Undefined if the starting number is <= 0
 *
 * @example
 * getGrowthTime(1, 8); // 60
 * @example
 * getGrowthTime(2, 78); // 120
 * @example
 * getGrowthTime(5, 78); // 80
 */
export function getGrowthTime(start, target) {
let result = 0;
      if (start <= 0) {
//retuning 0 if 0 is entered
      return undefined;
    }
/* return undefined
*/
  for (let i = start; i <= target; i *= 2) {
// starting then while less than or equal
    result += 1;
  }
    result *= 20
    return result;
}

//function 8


/**
 * The amount of money in a savings account grows by a certain rate every year.
 *
 * @param {number} start - The starting amount.
 * @param {number} rate - The growth rate per year (as a decimal, e.g. .05 = 5%)
 * @param {number} target - The target amount.
 * @returns {number} The number of years required to reach the target amount.
 * @returns {undefined} Undefined if start or rate <= 0
 *
 * @example
 * getCompoundTime(100, 0.1, 200); // 8
 * @example
 * getCompoundTime(2000, 0.05, 5000); // 19
 * @example
 * getCompoundTime(30000, 0.04, 50000); // 14
 */
export function getCompoundTime(start, rate, target) {
//return undefined if start or rate is less than or equal to 0
  let result = 0;
      if (start <= 0 || rate <= 0) {
      return undefined;
    } else if (start >= target) {
//retuning 0 if 0 is entered
      return 0;
    }
/* return undefined
*/
  for (let i = start; i <= target; i *= (1 + rate)) {
// iteration is whatever is enteres as the start - greater eual to target - iterate the rate per year - result gives us the target years to gain interest
    result += 1;
  }
    return result;
}



//function 9

/**
 * An empty bucket sits some distance away from a water faucet.
 * You need to fill the bucket with water, but your only container
 * is a leaky colander. Each time you fill the colander and run to the bucket,
 * the colander loses more and more water due to the leakage.
 *
 * Each trip, the colander can carry one less cup of water than the previous trip.
 * The colander can always carry at least one cup of water per trip.
 *
 * @param {number} colander - The initial cups of water the colander can carry.
 * @param {number} bucket - The cups of water needed to fill the bucket.
 * @returns {number} - The number of trips required to fill the bucket.
 *
 * @example
 * moveWater(5, 18); // 8
 * // 5 + 4 + 3 + 2 + 1 + 1 + 1 + 1 >= 18 | 8 trips
 * @example
 * moveWater(5, 11); // 3
 * // 5 + 4 + 3 >= 11 | 3 trips
 * @example
 * moveWater(7, 3); // 1
 */

export function moveWater(colander, bucket) {
  let result = 0;
// return undefined if 0 or less than
  if (colander <= 0) {
  return undefined
  }
  while (bucket > 0) {
// add 1 cup to bucket
  result += 1;
// bucket - colander - colander loses a cup while it is greater than 1
  bucket -= colander;
  if (colander > 1) {
    colander -= 1;
  }
}
    return result
}



// function 10

/**
 * This is a classic interview question! :)
 * Log numbers from 1 to n to the console.
 *  - Multiples of 3 are replaced with "fizz"
 *  - Multiples of 5 are replaced with "buzz"
 *  - Multiples of both 3 and 5 are replaced with "fizzbuzz"
 *
 * @param {number} n - The ending number.
 *
 * @example
 * fizzbuzz(6); // logs 1, 2, fizz, 4, buzz, fizz
 * @example
 * fizzbuzz(3); // logs 1, 2, fizz
 * @example
 * fizzbuzz(15); // logs 1, 2, fizz, 4, buzz, fizz, 7, 8, fizz, buzz, 11, fizz, 13, 14, fizzbuzz
 */
export function fizzbuzz(n) {
let result = 0;
      if (n === 0) {
//retuning 0 if 0 is entered
      return 0;
    }
  for (let i = 1; i <= n; i ++) {
// if the number is both a multiple of 3 and 5 log fizzbuzz
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("fizzbuzz");
  } else if (i % 3 === 0 && i % 5 != 0) {
// if multiple of 3 but not of 5 log fizz
    console.log("fizz");
  } else if (i % 3 != 0 && i % 5 === 0) {
//if multiple of 5 but not 3 
    console.log("buzz");
  } else {
    console.log(i);
  }
}
}
