import React from 'react'

const Header = () => {
  return (
    <div>
        <nav className='navbar row'>
            <div className='col-12 col-md-3'>
                <div className='navbar-brand'>
                    <img src='./images/logoPet.png' alt='logo MottoShop'></img>
                </div>
            </div>

            <div className='col-12 col-md-6 mt-2 mt-md-0'>
                <div>
                    <input 
                        type='text' 
                        id="search-field" 
                        class='form-control' 
                        placeholder='Que producto busca'>

                    </input>
                    <div className='input-group-append'>
                        <button id='search-btn' className='btn'>
                            <i className='fa fa fa' aria-hidden='true'></i>
                        </button>
                    </div>
                </div>
            </div>
            <div className='col-12 col-md-3 mt-4 mt-md-0 text-center'>
                <button className='btn-´rimary' id='login-btn'>Iniciar Sesion</button>
                <span id='cart' className='ml-3'>Carrito</span>
                <span className='ml-1' id='cart_count'>2</span>
            </div>
        </nav>
    </div>
  )
}

export default Header