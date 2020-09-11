import { Router } from 'express';
import funcionariosRouter from './funcionarios.routes';
import cargosRouter from './cargos.routes';

const routes = Router();

routes.use('/funcionarios', funcionariosRouter);
routes.use('/cargos', cargosRouter);

export default routes;
