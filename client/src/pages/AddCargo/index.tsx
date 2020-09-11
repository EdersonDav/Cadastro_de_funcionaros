import React, { useCallback, useState, ChangeEvent, FormEvent } from 'react';
import { useHistory } from 'react-router-dom';
import { Container } from './style';
import Header from '../../components/Header';
import api from '../../services/api';

interface Cargo {
  nome: string;
  descricao: string;
}

const AddCargo: React.FC = () => {
  const history = useHistory();
  const [cargo, setCargo] = useState<Cargo>({
    nome: '',
    descricao: '',
  });

  const handleInputChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>): void => {
      const { name, value } = event.target;
      setCargo({ ...cargo, [name]: value });
    },
    [cargo],
  );

  const handleSubmit = useCallback(
    async (event: FormEvent) => {
      event.preventDefault();
      const { nome, descricao } = cargo;
      const data = {
        nome,
        descricao,
      };
      await api.post('/cargos', data);
      history.push('/listar-cargo');
    },
    [history, cargo],
  );

  return (
    <>
      <Header />
      <Container>
        <form onSubmit={handleSubmit}>
          <h1>Cargo</h1>
          <input
            name="nome"
            type="text"
            onChange={handleInputChange}
            required
            placeholder="Nome do cargo"
          />
          <input
            name="descricao"
            type="text"
            onChange={handleInputChange}
            required
            placeholder="Descrição do cargo"
          />
          <div>
            <button type="button" onClick={() => history.push('/listar-cargo')}>
              Cancelar
            </button>
            <button type="submit">Salvar</button>
          </div>
        </form>
      </Container>
    </>
  );
};
export default AddCargo;
