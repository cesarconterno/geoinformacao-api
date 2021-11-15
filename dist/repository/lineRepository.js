"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const lineSchema_1 = require("../models/lineSchema");
exports.default = mongoose.model("line", lineSchema_1.default);
