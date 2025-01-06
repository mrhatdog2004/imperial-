// Dynamic Greeting Message
function updateGreeting() {
  const greetingElement = document.getElementById('greeting');
  const hour = new Date().getHours();
  let greeting;

  if (hour < 12) {
      greeting = 'Good Morning! Experience Excellence';
  } else if (hour < 18) {
      greeting = 'Good Afternoon! Experience Excellence';
  } else {
      greeting = 'Good Evening! Experience Excellence';
  }

  greetingElement.textContent = greeting;
}

// Learn More Alert
function learnMore(product) {
  alert(`You selected ${product}. More details coming soon!`);
}

// Form Validation
function validateForm() {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  if (!name || !email || !message) {
      alert('Please fill out all fields.');
      return false;
  }

  alert('Thank you for your message!');
  return true;
}

// Initialize Greeting on Page Load
window.onload = updateGreeting;
