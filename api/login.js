export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: 'Missing email or password' });
    }

    // Do something with data, e.g. log or save (for testing)
    console.log('Received login:', email, password);

    // Respond success
    return res.status(200).json({ message: 'Login data received' });
  } catch (error) {
    console.error('Error in /api/login:', error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
}
