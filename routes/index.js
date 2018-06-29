import express from "express";
import { index } from '../controllers';
import { helloWorld } from "../middlewares";

const app = express.Router();

app.get('/', index);

app.get('/api/saludo', helloWorld);

module.exports = app;
