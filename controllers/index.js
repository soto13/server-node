import { HelloWorld, Saluda } from "./saluda/saluda";


const index = (req, res) => res.render('index', { title: 'Mi Reto' })

export { index, Saluda, HelloWorld };

