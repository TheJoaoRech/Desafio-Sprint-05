const app = require('./app')
const Port = 3000

app.listen(PORT, () => {
    console.log(`The serves is running on port ${Port}`)
})