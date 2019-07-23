import axios from "axios"

export default {
  getAll() {
    return axios.get("/api/texts").then(res => res.data)
  },

  create(title, text){
    const params = {
      title,
      text
    }

    if(title && text)
      return axios.post("/api/texts", params).then(res => res.data)
    else 
      return Promise.reject(new Error('Must have a title and a text.'))
  }
}