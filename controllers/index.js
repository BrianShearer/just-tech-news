 router = require('express').Router();

const apiRoutes = require('./api');
// lines 5 and 7 are added later after troubleshooting with BCS
const homeRoutes = require('./home-routes.js');

router.use('/', homeRoutes);

router.use('/api', apiRoutes);

router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;