import ContactsRepositories from '../repositories/ContactsRepositories';
import {
  Lifecycle,
  ReqRefDefaults,
  Request,
  ResponseToolkit,
} from '@hapi/hapi';

type ServerRouteHandler = Lifecycle.Method;

type IControllers<
  Params extends Parameters<ServerRouteHandler> = Parameters<ServerRouteHandler>,
  R extends ReturnType<ServerRouteHandler> = ReturnType<ServerRouteHandler>,
> = {
  index(...args: Params): Promise<R>;
  show(...args: Params): Promise<R>;
  store(...args: Params): Promise<R>;
  update(...args: Params): Promise<R>;
  delete(...args: Params): Promise<R>;
};

class ContactsController implements IControllers {
  async index(
    request: Request<ReqRefDefaults>,
    h: ResponseToolkit<ReqRefDefaults>,
    err?: Error | undefined,
  ): Promise<Lifecycle.ReturnValue<ReqRefDefaults>> {
    const contacts = await ContactsRepositories.findAll();

    return h.response(ContactsRepositories.findAll()).code(200);
  }

  show(
    request: Request<ReqRefDefaults>,
    h: ResponseToolkit<ReqRefDefaults>,
    err?: Error | undefined,
  ): Promise<Lifecycle.ReturnValue<ReqRefDefaults>> {
    throw new Error('Method not implemented.');
  }

  store(
    request: Request<ReqRefDefaults>,
    h: ResponseToolkit<ReqRefDefaults>,
    err?: Error | undefined,
  ): Promise<Lifecycle.ReturnValue<ReqRefDefaults>> {
    throw new Error('Method not implemented.');
  }

  update(
    request: Request<ReqRefDefaults>,
    h: ResponseToolkit<ReqRefDefaults>,
    err?: Error | undefined,
  ): Promise<Lifecycle.ReturnValue<ReqRefDefaults>> {
    throw new Error('Method not implemented.');
  }

  delete(
    request: Request<ReqRefDefaults>,
    h: ResponseToolkit<ReqRefDefaults>,
    err?: Error | undefined,
  ): Promise<Lifecycle.ReturnValue<ReqRefDefaults>> {
    throw new Error('Method not implemented.');
  }
}

const controller = new ContactsController();

export default controller;
export { ContactsController };