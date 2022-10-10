import { Famer } from '../entities/famer';

export interface CreateFamer {
    create: () => Promise<Famer>
}
