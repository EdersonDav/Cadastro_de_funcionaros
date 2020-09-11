import React, {
  useEffect,
  useState,
  ChangeEvent,
  useCallback,
  FormEvent,
} from 'react';
import { useHistory } from 'react-router-dom';
import InputMask from 'react-input-mask';
import api from '../../services/api';
import { Container } from './style';
import Header from '../../components/Header';

interface Cargo {
  id: string;
  nome: string;
  descricao: string;
}
interface Funcionario {
  nome: string;
  sobrenome: string;
  cargo_id: string;
  nascimento: string;
  salario: number | string;
}

const AddFuncionario: React.FC = () => {
  const [funcionario, setFuncionario] = useState<Funcionario>({
    nome: '',
    sobrenome: '',
    cargo_id: '',
    nascimento: '',
    salario: '',
  });
  const [selectValue, setSelectValue] = useState('');
  const history = useHistory();
  const [cargos, setCargos] = useState<Cargo[]>([]);
  useEffect(() => {
    api.get('cargos').then(resp => {
      setCargos(resp.data);
    });
  }, []);

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
      const data = {
        nome,
        sobrenome,
        cargo_id,
        nascimento,
        salario,
      };
      await api.post('/funcionarios', data);
      history.push('/');
    },
    [selectValue, funcionario, history],
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
            value={funcionario?.salario !== '' ? funcionario?.salario : ''}
            onChange={handleInputChange}
          />
          <InputMask
            mask="99/99/9999"
            required
            name="nascimento"
            placeholder="Data de Nascimento"
            value={funcionario?.nascimento}
            onChange={handleInputChange}
          />
          <select
            onChange={e => setSelectValue(e.target.value)}
            name="cargos"
            required
            placeholder="Cargo"
          >
            <option value=""> Cargo </option>
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
