import { CreateFamerRepository } from "../../../aplication/contracts/";
import { CreateFamerDto } from "../../../aplication/dto";

export class MongoFamerRepository implements CreateFamerRepository {
    async createFamer(): Promise<CreateFamerDto> {
        return
    }
}
