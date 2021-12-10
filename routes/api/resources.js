const axios = require("axios");
const express = require("express")
const router = express.Router();

const auth = require('../../middleware/auth')
const Job = require('../../models/Jobs')

// Comments Documentation : Type of Route and endpoint : Description : Public/Private (Do you need a token or not)


//  GET api/jobs : Get all the Jobs : Private
router.get('/', async(req,res) => {
    try {
        const resources = await axios.get('http://159.223.20.109:1337/api/posts')
        res.send(resources.data)
    } catch (err) {
        console.error(err.message)
        res.status(500).send('Server Error')
    }
})

//  GET api/jobs/:id : Get a particular Job : Private
router.get('/:resourceid',  async(req,res) => {
    try {
        const resource = await axios.get(`http://159.223.20.109:1337/api/posts/${req.params.resourceid}`);
        res.send(resource.data)
    } catch (err) {
        console.error(err.message)
        if(err.kind === 'ObjectId'){
            return res.status(404).json({msg : 'Job not found'})
        }
        res.status(500).send('Server Error')
    }
})
//  DELETE api/jobs/:id : Delete a particular Job : Private



module.exports = router;
