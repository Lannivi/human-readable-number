module.exports = function toReadable (number) {
  const ones = ['', 'one','two','three','four','five','six','seven','eight','nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

  const tens =  ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

 if (number === 0) {
    return 'zero';
  } 
  
  if (number > 0 && number < 20) {
    return ones[number];
  } 

  let str = number.toString().split('');
  
  if (number > 19 && number < 100) {
    return (tens[str[0]] + ' ' + ones[str[1]]).trim();
  }
  
  if (number > 99) {
    if (str[1] == '0' && str[2] == '0') {
      return (ones[str[0]] + ' hundred ').trim();
    } else
      return (ones[str[0]] + ' hundred ' + toReadable(Number(str[1] + str[2]))).trim();
  }
}

      
  