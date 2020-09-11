import React, { useEffect, useCallback, useState } from 'react';
import { FiTrash, FiEdit } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import { Container } from './style';
import Header from '../../components/Header';

interface Cargo {
  id: string;
  nome: string;
  descricao: string;
}

const Cargos: React.FC = () => {
  const [cargos, setCargos] = useState<Cargo[]>([]);
  useEffect(() => {
    api.get('cargos').then(resp => {
      setCargos(resp.data);
    });
  }, [cargos]);

  const deleteCargogo = useCallback(async id => {
    await api.delete(`cargos/${id}`);
  }, []);
  return (
    <>
      <Header />
      <Container>
        <ul>
          {cargos.map(cargo => {
            return (
              <li key={cargo.id}>
                <span>{cargo.nome}</span>
                <span>{cargo.descricao}</span>
                <div>
                  <Link to={`/edit-cargo/${cargo.id}`}>
                    <FiEdit size={20} color="#008EF6" />
                  </Link>
                  <button onClick={() => deleteCargogo(cargo.id)} type="button">
                    <FiTrash size={20} color="#F60000" />
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      </Container>
    </>
  );
};

export default Cargos;
