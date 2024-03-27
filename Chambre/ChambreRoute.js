const express = require('express');
const router = express.Router();
const Chambre = require('../Chambre/Chambre.js');

router.get('/all', async (req, res) => {
  try {
    const Chambre = await Chambre.find();
    res.json(Chambre);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("SERVER ERROR");
  }
});

router.post('/add', async (req, res) => {
  ChambreModel = mongoose.model('Chambre' ,authorSchema, 'BaseD');
  ChambreModel.insertMany([
    {nom:"AMAL"},{type:"a"},{capacite:30},{prix:200},{disponibilite:true},{hotel:"x"},
    {nom:"ALAE"},{type:"b"},{capacite:20},{prix:150},{disponibilite:false},{hotel:"y"},
    
    ]).then((docs) => {
    console.log("Inseree Chambre");
    console.log(docs);
    }).catch((e)=>{console.log(e)})
});

router.put('/update/:name', async (req, res) => {
 
  const Chambre = req.params.name;
  const updatedChambre = req.body;

  ChambreModel.updateOne({nom:`${Chambre}`},{type:"type"},{capacite:0},{disponibilite:true},{hotel:"x"},function(err, res){
      console.log(`Modified ${res.n} document`);
      });
      res.json(updatedChambre); 
    });

router.delete('/delete/:name', async (req, res) => {
  try {
    const name = req.params.name;

    await Chambre.findOneAndDelete({ nom });

    res.json({ message: "Chambre supprimé " });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Erreur serveur");
  }
});

module.exports = router;
