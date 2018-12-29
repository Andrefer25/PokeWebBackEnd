//File: routes/tvshows.js
module.exports = function (app) {

    var Noticia = require('../models/noticia.js');

    //GET - Return all tvshows in the DB
    findAllNoticias = function (req, res) {
        Noticia.find(function (err, noticias) {
            if (!err) {
                console.log('GET /noticias')
                res.send(noticias);
            } else {
                console.log('ERROR: ' + err);
            }
        });
    };

    //GET - Return a TVShow with specified ID
    findById = function (req, res) {
        Noticia.findById(req.params.id, function (err, noticia) {
            if (!err) {
                console.log('GET /noticia/' + req.params.id);
                res.send(noticia);
            } else {
                console.log('ERROR: ' + err);
            }
        });
    };

    //POST - Insert a new TVShow in the DB
    addNoticia = function (req, res) {
        console.log('POST');
        console.log(req.body);

        var noticia = new Noticia({
            title: req.body.title,
            subtitle: req.body.subtitle,
            notimg: req.body.notimg,
            autor: req.body.autor,
            fecha: req.body.fecha,
            nottext: req.body.nottext
        });

        noticia.save(function (err) {
            if (!err) {
                console.log('Created');
            } else {
                console.log('ERROR: ' + err);
            }
        });

        res.send(noticia);
    };

    //PUT - Update a register already exists
    updateNoticia = function (req, res) {
        Noticia.findById(req.params.id, function (err, noticia) {
            title = req.body.title,
            subtitle = req.body.subtitle,
            notimg = req.body.notimg,
            autor = req.body.autor,
            fecha = req.body.fecha,
            nottext = req.body.nottext

            noticia.save(function (err) {
                if (!err) {
                    console.log('Updated');
                } else {
                    console.log('ERROR: ' + err);
                }
                res.send(noticia);
            });
        });
    }

    //DELETE - Delete a TVShow with specified ID
    deleteNoticia = function (req, res) {
        Noticia.findById(req.params.id, function (err, noticia) {
            noticia.remove(function (err) {
                if (!err) {
                    console.log('Removed');
                } else {
                    console.log('ERROR: ' + err);
                }
            })
        });
    }

    //Link routes and functions
    app.get('/noticias', findAllNoticias);
    app.get('/noticia/:id', findById);
    app.post('/noticia', addNoticia);
    app.put('/noticia/:id', updateNoticia);
    app.delete('/noticia/:id', deleteNoticia);

}