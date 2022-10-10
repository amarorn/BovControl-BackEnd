import { CreateFamerDto } from "../dto";

export interface CreateFamerRepository {
    createFamer: () => Promise<CreateFamerDto>
}
