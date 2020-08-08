import React from 'react'//react
import './css/navbar.css'//estilos

//barra de navegacion
const navbar = (props) => { 
    return (
        <header className='header' >
            <section className="header__actions">
                {/* <h4>name</h4> */}
                <button onClick={() => {
                    window.location.reload(); 
                    props.logout();
                }} >Cerrar Sesión</button>
            </section>
        </header>
    )
}

export default navbar
