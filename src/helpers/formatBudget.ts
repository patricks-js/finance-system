export const formatBudget = (value: string) => {
  const lastValues = formatLastValues(value);

  const restValues = formatRestValues(value);

  const formattedBudget = `${restValues},${lastValues}`;

  return `R$ ${formattedBudget}`;
};

const formatLastValues = (value: string): string => {
  if (value.includes(".") === false) {
    return "00";
  }

  const lastValues = value.slice(-2);

  const validateLastValues = [];

  for (let i = 0; i < lastValues.length; i++) {
    if (lastValues[i] !== ".") {
      validateLastValues.push(lastValues[i]);
    }
  }

  return validateLastValues.join("").padEnd(2, "0");
};

const formatRestValues = (value: string) => {
  const valuesArr = [];
  const chunkValue = [];

  if (value.includes(".")) {
    for (let i = 0; i < value.length; i++) {
      if (value[i] === ".") {
        valuesArr.push(value.slice(0, i));
      }
    }
  } else {
    valuesArr.push(value);
  }

  const valueStr = valuesArr.join("");

  for (let i = 0; i < valueStr.length; i++) {
    chunkValue.push(valueStr[i]);
  }

  const valueReverse = chunkValue.reverse();

  const resValueFormatted = formateValue(valueReverse, 3);

  return resValueFormatted;
};

const formateValue = (arr: string[], len: number) => {
  const chunks = [];
  const formateValues = [];

  let i = 0;
  const n = arr.length;

  while (i < n) {
    chunks.push(arr.slice(i, (i += len)));
  }

  chunks.reverse();

  for (let i = 0; i < chunks.length; i++) {
    if (chunks[i] === chunks[chunks.length - 1]) {
      formateValues.push(chunks[i].reverse().join(""));
    } else {
      formateValues.push(`${chunks[i].reverse().join("")}.`);
    }
  }

  return formateValues.join("");
};
