import StartUp from './startup';

let port = process.env.PORT || "3050";

StartUp.app.listen(port, function () {
	console.log(`Servidor executando na porta ${port}`);
});