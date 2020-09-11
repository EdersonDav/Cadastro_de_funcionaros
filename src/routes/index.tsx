import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import AddFuncionario from '../pages/AddFuncionario';
import AddCargo from '../pages/AddCargo';
import EditFuncionario from '../pages/EditFuncionario';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/edit-funcionario/:id" component={EditFuncionario} />
    <Route path="/novo-funcionario" component={AddFuncionario} />
    <Route path="/novo-cargo" component={AddCargo} />
  </Switch>
);

export default Routes;
