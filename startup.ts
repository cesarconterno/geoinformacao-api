import * as express from "express";
import * as bodyParser from "body-parser";

import Database from "./infra/db";
import PointController from "./controller/pointController";
import LineController from "./controller/lineController";

class StartUp {

	public app: express.Application;
	private _db: Database;
	private bodyParser;

	constructor() {
		this.app = express();
		this._db = new Database();
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
		this.app.route("/api/v1/point").get(PointController.get);
		this.app.route("/api/v1/point/:id").get(PointController.getById);
		this.app.route("/api/v1/point").post(PointController.create);
		this.app.route("/api/v1/point/:id").put(PointController.update);
		this.app.route("/api/v1/point/:id").delete(PointController.delete);
		//line
		this.app.route("/api/v1/line").get(LineController.get);
		this.app.route("/api/v1/line/:id").get(LineController.getById);
		this.app.route("/api/v1/line").post(LineController.create);
		this.app.route("/api/v1/line/:id").put(LineController.update);
		this.app.route("/api/v1/line/:id").delete(LineController.delete);
	}
}

export default new StartUp();
