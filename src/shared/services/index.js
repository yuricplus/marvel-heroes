import axios from 'axios'

const service = axios.create({
  baseURL: 'https://gateway.marvel.com:443/v1/public',
})

service.interceptors.request.use((config) => {
  config.params = {
    apikey: 'b787ba8b138b1ec5453db7ebb6b259ed',
  }
  return config
})

function getHeroes(params) {
  return service
    .get(`/characters?orderBy=${params}`)
    .then((data) => data)
    .catch((err) => err)
}

export { getHeroes }
