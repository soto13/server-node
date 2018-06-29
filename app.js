import bodyParser from "body-parser";
import express from "express";
import path from "path";
import routes from "./routes/index";

const app = express();

// const PORT = 3000;

//////////////// settings ////////////////

// app.set('port', process.env.PORT || PORT);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs'); // para renderizar la vista a extenciones ejs
app.set('images', path.join(__dirname, 'public'))

//////////////// midleware ////////////////

app.use((req, res, next) => {
  console.log(req.url, req.method);
  next();
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false })); // si no le llegan imagenes ni cosas complicadas es false

//////////////// routes ////////////////

app.use(routes);

//////////////// static files ////////////////

app.use(express.static(path.join(__dirname, 'public')));

//////////////// start the server ////////////////
// app.listen(app.get('port'), () => console.log(`Running app rufian, open in the server "localhost:${app.get('port')}"`));
export default app;
/* JOSE SOTO IBARRA -OLLPAY  */