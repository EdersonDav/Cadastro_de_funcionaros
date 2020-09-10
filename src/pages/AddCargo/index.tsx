import React from 'react';
import { Container } from './style';

const AddCargo: React.FC = () => {
  return (
    <Container>
      <form>
        <h1>Cargo</h1>
        <input type="text" required placeholder="Nome do cargo" />
        <input type="text" required placeholder="Descrição do cargo" />
        <div>
          <button type="button">Cancelar</button>
          <button type="submit">Salvar</button>
        </div>
      </form>
    </Container>
  );
};
export default AddCargo;
