export async function getPlaylist (user_id) {
  return  fetch(`http://127.0.0.1:3333/api/v1/playlists/${user_id}}`).then(response => response.json())
}
export async function getDataInPlaylist (playlist_id) {
  return  fetch(`http://127.0.0.1:3333/api/v1/playlistsIn/${playlist_id}`).then(response => response.json())
}
export async function storePlaylist(data) {
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({  
      id_song : data,
      name : data,
      user_id : data
    })
  }
  return fetch('http://127.0.0.1:3333/api/v1/playlists', requestOptions).then(response => response.json())
}
export async function updatePlaylist(data,playlist_id) {
  const requestOptions = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({  
      id_song : data
    })
  }
  return fetch(`http://127.0.0.1:3333/api/v1/playlists/${playlist_id}`, requestOptions).then(response => response.json())
}