const Theme = require('./model');

//Simple version, without validation or sanitation
exports.addData = function (req, res) {
    let theme = new Theme(
        {
            name: req.body.name,
            
        }
    );

    theme.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Theme Created successfully')
    })
};

exports.getData = (req, res) => {
    Theme.find()
    .then(theme => {
        res.send(theme);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving notes."
        });
    });
};