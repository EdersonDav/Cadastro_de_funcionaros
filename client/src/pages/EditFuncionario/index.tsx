import React, {
  useEffect,
  useState,
  ChangeEvent,
  useCallback,
  FormEvent,
} from 'react';
import { useRouteMatch, useHistory } from 'react-router-dom';
import InputMask from 'react-input-mask';
import api from '../../services/api';
import { Container } from './style';
import Header from '../../components/Header';

interface UserId {
  id: string;
}
interface Cargo {
  id: string;
  nome: string;
  descricao: string;
}
interface Funcionario {
  id: string;
  nome: string;
  sobrenome: string;
  cargo_id: string;
  nascimento: string;
  salario: number;
}

const AddFuncionario: React.FC = () => {
  const history = useHistory();
  const { params } = useRouteMatch<UserId>();
  const [funcionario, setFuncionario] = useState<Funcionario>({
    id: '',
    nome: '',
    sobrenome: '',
    cargo_id: '',
    nascimento: '',
    salario: 0,
  });
  const [selectValue, setSelectValue] = useState('');
  const [cargos, setCargos] = useState<Cargo[]>([]);
  useEffect(() => {
    api.get('cargos').then(resp => {
      setCargos(resp.data);
    });
  }, []);

  useEffect(() => {
    api.get(`funcionarios/${params.id}`).then(resp => {
      setFuncionario(resp.data);
    });
  }, [params.id]);

  const handleInputChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>): void => {
      const { name, value } = event.target;
      setFuncionario({ ...funcionario, [name]: value });
    },
    [funcionario],
  );
  const handleSubmit = useCallback(
    async (event: FormEvent) => {
      event.preventDefault();
      const { nome, sobrenome, nascimento, salario } = funcionario;
      const cargo_id = selectValue;
      const { id } = params;
      const data = {
        nome,
        sobrenome,
        cargo_id,
        nascimento,
        salario,
      };
      await api.put(`funcionarios/${id}`, data);
      history.push('/');
    },
    [selectValue, funcionario, history, params],
  );
  return (
    <>
      <Header />
      <Container>
        <form onSubmit={handleSubmit}>
          <h1>Funcionario</h1>
          <input
            type="text"
            required
            placeholder="Nome"
            name="nome"
            onChange={handleInputChange}
            value={funcionario?.nome !== '' ? funcionario?.nome : ''}
          />
          <input
            type="text"
            required
            placeholder="Sobrenome"
            name="sobrenome"
            value={funcionario?.sobrenome !== '' ? funcionario?.sobrenome : ''}
            onChange={handleInputChange}
          />
          <input
            type="number"
            required
            name="salario"
            placeholder="Salário R$"
            value={funcionario?.salario !== 0 ? funcionario?.salario : 0}
            onChange={handleInputChange}
          />
          <InputMask
            mask="99/99/9999"
            required
            name="nascimento"
            value={funcionario?.nascimento}
            onChange={handleInputChange}
          />
          <select
            onChange={e => setSelectValue(e.target.value)}
            name="cargos"
            required
            id="cargos"
          >
            <option value="Cargo"> Cargo</option>
            {cargos.map(cargo => {
              return (
                <option key={cargo.id} value={cargo.id}>
                  {cargo.nome}
                </option>
              );
            })}
          </select>
          <div>
            <button type="button" onClick={() => history.push('/')}>
              Cancelar
            </button>
            <button type="submit">Salvar</button>
          </div>
        </form>
      </Container>
    </>
  );
};
export default AddFuncionario;
