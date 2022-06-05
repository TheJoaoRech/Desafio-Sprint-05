const app = require('./app');
const Port = 3000;

app.listen(Port, () => {
	console.log(`The serves is running on port ${Port}`);
});