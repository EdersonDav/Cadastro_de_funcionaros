import React, { useEffect, useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiTrash, FiEdit } from 'react-icons/fi';
import Header from '../../components/Header';
import api from '../../services/api';
import { Container, Card } from './style';

interface Cargo {
  id: string;
  nome: string;
  descricao: string;
}
interface Funcionario {
  id: string;
  nome: string;
  sobrenome: string;
  cargo: Cargo | null;
  nascimento: string;
  salario: number;
}

const Home: React.FC = () => {
  const [funcionarios, setFuncionarios] = useState<Funcionario[]>([]);
  useEffect(() => {
    api.get('funcionarios').then(resp => {
      setFuncionarios(resp.data);
    });
  }, [funcionarios]);

  const deleteFuncionario = useCallback(async id => {
    await api.delete(`funcionarios/${id}`);
  }, []);

  const formatValue = useCallback((value: number): string => {
    return Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(value);
  }, []);

  return (
    <>
      <Header />
      <Container>
        {funcionarios.map(funcionario => {
          return (
            <Card key={funcionario.id}>
              <div>
                <span>
                  {funcionario.cargo?.nome !== null
                    ? funcionario.cargo?.nome
                    : 'Funcionario sem cargo'}
                </span>
                <div>
                  <Link to={`/edit-funcionario/${funcionario.id}`}>
                    <FiEdit size={20} color="#008EF6" />
                  </Link>
                  <button
                    onClick={() => deleteFuncionario(funcionario.id)}
                    type="button"
                  >
                    <FiTrash size={20} color="#F60000" />
                  </button>
                </div>
              </div>
              <ul>
                <li>{`${funcionario.nome} ${funcionario.sobrenome}`}</li>
                <li>{funcionario.nascimento}</li>
                <li>
                  {funcionario.cargo?.descricao !== null
                    ? funcionario.cargo?.descricao
                    : 'Funcionario sem cargo'}
                </li>
                <li>
                  <span>{formatValue(funcionario.salario)}</span>
                </li>
              </ul>
            </Card>
          );
        })}
      </Container>
    </>
  );
};

export default Home;
