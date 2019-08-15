import axios from 'axios'

/* http://localhost:8081 */

export default() => {
  return axios.create({
    baseURL: 'https://nameless-gorge-51604.herokuapp.com/'
  })
}
