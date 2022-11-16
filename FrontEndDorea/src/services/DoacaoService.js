import axios from "axios";

const DOACAO_BASE_API_URL = "https://localhost:7252/api/doacoes"

class DoacaoService{

    getAllDoacao() {
        return axios.get(DOACAO_BASE_API_URL);
    }

    createDoacao(doacao){
        return axios.post(DOACAO_BASE_API_URL, doacao)
    } 

    getDoacaoById(doacaoId){
        return axios.get(DOACAO_BASE_API_URL + '/' + doacaoId);
    }
    updateDoacao(doacaoId, doacao) {
        return axios.put(DOACAO_BASE_API_URL + '/' + doacaoId, doacao);
    }

    deleteDoacao(doacaoId){
        return axios.delete(DOACAO_BASE_API_URL + '/' + doacaoId);
    }

}

export default new DoacaoService();