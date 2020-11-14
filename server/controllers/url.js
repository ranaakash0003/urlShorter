const ShortUrl = require('../models/url')
const { nanoid } = require('nanoid')

const homePage = async (req, res) => {
    try {
       const shortUrls = await ShortUrl.find()
       if(shortUrls.length > 0)
            res.status(200).send({ shortUrls: shortUrls})
        else
        res.status(200).send({ msg: 'no short url foundUrls' })

    } catch (error) {
        console.log(error);
    }
};

const postUrl = async (req, res) => {
    try {
        const { fullUrl } = req.body;
        const shortUrl = nanoid(5);
        const response = await ShortUrl.create({ full: fullUrl, short: shortUrl });
        res.status(200).send({ data: response })
        
    } catch (error) {
        console.log(error);
    }
};

const redirectPage = async (req, res) => {
    try {
        const shortUrl = await ShortUrl.findOne({ short: req.params.shortUrl })
        if ( shortUrl === null ) 
            return res.status(404).send({ msg: 'Please provide a url'})
        shortUrl.clicks++;
        await shortUrl.save()
        res.status(200).send({ data: shortUrl })
        // res.redirect(shortUrl.full)
    } catch (error) {
        console.log(error);
    }
};


module.exports = { postUrl, redirectPage, homePage  };