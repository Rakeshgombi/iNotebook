const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
  obj = {
    a: "This",
    Number: 4
  }
  res.json(obj)
})

module.exports = router;