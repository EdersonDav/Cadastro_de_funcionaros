import React from 'react';
import { Link } from 'react-router-dom';
import { FiTrash, FiEdit } from 'react-icons/fi';
import Header from '../../components/Header';
import { Container, Card } from './style';

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <Container>
        <Card>
          <div>
            <span>Desenvolvedor</span>
            <div>
              <Link to="/novo-funcionario">
                <FiEdit size={20} color="#008EF6" />
              </Link>
              <button type="button">
                <FiTrash size={20} color="#F60000" />
              </button>
            </div>
          </div>
          <ul>
            <li>Ederson Silva</li>
            <li>02/08/1995</li>
            <li>Desenvolvedor Pleno</li>
            <li>
              <span>R$ 5.000,00</span>
            </li>
          </ul>
        </Card>
        <Card>
          <div>
            <span>Desenvolvedor</span>
            <div>
              <Link to="/novo-funcionario">
                <FiEdit size={20} color="#008EF6" />
              </Link>
              <button type="button">
                <FiTrash size={20} color="#F60000" />
              </button>
            </div>
          </div>
          <ul>
            <li>Ederson Silva</li>
            <li>02/08/1995</li>
            <li>Desenvolvedor Pleno</li>
            <li>
              <span>R$ 5.000,00</span>
            </li>
          </ul>
        </Card>
        <Card>
          <div>
            <span>Desenvolvedor</span>
            <div>
              <Link to="/novo-funcionario">
                <FiEdit size={20} color="#008EF6" />
              </Link>
              <button type="button">
                <FiTrash size={20} color="#F60000" />
              </button>
            </div>
          </div>
          <ul>
            <li>Ederson Silva</li>
            <li>02/08/1995</li>
            <li>Desenvolvedor Pleno</li>
            <li>
              <span>R$ 5.000,00</span>
            </li>
          </ul>
        </Card>
      </Container>
    </>
  );
};

export default Home;
