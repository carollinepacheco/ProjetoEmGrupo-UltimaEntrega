import React from 'react'

const Footer = () => {
    return (
        <div>
            <footer className='bg-light text-center' id='footer-primary'>
                <div className='container p-4 pb-0'>
                    <section className=''>
                        <form action=''>
                            <div className='row d-flex justify-content-center'>
                                <div className='col-auto'>
                                    <p className='pt-2'>
                                        <strong>Subscreva a nossa newsletter</strong>
                                    </p>
                                </div>
                                <div className='col-md-5 col-12'>
                                    <div className='form-outline mb-4'>
                                        <input type='email' id='form5Example27' className='form-control' placeholder='Email' />
                                        <label className='form-label' for='form5Example27'></label>
                                    </div>
                                </div>
                                <div className='col-auto'>
                                    <button type='submit' className='btn btn-primary mb-4'>
                                        Inscreva-se
                                    </button>
                                </div>
                            </div>
                        </form>
                    </section>
                </div>
                <div className='text-center p-3' id='footer-secondy'>
                    © 2022 Copyright:
                    <a className='text-dark' href='/'>Dorea.com</a>
                </div>
            </footer>
        </div>
    )
}

export default Footer;