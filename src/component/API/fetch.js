import axios from "axios";
  export default class PostService {
    static async getAll() {
      try {
        const response = await axios.get(
          "https://667446ce75872d0e0a95d563.mockapi.io/Films"
        );
        return response.data;
      } catch (e) {
        console.log(e);
      }
    }
  }