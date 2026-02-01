export default function handler(req, res) {
  if (req.method === 'POST') {
    const { username, timestamp } = req.body;
    
    // In a real app, you'd save this to a database here.
    // For now, we will log it to the Vercel console.
    console.log(`New User: ${username} joined at ${timestamp}`);

    return res.status(200).json({ message: "Data received on the backend!" });
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
