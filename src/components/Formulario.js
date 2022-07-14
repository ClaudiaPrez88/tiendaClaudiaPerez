import React from 'react';

const Formulario = ({ handleChange, data, handleSubmit }) => {
    return (
        <div className="form text-center">
            <h3 className='text-form'>Datos para facturación</h3>
            <form onSubmit={handleSubmit}>
                <div>
                <input
                    placeholder="Nombre"
                    type="text"
                    name="name"
                    onChange={handleChange}
                    value={data.name}
                />
                </div>
                <div>
                <input
                    placeholder="Email"
                    type="text"
                    name="email"
                    onChange={handleChange}
                    value={data.email}
                />
                </div>
                <div>
                <input
                    placeholder="Telefono"
                    type="number"
                    name="phone"
                    onChange={handleChange}
                    value={data.phone}
                />
                </div>
                <button className='btn btn-primary'>Finalizar compra</button>
            </form>
        </div>
    );
};

export default Formulario;