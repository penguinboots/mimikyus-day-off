function accuracyCheck(chance) {
   const randomNum = Math.random() * 100;
   return randomNum <= chance;
 }

module.exports = { accuracyCheck }