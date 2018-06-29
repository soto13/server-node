const saluda = () => {
  return 'hola mundo'
}

const promise = new Promise((resolve, reject) => {
  setTimeout(function(){
    resolve("Hello World!");
  }, 250);
});

export { saluda, promise };

