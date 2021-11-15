import LineRepository from "../repository/lineRepository";

class LineService {
	get() {
		return LineRepository.find({});
	}

	getById(_id) {
		return LineRepository.findById(_id);
	}

	create(line) {
		return LineRepository.create(line);
	}

	update(_id, line) {
		return LineRepository.findByIdAndUpdate(_id, line);
	}

	delete(_id) {
		return LineRepository.findByIdAndRemove(_id);
	}
}

export default new LineService();
