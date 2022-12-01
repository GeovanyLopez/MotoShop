import React, { Fragment } from 'react'

export const Home = () => {
  return (
   <Fragment>
        <section id='productos' className='container mt-5'>
            <div className='row'>
                <div className='col-sm-12 col-md-6 col-lg-4 my-3'>
                    <div className='card p-3 rounded'>
                        <img className='card-img-top mx-auto' src='./images/img-cachorros.jpeg' alt='Nutriss cachorros'></img>
                        <div className='card-body d-flex flex-column'>
                            <h4 id='titulo_producto'><a href='https://www.wikipedia.org'>Nutriss cachorros</a></h4>
                            <div className='rating mt-auto'>
                                <div className='rating-outer'>
                                    <div className='rating-inner'></div>
                                </div>
                                <span id='No_de_opiniones'>5 reviews</span>
                                <p className='card-text'>$72.000</p>
                                <a href='https://www.wikipedia.org' id='view_btn' className='btn btn-block'>
                                    Ver detalles
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='col-sm-12 col-md-6 col-lg-4 my-3'>
                    <div className='card p-3 rounded'>
                        <img className='card-img-top mx-auto' src='./images/img-carne.jpeg' alt='Nutriss cachorros'></img>
                        <div className='card-body d-flex flex-column'>
                            <h4 id='titulo_producto'><a href='https://www.wikipedia.org'>Nutriss carne</a></h4>
                            <div className='rating mt-auto'>
                                <div className='rating-outer'>
                                    <div className='rating-inner'></div>
                                </div>
                                <span id='No_de_opiniones'>8 reviews</span>
                                <p className='card-text'>$57.000</p>
                                <a href='https://www.wikipedia.org' id='view_btn' className='btn btn-block'>
                                    Ver detalles
                                </a>
                            </div>   
                        </div>
                    </div>
                </div>

                <div className='col-sm-12 col-md-6 col-lg-4 my-3'>
                    <div className='card p-3 rounded'>
                        <img className='card-img-top mx-auto' src='./images/img-pollo.jpeg' alt='Nutriss pollo'></img>
                        <div className='card-body d-flex flex-column'>
                            <h4 id='titulo_producto'><a href='https://www.wikipedia.org'>Nutriss pollo</a></h4>
                            <div className='rating mt-auto'>
                                <div className='rating-outer'>
                                    <div className='rating-inner'></div>
                                </div>
                                <span id='No_de_opiniones'>12 reviews</span>
                                <p className='card-text'>$57.000</p>
                                <a href='https://www.wikipedia.org' id='view_btn' className='btn btn-block'>
                                    Ver detalles
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
   </Fragment>
  )
}
export default Home
