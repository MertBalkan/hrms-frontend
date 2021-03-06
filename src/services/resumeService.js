import axios from "axios"

export default class ResumeService{
    getResumes(){
        return axios.get("http://localhost:8080/api/resumes/getAll");
    }
    getResumeByCandidateId(id){
        return axios.get("http://localhost:8080/api/resumes/getByCandidateCandidateId?candidateId="+id);
    }
}