import { HelloWorld, Saluda } from "./saluda/saluda";


const index = (req, res) => res.render('index.html', { title: 'Mi Reto' })

export { index, Saluda, HelloWorld };

