import React from 'react';
import { Link } from 'react-router-dom';
import { FiPlus, FiList, FiHome } from 'react-icons/fi';
import { Container } from './style';

const Header: React.FC = () => {
  return (
    <Container>
      <div>
        <span>Home</span>
        <Link to="/">
          <FiHome size={20} />
        </Link>
      </div>
      <div>
        <span>Adicionar funcionario</span>
        <Link to="/novo-funcionario">
          <FiPlus size={20} />
        </Link>
      </div>
      <div>
        <span>Listar cargos</span>
        <Link to="/listar-cargo">
          <FiList size={20} />
        </Link>
      </div>
      <div>
        <span>Adicionar cargo</span>
        <Link to="/novo-cargo">
          <FiPlus size={20} />
        </Link>
      </div>
    </Container>
  );
};

export default Header;
