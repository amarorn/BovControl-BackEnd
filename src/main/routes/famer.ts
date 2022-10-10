import { makeCreateFamerController} from "../factories";
import {adaptRoute} from "../adapters";

import { Router } from "express";

export default (router: Router): void => {
    router.post("/famer", adaptRoute(makeCreateFamerController()));
}
