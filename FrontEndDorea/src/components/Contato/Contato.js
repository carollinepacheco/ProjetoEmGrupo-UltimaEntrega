import React from "react"

function Contato() {
    return (
        <div>
            <main className="container-fluid">
                <div className="col-11 m-auto pt-5">
                    <h2 className="text-center">Contato via Whatsapp</h2>
                    <div className=" text-center">
                        <a href="">
                            <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="#06d6a0" className="bi bi-whatsapp" viewBox="0 0 16 16">
                                <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
                            </svg>
                        </a>
                    </div>
                </div>
                <br/>
                    <div className="row">
                        <div className="col-10 col-xs-12 m-auto border" style={{backgroundColor:"#CCCCCC "}}>
                            <div className="text-center form-titulo text-dark">
                                <h2>Contate-nos por E-mail</h2>
                            </div>
                            <div className="col-md-6 col-md-offset-4 col-8 m-auto">
                                <form style={{padding:"0 0 25px 0"}}>
                                    <div className="mb-3">
                                        <label for="exampleInputEmail1" className="form-label form-lab text-dark">Nome Completo</label>
                                        <input type="email" className="form-control" id="examplenome" aria-describedby="emailHelp" />
                                    </div>
                                    <div className="mb-3">
                                        <label for="exampleInputEmail1" className="form-label form-lab text-dark">E-mail</label>
                                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    </div>
                                    <div className="mb-3">
                                        <label for="exampleInputEmail1" className="form-label form-lab text-dark">Telefone</label>
                                        <input type="email" className="form-control" id="exemplotelefone" aria-describedby="emailHelp" />
                                    </div>
                                    <div className="mb-3">
                                        <label for="exampleFormControlTextarea1" className="form-label form-lab text-dark">Mensagem</label>
                                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                    </div>
                                    <button type="submit" className="btn cor-botao-contato">Enviar</button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <br />
                    <div className="row">
                        <div className="col-10 m-auto">
                            <p><strong>ENDEREÇO</strong></p>
                            <div>
                                <p>Praça Senador Salgado Filho, S/Nº, Mezanino 101 Bossa Nova Mall,<br /> Centro, Rio de Janeiro,<br /> CEP.: 20.021-340</p>
                            </div>
                        </div>
                    </div>
            </main>
        </div>
    )
}

export default Contato;