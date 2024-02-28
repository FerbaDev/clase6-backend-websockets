//levantamos el servidor
const express = require("express");
const app = express();
const PUERTO = 8080;
const exphbs = require("express-handlebars");
const socket = require("socket.io");
const viewsRouter = require("./routes/views.router.js")

//middleware
app.use(express.static("./src/public"));

//express handlebars
app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');
app.set('views', './src/views');

//rutas
app.use("/", viewsRouter);
//listen
app.listen(PUERTO, () => {
    console.log("Conectado en http://localhost:8080");
})