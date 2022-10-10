"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateFamerService = void 0;
class CreateFamerService {
    constructor(createFamerRepository) {
        this.createFamerRepository = createFamerRepository;
    }
    async create() {
        return this.createFamerRepository.createFamer();
    }
}
exports.CreateFamerService = CreateFamerService;
