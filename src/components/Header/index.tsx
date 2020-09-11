import React from 'react';
import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';
import { Container } from './style';

const Header: React.FC = () => {
  return (
    <Container>
      <div>
        <span>Adicionar funcionario</span>
        <Link to="/novo-funcionario/00">
          <FiPlus size={20} />
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
