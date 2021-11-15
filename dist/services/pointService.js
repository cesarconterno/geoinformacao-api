"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pointRepository_1 = require("../repository/pointRepository");
class PointService {
    get() {
        return pointRepository_1.default.find({});
    }
    getById(_id) {
        return pointRepository_1.default.findById(_id);
    }
    create(point) {
        return pointRepository_1.default.create(point);
    }
    update(_id, point) {
        return pointRepository_1.default.findByIdAndUpdate(_id, point);
    }
    delete(_id) {
        return pointRepository_1.default.findByIdAndRemove(_id);
    }
}
exports.default = new PointService();
