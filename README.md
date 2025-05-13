## 🔍 FreeFire Info API

This simple Vercel-hosted API fetches and filters Free Fire user info using a UID. It acts as a proxy to `https://storebix.serv00.net/ff-info?uid=` and removes unwanted fields from the response.

## 🚀 Features

- ⚡ Simple and fast API for Free Fire UID lookups.
- ✅ Returns only essential info: `img_url`, `region`, and `nickname`.

## 📦 Requirements

- Node.js 14+
- No dependencies required

## 📡 Usage

**1. Endpoint**
Send a GET request to the deployed function:
```
GET /?uid=YOUR_UID_HERE
```

**2. Query Parameters**

| Parameter | Required | Description                    |
|-----------|----------|--------------------------------|
| `uid`     | ✅       | The Free Fire UID to look up. |

**✅ Example Request**
```
curl "https://your-vercel-deployment.vercel.app/?uid=123456789"
```

**✅ Example Response**
```json
{
  "img_url": "https://i.ibb.co/7WZRy7y/example-image.png",
  "region": "IND",
  "nickname": "EXAMPLE"
}
```

**❌ Error Response**
```json
{
  "error": "Missing uid parameter"
}
```

## 🔍 Code Explanation

- Accepts the `uid` query parameter.
- Forwards the request to the source API.
- Filters out `open_id` and `Api By` from the JSON response.
- Returns only the essential fields.

## ⚠️ Error Handling

- 🛑 400 Bad Request: If `uid` is not provided.
- 💥 500 Internal Error: If the external API fails or is unreachable.

## 📄 License

This project is licensed under the License - see the [LICENSE](https://github.com/NotFlexCoder/freefire-info-api/blob/main/LICENSE) file for details.
