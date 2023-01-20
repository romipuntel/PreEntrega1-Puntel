import React from 'react';

const Categoria = () => {
  return (
    <li className="nav-item dropdown">
      <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
      Categorias</a>
       <ul className="dropdown-menu">
        <li><a className="dropdown-item" href="#">Vino Blanco</a></li>
        <li><a className="dropdown-item" href="#">Vino Rosado</a></li>
        <li><a className="dropdown-item" href="#">Vino Tinto</a></li>
       </ul>
    </li>

  );
}

export default Categoria;
