export default async function handler(req, res) {
  const { uid, id, token } = req.query;

  if (!uid || !id || !token) {
    return res.status(400).json({ error: 'Missing uid, id, or token parameter' });
  }

  const response = await fetch(`https://storebix.serv00.net/ff-info?uid=${uid}&id=${id}&token=${token}`);
  const data = await response.json();

  const { img_url, region, nickname } = data;

  res.status(200).json({ img_url, region, nickname });
}
