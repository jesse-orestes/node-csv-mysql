
const App = require('./server');
const port = 3000;

App.listen(port, () => {
console.log(`Connection has established successfully in port:${port}`);
})