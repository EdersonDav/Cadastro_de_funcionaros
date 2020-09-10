import React from 'react';
import { Container } from './style';

const AddFuncionario: React.FC = () => {
  return (
    <Container>
      <form>
        <h1>Funcionario</h1>
        <input type="text" placeholder="Nome" />
        <input type="text" placeholder="Sobrenome" />
        <input type="number" placeholder="Salário R$" />
        <input type="date" />
        <select name="cargos" id="cargos">
          <option value="Desenvolvedor Pleno">Desenvolvedor Pleno</option>
          <option value="Desenvolvedor Junior">Desenvolvedor Junior</option>
          <option value="Desenvolvedor Senior">Desenvolvedor Senior</option>
        </select>
        <div>
          <button type="button">Cancelar</button>
          <button type="submit">Salvar</button>
        </div>
      </form>
    </Container>
  );
};
export default AddFuncionario;
