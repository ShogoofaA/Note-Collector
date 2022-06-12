const path = require('path');
const express = require('express');
const router = express.Router();
  
  router.get('/api/notes', (req, res) => {
    console.log('hello')
    res.json({ok: true})
  });

module.exports = router;