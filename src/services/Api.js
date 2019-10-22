import axios from 'axios'

/* http://localhost:8081 */

export default() => {
  console.log('im doin this');
  return axios.create({
    baseURL: 'https://nameless-gorge-51604.herokuapp.com/'
  })
}
