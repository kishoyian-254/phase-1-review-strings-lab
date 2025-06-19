const currentUser ='Grace H0pper';
const welcomeMessage = `Welcome to Flatbook, ${currentUser}!`;
const excitedWelcomeMessage = welcomeMessage.toUpperCase();
const shortGreeting = `Welcome, ${currentUser.slice(0, 1)}! ${excitedWelcomeMessage}`;

console.log(currentUser);
console.log(welcomeMessage);
console.log(excitedWelcomeMessage);
console.log(shortGreeting);
