import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import AddFuncionario from '../pages/AddFuncionario';
import AddCargo from '../pages/AddCargo';
import EditFuncionario from '../pages/EditFuncionario';
import EditCargo from '../pages/EditCargo';
import Cargos from '../pages/Cargos';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/edit-funcionario/:id" component={EditFuncionario} />
    <Route path="/edit-cargo/:id" component={EditCargo} />
    <Route path="/novo-funcionario" component={AddFuncionario} />
    <Route path="/novo-cargo" component={AddCargo} />
    <Route path="/listar-cargo" component={Cargos} />
  </Switch>
);

export default Routes;
