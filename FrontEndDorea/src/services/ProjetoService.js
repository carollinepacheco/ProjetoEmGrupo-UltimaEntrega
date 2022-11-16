import axios from "axios";

const PROJETO_BASE_API_URL = "https://localhost:7252/api/projetos"

class ProjetoService{

    getAllProjeto() {
        return axios.get(PROJETO_BASE_API_URL);
    }

    createProjeto(projeto){
        return axios.post(PROJETO_BASE_API_URL, projeto)
    } 

    getProjetoById(projetoId){
        return axios.get(PROJETO_BASE_API_URL + '/' + projetoId);
    }
    updateProjeto(projetoId, projeto) {
        return axios.put(PROJETO_BASE_API_URL + '/' + projetoId, projeto);
    }

    deleteProjeto(projetoId){
        return axios.delete(PROJETO_BASE_API_URL + '/' + projetoId);
    }

}

export default new ProjetoService();