import PointRepository from "../repository/pointRepository";

class PointService {
	get() {
		return PointRepository.find({});
	}

	getById(_id) {
		return PointRepository.findById(_id);
	}

	create(point) {
		return PointRepository.create(point);
	}

	update(_id, point) {
		return PointRepository.findByIdAndUpdate(_id, point);
	}

	delete(_id) {
		return PointRepository.findByIdAndRemove(_id);
	}
}

export default new PointService();
