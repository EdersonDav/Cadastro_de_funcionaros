import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import AddFuncionario from '../pages/AddFuncionario';
import AddCargo from '../pages/AddCargo';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/novo-funcionario" component={AddFuncionario} />
    <Route path="/novo-cargo" component={AddCargo} />
  </Switch>
);

export default Routes;
