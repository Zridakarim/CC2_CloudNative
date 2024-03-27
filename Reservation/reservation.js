const mongoose = require('mongoose');

const reservationSchema = new mongoose.Schema({
  Chambre_id: { type: mongoose.Schema.Types.ObjectId, ref: 'chambre' },
  utilisateur_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Utilisateur' },
  nom: String
});

module.exports = mongoose.model('reservation', reservationSchema);
