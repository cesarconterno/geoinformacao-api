"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pointService_1 = require("../services/pointService");
const HttpStatus = require("http-status");
const helper_1 = require("../infra/helper");
class PointController {
    get(req, res) {
        pointService_1.default.get()
            .then(point => helper_1.default.sendResponse(res, HttpStatus.OK, point))
            .catch(error => console.error.bind(console, `Error ${error}`));
    }
    getById(req, res) {
        const _id = req.params.id;
        pointService_1.default.getById(_id)
            .then(point => helper_1.default.sendResponse(res, HttpStatus.OK, point))
            .catch(error => console.error.bind(console, `Error ${error}`));
    }
    create(req, res) {
        let vm = req.body;
        pointService_1.default.create(vm)
            .then(point => helper_1.default.sendResponse(res, HttpStatus.OK, "Ponto cadastrado com sucesso!"))
            .catch(error => console.error.bind(console, `Error ${error}`));
    }
    update(req, res) {
        const _id = req.params.id;
        let point = req.body;
        pointService_1.default.update(_id, point)
            .then(point => helper_1.default.sendResponse(res, HttpStatus.OK, "Ponto foi atualizado com sucesso!"))
            .catch(error => console.error.bind(console, `Error ${error}`));
    }
    delete(req, res) {
        const _id = req.params.id;
        pointService_1.default.delete(_id)
            .then(() => helper_1.default.sendResponse(res, HttpStatus.OK, "Ponto deletado com sucesso!"))
            .catch(error => console.error.bind(console, `Error ${error}`));
    }
}
exports.default = new PointController();
