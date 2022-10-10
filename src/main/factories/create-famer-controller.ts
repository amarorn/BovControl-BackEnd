import { CreateFamerService } from "../../aplication/service";
import { CreateFamerController } from "../../Presentation/controllers";
import { MongoFamerRepository } from "../../Infra/mongodb/repository";
import { Controller } from "../../Presentation/contracts";

export const makeCreateFamerController = (): Controller => {
    const repo = new MongoFamerRepository();
    const service = new CreateFamerService(repo);
    return new CreateFamerController(service);

}
