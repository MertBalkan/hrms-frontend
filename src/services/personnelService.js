import axios from "axios"

export default class PersonnelService{
    getPersonnels(){
        return axios.get("http://localhost:8080/api/personnels/getall");
    }
}