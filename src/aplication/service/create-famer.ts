import { CreateFamer } from "../../Domain/usercase";
import { Famer } from "../../Domain/entities/famer";
import { CreateFamerRepository } from "../contracts/create-famer-repository";

export class CreateFamerService implements CreateFamer {
    constructor (private readonly createFamerRepository: CreateFamerRepository) {}
    async create(): Promise<Famer> {
        return this.createFamerRepository.createFamer()
    }
}
