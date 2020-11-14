const router = require('express').Router();

const { postUrl, redirectPage, homePage } = require('../controllers/url');

router.get('/', homePage);
router.post('/', postUrl);
router.get('/:shortUrl', redirectPage);

module.exports = router ;

