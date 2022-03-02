 const express = require('express')

 const router = express.Router();
 const shortid = require('shortid')

  
 const Url = require('../models/url.model')



router.post('/short', async (req, res) => {
    const { origUrl } = req.body;
    const base = `http://localhost:3333`;
  
    const urlId = shortid.generate();
      try {
        let url = await Url.findOne({ origUrl });
        if (url) {
          res.json(url);
        } else {
          const shortUrl = `${base}/${urlId}`;
  
          url = new Url({
            origUrl,
            shortUrl,
            urlId,
            date: new Date(),
          });
  
          await url.save();
          res.json(url);
        }
      } catch (err) {
        console.log(err);
        res.status(500).json('Server Error');
      }
    
  });


  router.get('/:urlId', async (req, res) => {
    try {
      const url = await Url.findOne({ urlId: req.params.urlId });
      if (url) {
        url.clicks++;
        url.save();
        return res.redirect(url.origUrl);
      } else res.status(404).json('Not found');
    } catch (err) {
      console.log(err);
      res.status(500).json('Server Error');
    }
  });
  
  module.exports = router;