import axios from "axios";

const USER_REST_API_URL = 'http://192.168.195.71:8082/api/users';


class UserService {

    getUsers(){
       return axios.get(USER_REST_API_URL);
    }
}

export default new UserService();
