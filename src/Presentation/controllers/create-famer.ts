import { Controller, HttpResponse, serverError, ok } from "../contracts";
import { CreateFamerViewModel } from "../view-models/create-famer";
import { CreateFamer } from "../../Domain/usercase";


export class CreateFamerController implements Controller {
    constructor(private readonly createFamer: CreateFamer) {
    }

    async handle(): Promise<HttpResponse<CreateFamerViewModel>> {
        try{
            const response = await this.createFamer.create()
            return ok(response)
        }
        catch (error) {
            return serverError(error)
        }
    }
}
