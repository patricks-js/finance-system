export const formatValues = (value: number) => {
  const valueTransform = value.toString();

  const lastValues = formatLastValues(valueTransform);

  const restValues = getRest(valueTransform);

  const formattedBudget = `${restValues},${lastValues}`;

  return `${formattedBudget}`;
};

const formatLastValues = (value: string): string => {
  if (!value.includes(".")) {
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

const getRest = (value: string) => {
  const rest = [];
  if (value.includes(".")) {
    for (let i = 0; i < value.length; i++) {
      if (value[i] === ".") {
        rest.push(value.slice(0, i));
      }
    }
  } else {
    rest.push(value);
  }

  const toFormat = rest
    .join("")
    .split("")
    .reverse()
    .filter(value => value !== "-");

  const formattedValue = chunk(toFormat);

  return formattedValue.join("");
};

const chunk = (arr: string[]) => {
  const chunks = [];
  const formateValues = [];

  let i = 0;
  const n = arr.length;

  while (i < n) {
    chunks.push(arr.slice(i, (i += 3)));
  }

  chunks.reverse();

  for (let i = 0; i < chunks.length; i++) {
    if (chunks[i] === chunks[chunks.length - 1]) {
      formateValues.push(chunks[i].reverse().join(""));
    } else {
      formateValues.push(`${chunks[i].reverse().join("")}.`);
    }
  }

  return formateValues;
};
