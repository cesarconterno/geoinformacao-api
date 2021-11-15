"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lineService_1 = require("../services/lineService");
const HttpStatus = require("http-status");
const helper_1 = require("../infra/helper");
class LineController {
    get(req, res) {
        lineService_1.default.get()
            .then(line => helper_1.default.sendResponse(res, HttpStatus.OK, line))
            .catch(error => console.error.bind(console, `Error ${error}`));
    }
    getById(req, res) {
        const _id = req.params.id;
        lineService_1.default.getById(_id)
            .then(line => helper_1.default.sendResponse(res, HttpStatus.OK, line))
            .catch(error => console.error.bind(console, `Error ${error}`));
    }
    create(req, res) {
        let vm = req.body;
        lineService_1.default.create(vm)
            .then(line => helper_1.default.sendResponse(res, HttpStatus.OK, "Linha cadastrada com sucesso!"))
            .catch(error => console.error.bind(console, `Error ${error}`));
    }
    update(req, res) {
        const _id = req.params.id;
        let line = req.body;
        lineService_1.default.update(_id, line)
            .then(line => helper_1.default.sendResponse(res, HttpStatus.OK, "Linha foi atualizada com sucesso!"))
            .catch(error => console.error.bind(console, `Error ${error}`));
    }
    delete(req, res) {
        const _id = req.params.id;
        lineService_1.default.delete(_id)
            .then(() => helper_1.default.sendResponse(res, HttpStatus.OK, "Linha deletada com sucesso!"))
            .catch(error => console.error.bind(console, `Error ${error}`));
    }
}
exports.default = new LineController();
