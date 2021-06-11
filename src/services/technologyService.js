import axios from "axios"

export default class TechnologyService{
    getTechnologies(){
        return axios.get("http://localhost:8080/api/technologies");
    }
}