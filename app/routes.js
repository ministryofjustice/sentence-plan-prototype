const express = require('express')
const router = express.Router()


// Search offenders from default session data file and render view
router.get('/offender', (req, res) => {
  const offender = req.session.data['offenders'].filter(offender => offender.id === req.session.data['id'])
  res.locals.offender = offender[0]
  res.render('offender/index')
})








// Add your routes above the module.exports line
module.exports = router
