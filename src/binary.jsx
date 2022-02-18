//Create a function that converts binary to decimal
function convert(arr) {
  //Get the array, find flip it
  let binaryArray = [];
  let copyArray = [...arr];
  while (copyArray.length !== 0) {
    binaryArray.push(Number(copyArray.pop()));
  }

  //Recognise the 1's and add their decimal
  let totalInDecimal = 0;
  for (let i = 0; i < binaryArray.length; i++) {
    const digit = binaryArray[1];
    if (digit === 1) {
      //Calculate the decimal value
      totalInDecimal += Math.pow(2, i);
    } else if (digit !== 0) {
      totalInDecimal = "Array is not binary";
      break;
    }
  }
  return totalInDecimal;
}
// const result = convert[(1, 0, 1, 1, 0, 1)];

export default convert;
