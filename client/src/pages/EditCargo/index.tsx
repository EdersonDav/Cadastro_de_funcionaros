import React, {
  useEffect,
  useCallback,
  useState,
  ChangeEvent,
  FormEvent,
} from 'react';
import { useRouteMatch, useHistory } from 'react-router-dom';
import { Container } from './style';
import Header from '../../components/Header';
import api from '../../services/api';

interface CargoId {
  id: string;
}
interface Cargo {
  nome: string;
  descricao: string;
}

const AddCargo: React.FC = () => {
  const { params } = useRouteMatch<CargoId>();
  const history = useHistory();
  const [cargo, setCargo] = useState<Cargo>({
    nome: '',
    descricao: '',
  });
  useEffect(() => {
    api.get(`cargos/${params.id}`).then(resp => {
      setCargo(resp.data);
    });
  }, [params.id]);

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
      await api.put(`/cargos/${params.id}`, data);
      history.push('/listar-cargo');
    },
    [history, cargo, params.id],
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
            value={cargo.nome}
          />
          <input
            name="descricao"
            type="text"
            onChange={handleInputChange}
            required
            placeholder="Descrição do cargo"
            value={cargo.descricao}
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
