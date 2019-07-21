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

    return axios.post("/api/texts", params).then(res => res.data)
  }
}