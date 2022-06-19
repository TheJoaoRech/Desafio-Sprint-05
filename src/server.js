const app = require('./app');
const Port = 3000;

app.listen(process.env.PORT || Port, () => {
	console.log(`The server is running on port ${Port}`);
});