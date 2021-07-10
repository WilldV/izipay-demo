const express = require("express");
const app = express();
const routes = require("./routes");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/", routes);

// catch 404 and forward to error handler
app.get("*", function (req, res) {
    res.status(404).send("what???");
});


const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log(`App listening on port: ${port}`);
});

module.exports = app;