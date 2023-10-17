import { CLIENT_ID, CLIENT_SECRET } from '@/src/utils/spotify';

export function SpotifyGetToken() {
  const authParams = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: `grant_type=client_credentials&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`,
  };
  fetch('https://accounts.spotify.com/api/token', authParams)
    .then((response) => response.json())
    .then((data) => {
      localStorage.setItem('token', data.access_token);
    });
}

export async function SearchSong(token: string, musicGenre: string) {
  const searchParams = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  };

   return await fetch(
     `https://api.spotify.com/v1/search?q=genre%3A${musicGenre}&type=track&limit=50`,
     searchParams
   );
}
