export default async function handler(req, res) {
  const { uid } = req.query;

  if (!uid) {
    return res.status(400).json({ error: 'Missing uid parameter' });
  }

  const response = await fetch(`https://storebix.serv00.net/ff-info?uid=${uid}`);
  const data = await response.json();

  const { img_url, region, nickname } = data;

  res.status(200).json({ img_url, region, nickname });
}
