import PointService from "../services/pointService";
import * as HttpStatus from "http-status";

import Helper from "../infra/helper";

class PointController {
	get(req, res) {
		PointService.get()
			.then(point => Helper.sendResponse(res, HttpStatus.OK, point))
			.catch(error => console.error.bind(console, `Error ${error}`));
	}

	getById(req, res) {
		const _id = req.params.id;

		PointService.getById(_id)
			.then(point => Helper.sendResponse(res, HttpStatus.OK, point))
			.catch(error => console.error.bind(console, `Error ${error}`));
	}

	create(req, res) {
		let vm = req.body;

		PointService.create(vm)
			.then(point =>
				Helper.sendResponse(
					res,
					HttpStatus.OK,
					"Ponto cadastrado com sucesso!"
				)
			)
			.catch(error => console.error.bind(console, `Error ${error}`));
	}

	update(req, res) {
		const _id = req.params.id;
		let point = req.body;

		PointService.update(_id, point)
			.then(point =>
				Helper.sendResponse(
					res,
					HttpStatus.OK,
					"Ponto foi atualizado com sucesso!"
				)
			)
			.catch(error => console.error.bind(console, `Error ${error}`));
	}

	delete(req, res) {
		const _id = req.params.id;

		PointService.delete(_id)
			.then(() =>
				Helper.sendResponse(res, HttpStatus.OK, "Ponto deletado com sucesso!")
			)
			.catch(error => console.error.bind(console, `Error ${error}`));
	}
}

export default new PointController();
