import LineService from "../services/lineService";
import * as HttpStatus from "http-status";

import Helper from "../infra/helper";

class LineController {
	get(req, res) {
		LineService.get()
			.then(line => Helper.sendResponse(res, HttpStatus.OK, line))
			.catch(error => console.error.bind(console, `Error ${error}`));
	}

	getById(req, res) {
		const _id = req.params.id;

		LineService.getById(_id)
			.then(line => Helper.sendResponse(res, HttpStatus.OK, line))
			.catch(error => console.error.bind(console, `Error ${error}`));
	}

	create(req, res) {
		let vm = req.body;

		LineService.create(vm)
			.then(line =>
				Helper.sendResponse(
					res,
					HttpStatus.OK,
					"Linha cadastrada com sucesso!"
				)
			)
			.catch(error => console.error.bind(console, `Error ${error}`));
	}

	update(req, res) {
		const _id = req.params.id;
		let line = req.body;

		LineService.update(_id, line)
			.then(line =>
				Helper.sendResponse(
					res, 
					HttpStatus.OK,
					"Linha foi atualizada com sucesso!"
				)
			)
			.catch(error => console.error.bind(console, `Error ${error}`));
	}

	delete(req, res) {
		const _id = req.params.id;

		LineService.delete(_id)
			.then(() =>
				Helper.sendResponse(res, HttpStatus.OK, "Linha deletada com sucesso!")
			)
			.catch(error => console.error.bind(console, `Error ${error}`));
	}
}

export default new LineController();
