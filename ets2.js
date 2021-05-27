function maxConsectiveOnesCount (binary) {
   return binary
               .split('0')
               .reduce((a, b) => a.length > b.length ? a : b)
               .length;
 }