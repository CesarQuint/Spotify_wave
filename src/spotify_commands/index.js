import axios from "axios";

export async function sendAuthRequest(clientId, clientSecret) {
  const url = "https://accounts.spotify.com/api/token";
  try {
    const response = await axios.post(
      url,
      new URLSearchParams({
        grant_type: "client_credentials",
        client_id: clientId,
        client_secret: clientSecret,
      }),
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching Spotify token:", error);
    throw error;
  }
}
