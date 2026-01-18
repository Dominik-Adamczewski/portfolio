export function getRandomTicketId(length) {
    const randomId = [];
    for(let i = 0; i < length; i++) {
      const randomDigit = Math.floor(Math.random() * 10);
      randomId.push(randomDigit);
    }
    return `#${randomId.join('')}`;
}