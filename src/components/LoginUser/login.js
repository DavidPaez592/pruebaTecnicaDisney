import React, { useState } from 'react';
import { Input, Button, Form, message } from 'antd';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate desde react-router-dom
import users from './usuarios.json';
import imagenIcono from './Disneyplus.png';
import Derechos from '../Home/Derechos'
import './style.css';

const Login = () => {
    const [formData, setFormData] = useState({
        correo: '',
        clave: '',
    });
    const [error, setError] = useState('');
    const navigate = useNavigate(); // Utiliza useNavigate en lugar de useHistory

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async () => {
        try {
            const user = users.find((u) => u.correo === formData.correo && u.clave === formData.clave);

            if (user) {
                // Autenticación exitosa
                message.success('Inicio de sesión exitoso');
                setError('');
                navigate('/header'); // Utiliza navigate en lugar de history.push
            } else {
                setError('Correo o clave incorrectos');
                message.error('Correo o clave incorrectos');
            }
        } catch (error) {
            console.error('Error al obtener datos de usuarios', error);
            setError('Error al obtener datos de usuarios');
            message.error('Error al obtener datos de usuarios');
        }
    };

    return (
        <div className="login-container">
            <div className="login-content">
                <div className="card">
                    <div className="form-container">
                        <div className="background-image">
                            <img src={imagenIcono} alt="Disneyplus" />
                        </div>
                        <h2>Iniciar Sesión</h2>
                        <Form onFinish={handleSubmit}>
                            <div className="form-item-container">
                                <label className="correo-label">Correo</label>
                                <Form.Item name="correo" rules={[{ required: true, message: 'Este campo es obligatorio' }]}>
                                    <Input
                                        style={{ width: '200%' }}
                                        type="email"
                                        name="correo"
                                        value={formData.correo}
                                        onChange={handleInputChange}
                                        className="input-field"
                                    />
                                </Form.Item>
                            </div>
                            <div className="form-item-container">
                                <label className="clave-label">Contraseña</label>
                                <Form.Item name="clave" rules={[{ required: true, message: 'Este campo es obligatorio' }]}>
                                    <Input.Password
                                        style={{ width: '182%' }}
                                        name="clave"
                                        value={formData.clave}
                                        onChange={handleInputChange}
                                        className="input-field"
                                    />
                                </Form.Item>
                            </div>
                            <Form.Item>
                                <Button type="primary" htmlType="submit" className='botonIngresar'>
                                    Ingresar
                                </Button>
                            </Form.Item>
                        </Form>
                        {error && <p className="error-message">{error}</p>}
                    </div>
                </div>
                <Derechos />
            </div>
        </div>
    );
};

export default Login;
