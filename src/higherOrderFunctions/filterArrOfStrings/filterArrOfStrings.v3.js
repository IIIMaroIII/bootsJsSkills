const words1 = ['2pple', 'banana', 'kiwi', 'grapefruit', ''];

const params = {
  length: 5,
  includeSymbol: 'a',
  notNumber: true,
  startsWithSymbol: 'b',
  empty: false,
};

const filterComplex = (arr, callbacks, params) => {
  let included = [];
  let errors = {};

  for (let i = 0; i <= arr.length - 1; i++) {
    const value = arr[i];
    let uniqueStr = included.includes(value);

    for (let a = 0; a <= callbacks.length - 1; a++) {
      let checkedValue = callbacks[a](value, params);

      if (typeof checkedValue === 'object') {
        if (!errors[value]) {
          errors[value] = [];
        }
        errors[value].push(checkedValue[value]);
      }
    }

    if (!uniqueStr && !errors[value]) {
      included.push(value);
    }
  }

  return { included, errors };
};

const lengthOfStr = (str, params) => {
  const l = params.length || 5;
  if (str.length >= l) {
    return true;
  }
  return {
    [str]: `The length of the ${str} must be more than ${l}`,
  };
};

const includesSmth = (str, params) => {
  if (str.includes(params.includeSymbol)) {
    return true;
  }
  return {
    [str]: `The string ${str} must includes the symbol ${params.includeSymbol}`,
  };
};

const includeNum = (str) => {
  const arr = str.split('');
  let numbersFound = '';

  for (let i = 0; i <= arr.length - 1; i++) {
    if (!isNaN(arr[i])) {
      numbersFound += arr[i].toString();
    }
  }

  const msg = `The ${str} inludes these numbers '${numbersFound
    .split('')
    .join(',')}'. It must not include any numbers`;

  if (numbersFound !== '') {
    return { [str]: msg };
  }
  return true;
};

const strStartsWith = (str, params) => {
  if (str.startsWith(params.startsWithSymbol)) {
    return true;
  }
  return {
    [str]: `The ${str} does not start from ${params.startsWithSymbol}`,
  };
};

const notEmpty = (str) => {
  if (str.trim() !== '') return true;
  return {
    [str]: `The string is empty`,
  };
};

const functions = [
  lengthOfStr,
  includesSmth,
  includeNum,
  strStartsWith,
  notEmpty,
];

const result1 = filterComplex(words1, functions, params);
console.log('result1', result1);
