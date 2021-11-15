"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const pointSchema_1 = require("../models/pointSchema");
exports.default = mongoose.model("point", pointSchema_1.default);
