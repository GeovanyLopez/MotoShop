import React from 'react'

const Header = () => {
  return (
    <div>
        <nav className='navbar row'>
            <div className='col-12 col-md-3'>
                <div className='navbar-brand'>
                    <img src='./images/logo.png' alt='logo MottoShop'></img>
                </div>
            </div>

            <div className='col-12 col-md-5 mt-2 mt-md-0'>
                <div>
                    <input 
                        type='text' 
                        id="search-field" 
                        class='form-control' 
                        placeholder='Que producto busca?'>

                    </input>
                    <div className='input-group-append'>
                        <button id='search-btn' className='btn'>
                            <i className='fa fa-search-plus fa-2x text-white' aria-hidden='true'></i>
                        </button>
                    </div>
                </div>
            </div>
            <div className='col-12 col-md-3 mt-4 mt-md-0 text-center'>
                <button className='btn btn-warning' id='login-btn'>Iniciar Sesion</button>
                <i className='fa fa-shopping-cart fa-2x text-white' aria-hidden='true'></i>
                <span className='ml-1' id='cart_count'>2</span>
            </div>
        </nav>
    </div>
  )
}

export default Header