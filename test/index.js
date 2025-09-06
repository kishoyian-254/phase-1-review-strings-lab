//Define current user
const currentUser = 'Grace Hopper'

//welcome message with interpolation and exclamation mark
const welcomeMessage = 'Welcome to Flatiron , ${currentUser}!';

//uppercase welcome message
const excitedWelcomeMessage = welcomeMessage.toUpperCase();

//short greeting using only the first initial of current user
const shortGreeting = 'Welcome, ${currentUser.slice(0, 1)}!';

