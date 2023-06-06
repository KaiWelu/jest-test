export function randomLottoTicket() {
  const outputArray = [];

  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
  }

  function uniqueNumber() {
    const newNumber = getRandomIntInclusive(1, 49);
    if (outputArray.includes(newNumber)) {
      uniqueNumber();
    } else {
      return newNumber;
    }
  }

  for (let i = 0; i < 6; i++) {
    outputArray.push(uniqueNumber());
  }
  return outputArray;
}
