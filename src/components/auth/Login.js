import React, { useState, useContext, useEffect } from 'react';

import  TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button'
import {Link} from 'react-router-dom'
import AlertaContext from '../../context/alerts/alertContext';
import AuthContext from '../../context/auth/authContext';

const Login = (props) => {

    // extraer los valores del context
    const alertaContext = useContext(AlertaContext);
    const { alerta, mostrarAlerta } = alertaContext;

    const authContext = useContext(AuthContext);
    const { mensaje, autenticado, iniciarSesion } = authContext;

      // En caso de que el password o usuario no exista
     useEffect(() => {
        if(autenticado) {
            props.history.push('/user');
        }

        if(mensaje) {
            mostrarAlerta(mensaje.msg, mensaje.categoria);
        }
        // eslint-disable-next-line
    }, [mensaje, autenticado, props.history]);
 
    // State para iniciar sesión
    const [usuario, guardarUsuario] = useState({
        email: '',
        password: ''
    });

    // extraer de usuario
    const { email, password } = usuario;

    const onChange = e => {
        guardarUsuario({
            ...usuario,
            [e.target.name] : e.target.value
        })
    }

    // Cuando el usuario quiere iniciar sesión
    const onSubmit = e => {
        e.preventDefault();
        console.log('Ejecutando onSubmit')

       // Validar que no haya campos vacios
        if(email.trim() === '' || password.trim() === '') {
            mostrarAlerta('Todos los campos son obligatorios', 'alerta-error');
        }

        //Pasarlo al action
        iniciarSesion({ email, password });
    }



    return ( 
        <div className="form-usuario">

           

            <div className="contenedor-form sombra-dark">
                <h1>Iniciar Sesión</h1>

                <form
                     onSubmit={onSubmit}
                >
                    <div className="campo-form">
                        <TextField
                            label="E-mail"
                            //autoComplete="current-password"
                            variant="filled"
                            fullWidth
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Tu Email"
                            value={email}
                            onChange={onChange}
                        />
                        
                    </div>

                    <div className="campo-form">
                        <TextField
                            label="Password"
                            //autoComplete="current-password"
                            variant="filled"
                            fullWidth
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Tu Password"
                            value={password}
                            onChange={onChange}
                        />
                    </div>

                    <div className="campo-form">
                        <Button
                            variant="contained"
                            color="primary"
                            type='submit'
                        >
                            Iniciar sesion
                        </Button>
                       
                    </div>
                </form>

                { alerta ? ( <div className={`alerta ${alerta.categoria}`}> {alerta.msg} </div> )  : null }

                <Link 
                    to='/nueva-cuenta'
                    className='enlace-cuenta'

                > 
                    Obtener Cuenta 
                </Link>
                  
            </div>
       
        </div>
     );
}
 
export default Login;