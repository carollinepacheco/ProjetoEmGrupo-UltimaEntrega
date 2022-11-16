import React, { useEffect, useState } from 'react'
import DoacaoService from '../../services/DoacaoService';
import ProjetoService from '../../services/ProjetoService';

function Main() {

    const [doacao, setDoacao] = useState([]);
    const [projetos, setProjetos] = useState([]);

    
    useEffect (() => {
        getAllProjetos();
        getAllDoacao();
    }, [])


    const getAllProjetos = () => {
        ProjetoService.getAllProjeto().then((response) => {
            setProjetos(response.data)
            console.log(response.data);

        }).catch(error => {
            console.log(error);
        })
    }


    const getAllDoacao = () => {
        DoacaoService.getAllDoacao().then((response) => {
            setDoacao(response.data)
            console.log(response.data);

        }).catch(error => {
            console.log(error);
        })
    }

    const deleteDoacao = (doacaoId) => {
        DoacaoService.deleteDoacao(doacaoId).then((response) => {
            getAllDoacao();

        }).catch(error => {
            console.log(error);
        })
    }

    return (
        <div>
            <main id='main'>
                <div className='jumbotron card card-image jumbotron-img'>
                    <div className='text-white text-center py-5 px-4'>
                        <div>
                            <h2 className='card-title h1-responsive pt-3 mb-5 font-bold'><strong>Doreá</strong></h2>
                            <p className='mx-5 mb-5'>Projeto voltado para arrecadação e doação de fundos para ONGS de Educação!
                            </p>
                            <a className='btn btn-dark btn-rounded btn-md' id='btnLeiaMais' href='/Sobre' role='button'><i className='bi bi-collection-fill'></i>Leia mais</a>
                        </div>
                    </div>
                </div>

                <div className='jumbotron card' id='jumbotron-card'>
                    <svg id='svgOndas'
                        data-name="Layer 1"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1200 120"
                        preserveAspectRatio="none"
                        style={{
                            opacity: '0.83',
                            width: '100%',
                            height: '130px',
                            fill: '#62c6df',
                            transform: 'rotateY(180deg)'
                        }}>
                        <path d='M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z'></path>
                    </svg>
                    <div className='text-white text-center py-5 px-4 pt-0'>
                        <h3>NOSSOS PROJETOS</h3>
                        <h2>Venha conhecer</h2>
                    </div>
                </div>

                <div class='container-fluid mb-3' id='cards-doacao'>
                    <div class='row gx-3 justify-content-center'>        
                    {
                    projetos.map(
                        (projeto) =>
                            <div class='col-lg-3 col-md-6 pt-3' key={projeto.id}>
                                <div class='card'>
                                    <img src={projeto.img} height='200px' class='card-img-top' alt='computadores' />
                                    <div class='card-body'>
                                        <h5 class='card-title'>{projeto.nome}</h5>
                                        <p class='card-text'>
                                            Valor necessário: R$ ${projeto.objetivo}
                                        </p>
                                        <div className='card-footer d-grid'>
                                            <a href='/add-doacao' className='btn btn-primary'>Doar</a>
                                        </div>
                                        <div className='progress'>
                                            <div className='progress-bar progress-bar-striped bg-success' role='progressbar' style={{ width: '25%' }} aria-valuenow='25' aria-valuemin='0' aria-valuemax='100'>25%</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                    </div>
                </div>

            </main >
        </div >
    )
}

export default Main;