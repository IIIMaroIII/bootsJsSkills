const words1 = ['apple', 'banana', 'kiwi', 'grapefruit', ''];
const words2 = ['cat', 'dog', 'elephant', 'antelope', ''];
const words3 = ['orange', 'pear', 'peach', 'melon', ''];
const words4 = ['blue', 'green', 'purple', 'black', ''];

// const words2 = ['cat', 'dog', 'elephant', 'antelope', ''];
// const words3 = ['orange', 'pear', 'peach', 'melon', ''];
// const words4 = ['blue', 'green', 'purple', 'black', ''];
// const words5 = ['strawberry', 'blueberry', 'grape', 'raspberry', ''];

const filter = (arr, callback) => {
  let output = [];

  for (let i = 0; i <= arr.length - 1; i++) {
    console.log('callback', callback(arr[i]));
    if (callback(arr[i])) output.push(arr[i]);
  }

  return output;
};

const filterInstructions = (str) => {
  const atLeastThree = str.length >= 5;
  const includeA = str.includes('a');

  if (str.toLowerCase() !== '' && atLeastThree && includeA) {
    return true;
  }
  return false;
};

const result1 = filter(words1, filterInstructions);
const result2 = filter(words2, filterInstructions);
const result3 = filter(words3, filterInstructions);
const result4 = filter(words4, filterInstructions);
console.log('result1', result1);
console.log('result2', result2);
console.log('result3', result3);
console.log('result4', result4);
