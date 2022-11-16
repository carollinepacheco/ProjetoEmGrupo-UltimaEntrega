import React, { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom";
import DoacaoService from "../services/DoacaoService";
import ProjetoService from "../services/ProjetoService";

const AddDoacaoComponent = () => {

    const [valor, setValor] = useState('');
    const [projeto, setProjeto] = useState({ id: 0, nome: '' });
    const [projetos, setProjetos] = useState([])
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        ProjetoService.getAllProjeto()
            .then((response) => {
                setProjetos(response.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])

    useEffect(() => {

        DoacaoService.getDoacaoById(id).then((response) => {
            setValor(response.data.valor)
            setProjeto({
                id: response.data.projeto.id,
                nome: response.data.projeto.nome,
            })
        }).catch(error => {
            console.log(error);
        })
    }, [id])


    const saveOrUpdateDoacao = (e) => {
        e.preventDefault();

        const doacao = { id, valor, projeto }

        if (id) {
            DoacaoService.updateDoacao(id, doacao).then((response) => {
                navigate('/doacao')

            }).catch(error => {
                console.log(error)
            })
        } else {
            DoacaoService.createDoacao(doacao).then((response) => {
                console.log(response.data)
                navigate('/doacao');

            }).catch(error => {
                console.log(error)
            })
        }
    }


    const title = () => {

        if (id) {
            return <h2 className="text-center">Editar Doacao</h2>
        } else {
            return <h2 className="text-center">Cadastrar Doacao</h2>
        }
    }


    return (
        <div>
            <br />
            <br />
            <div className="container">
                <div className="row">
                    <div className="card col-md-5 offset-md-3 offset-md-3 mt-3 mb-5 pt-5">
                        {
                            title()
                        }
                        <div className="card-body">
                            <form >
                                <div className="form-group mb-4 pt-2">
                                    <label className="form-label"> Valor: </label>
                                    <input className="form-control"
                                        type="text"
                                        name="valor"
                                        value={valor}
                                        onChange={(e) => setValor(e.target.value)}>
                                    </input>
                                </div>
                                <div className="form-group mb-4">
                                    <div className="align">
                                        <select
                                            id="JogoId_jogo"
                                            name="JogoId_jogo"
                                            className="form-select s"
                                            onChange={(e) =>
                                                setProjeto({
                                                    id: Number.parseInt(e.target.value),
                                                    nome: e.target.value,
                                                })
                                            }
                                        >
                                            <option value="DEFAULT">
                                                {id ? projeto.nome : 'Escolha um projeto'}
                                            </option>
                                            {projetos.map((projeto) => (
                                                <option key={projeto.id} value={projeto.id}>
                                                    {projeto.nome}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                                <button style={{margin:'10px'}} className="btn btn-success" onClick={(e) => saveOrUpdateDoacao(e)}> Cadastrar </button>
                                <Link to="/doacao" className="btn btn-danger cancel"> Cancelar </Link>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddDoacaoComponent;