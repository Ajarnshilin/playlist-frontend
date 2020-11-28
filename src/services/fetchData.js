import axios from 'axios'

const API_ENDPOINT = 'http://localhost:3333'
const API_VER = 'api/v1'
const JSON_HEADER = { 'Content-Type': 'application/json' }

export async function getData (table) {
  return axios(
    {
      method: 'GET',
      url: `${API_ENDPOINT}/${API_VER}/${table}`
    }
  ).then(response => response.data.data)
}
export async function Login (userEmail, userPassword, tokenAPI) {
  return await axios(
    {
      method: 'POST',
      url: `${API_ENDPOINT}/${API_VER}/login`,
      headers: { ...JSON_HEADER, Authorization: `Bearer ${tokenAPI}` },
      data: JSON.stringify({
        email: userEmail,
        password: userPassword
      })
    }
  ).then(response => response)
}