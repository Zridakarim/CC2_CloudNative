const mongoose = require('mongoose');

const ChambreSchema = new mongoose.Schema({
  type: String,
  capacite: Number,
  prix: Number,
  disponibilite: Boolean,
  hotel: String
});

ChambreModel = mongoose.model('Chambre', ChambreSchema);
module.exports=ChambreModel;