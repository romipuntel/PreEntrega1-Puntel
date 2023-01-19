import React from 'react';

const Categoria = () => {
  return (
    <li className="nav-item dropdown">
      <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Categorias</a>
      <div className="dropdown-menu">
        <a className="dropdown-item" href="#">Vino Blanco</a>
        <a className="dropdown-item" href="#">Vino Rosado</a>
        <a className="dropdown-item" href="#"> Vino Tinto</a>
      </div>
    </li>
  );
}

export default Categoria;
