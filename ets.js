
//1. For evenNumbers

function getEvenNumbers() {
   let arr = [4,5,7,8,14,45,76];
  
   let evens = arr.filter(number => number % 2 == 0);
   document.write(evens);
}
getEvenNumbers();