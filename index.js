const express = require('express');
const app = express();

app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.set('view engine', 'ejs')

const port = process.env.PORT || 8000;

app.get('/', function (req, res) {
    res.render('index')
});

if (process.env.PORT) {
    app.listen(port, function () {
        console.log(`Server running at ${process.env.APP_URL}`);
    })
} else {
    app.listen(port, (error) => {
        if (!error)
            console.log("Server is Successfully Running, and App is listening on port " + port)
        else
            console.log("Error occurred, server can't start", error);
    });
}