const express = require('express')
const router = express.Router()


// On sign out delete session data
router.get('/signout', function (req, res) {
  req.session.destroy()
  res.redirect('/sign-in/')
})



// Search offenders from default session data file and render view
router.get('/offender*', (req, res, next) => {
  if (req.session.data['id']) {
    currentOffender = req.session.data['id']
  } else {
    currentOffender = "1"
  }
  
  const offender = req.session.data['offenders'].filter(offender => offender.id === currentOffender)
  res.locals.offender = offender[0]
  next()
})








// Add your routes above the module.exports line
module.exports = router
