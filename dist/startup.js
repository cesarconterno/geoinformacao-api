"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const db_1 = require("./infra/db");
const pointController_1 = require("./controller/pointController");
const lineController_1 = require("./controller/lineController");
class StartUp {
    constructor() {
        this.app = express();
        this._db = new db_1.default();
        this._db.createConnection();
        this.middler();
        this.routes();
    }
    middler() {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }
    routes() {
        this.app.route("/").get((req, res) => {
            res.send({ versao: "1.0.0" });
        });
        //point
        this.app.route("/api/v1/point").get(pointController_1.default.get);
        this.app.route("/api/v1/point/:id").get(pointController_1.default.getById);
        this.app.route("/api/v1/point").post(pointController_1.default.create);
        this.app.route("/api/v1/point/:id").put(pointController_1.default.update);
        this.app.route("/api/v1/point/:id").delete(pointController_1.default.delete);
        //line
        this.app.route("/api/v1/line").get(lineController_1.default.get);
        this.app.route("/api/v1/line/:id").get(lineController_1.default.getById);
        this.app.route("/api/v1/line").post(lineController_1.default.create);
        this.app.route("/api/v1/line/:id").put(lineController_1.default.update);
        this.app.route("/api/v1/line/:id").delete(lineController_1.default.delete);
    }
}
exports.default = new StartUp();
