"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lineRepository_1 = require("../repository/lineRepository");
class LineService {
    get() {
        return lineRepository_1.default.find({});
    }
    getById(_id) {
        return lineRepository_1.default.findById(_id);
    }
    create(line) {
        return lineRepository_1.default.create(line);
    }
    update(_id, line) {
        return lineRepository_1.default.findByIdAndUpdate(_id, line);
    }
    delete(_id) {
        return lineRepository_1.default.findByIdAndRemove(_id);
    }
}
exports.default = new LineService();
