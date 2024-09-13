const add = function(x,y) {
	return x + y
};

const subtract = function(x,y) {
	return x-y
};

const sum = function(numArray) {
	return numArray.reduce((acm,current) => {
    return acm+current;
  },0)
};

const multiply = function(numArray) {
	return numArray.reduce((acm,current) => {
    return acm*current;
  },1)
};

const power = function(x,y) {
	return x**y
};

const factorial = function(x) {
  let ans = 1;

	for (let i = x; i > 0; i--){
    ans *= i;
  }
  return ans
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
