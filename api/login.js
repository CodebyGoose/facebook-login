export default function handler(req, res) {
  if (req.method === 'POST') {
    const { email, password } = req.body;

    console.log('Email:', email);
    console.log('Password:', password);

    return res.status(200).json({ message: 'Data received' });
  }

  res.status(405).json({ message: 'Method Not Allowed' });
}
