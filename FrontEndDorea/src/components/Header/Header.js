import React from 'react'

const Header = () => {
    
    return (
        <div>
            <header id='header'>
                <nav className='navbar navbar-expand-lg'>
                    <div className='container-fluid'>
                        <a className='navbar-brand' href='/'>DOREÁ</a>
                        <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarContent' aria-controls='navbarContent' aria-expanded='false' aria-label='Toggle navigation' >
                            <span className='navbar-toggler-icon'></span>
                        </button>
                        <div className='collapse navbar-collapse' id='navbarContent'>
                            <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
                                <li className='nav-item'>
                                    <a className='nav-link active' aria-current='page' href='/'>Home</a>
                                </li>
                                <li className='nav-item'>
                                    <a className='nav-link' href='/Sobre'>Sobre</a>
                                </li>
                                <li className='nav-item dropdown'>
                                    <a className='nav-link dropdown-toggle' href='#' role='button' data-bs-toggle='dropdown' aria-expanded='false'>
                                        Projetos
                                    </a>
                                    <ul className='dropdown-menu'>
                                        <li><a className='dropdown-item' href='#'>Recentes</a></li>
                                        <li><a className='dropdown-item' href='#'>Como Fazer</a></li>
                                        <li><hr className='dropdown-divider' /></li>
                                        <li><a className='dropdown-item' href='/Parceiros'>Parceiros</a></li>
                                    </ul>
                                </li>
                                <li className='nav-item'>
                                    <a className='nav-link' href='/Contato'>Contato</a>
                                </li>
                            </ul>
                            <form className='d-flex'>
                                <button className='btn btn-outline-primary mx-2' type='submit'>Entrar</button>
                                <button className='btn btn-primary' type='submit'>Cadastre-se</button>
                            </form>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default Header;
