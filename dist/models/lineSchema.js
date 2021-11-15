"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const LineSchema = new mongoose.Schema({
    type: {
        type: String,
        enum: ['LineString'],
        required: true
    },
    coordinates: {
        description: "An array of two or more positions",
        minItems: 2,
        type: "array",
        items: {
            description: "A single position",
            type: "array",
            minItems: 2,
            items: [
                { type: "number" },
                { type: "number" }
            ],
            additionalItems: false,
            required: true
        }
    }
});
exports.default = LineSchema;
