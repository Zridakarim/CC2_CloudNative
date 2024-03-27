const express = require('express');
const router = express.Router();
const reservation = require('./reservation.js');
const Chambre = require('../Chambre/Chambre.js');
const Utilisateur = require('../auth-service/User.js');

router.get('/all', async (req, res) => {
  try {
    const reservation = await reservation.find();
    res.json(reservation);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("server error");
  }
});

router.get('/Chambres/:reservationname', async (req, res) => {
  try {
    const reservationName = req.params.reservationname;
    const Chambres = await Chambre.find({ reservationname: reservationName });
    res.json(Chambres);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Erreur serveur");
  }
});

router.get('/utilisateur/:reservationname', async (req, res) => {
  try {
    const reservationName = req.params.reservationname;
    const utlisateurs = await Utilisateur.find({ reservation: reservationname });
    res.json(Utilisateur);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("server error");
  }
});



router.post('/add', async (req, res) => {
  try {
    const { nom, chambre_id, Utilisateur_id } = req.body;

    const reservation = new reservation({ nom, chambre_id, Utilisateur_id });
    await reservation.save();

    res.status(201).json({ message: "inscription ajouté" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("server error");
  }
});

router.put('/update/:name', async (req, res) => {
  try {
    const name = req.params.name;
    const { nom, chambre_id, Utilisateur_id } = req.body;

    await reservation.findOneAndUpdate({ nom }, { $set: { nom, chambre_id, Utilisateur_id } });

    res.json({ message: "Informations updated" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("server error");
  }
});

router.delete('/delete/:name', async (req, res) => {
  try {
    const name = req.params.name;

    await reservation.findOneAndDelete({ nom });

    res.json({ message: "reservation deleted" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("server error");
  }
});

module.exports = router;
