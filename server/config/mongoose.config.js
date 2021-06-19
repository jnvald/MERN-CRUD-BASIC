const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/formulario_db", {
	useNewUrlParser: true,
	useUnifiedTopology: true,
})
	.then(() => console.log("Conexion establecida con la DB ***"))
	.catch(err => console.error("Ha fallado todo oh no!!!", err));