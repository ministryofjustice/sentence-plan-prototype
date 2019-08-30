const express = require('express')
const router = express.Router()


// On sign out delete session data
router.get('/signout', function (req, res) {
  req.session.destroy()
  res.redirect('/sign-in/')
})

// Close plan
router.get('/offender/plan-closed', function (req, res) {
  req.session.destroy()
  res.locals.planClosed = 'The plan has been closed'
  res.redirect('/offender?plan-closed=true')
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

router.get('/offender/plan-saved', (req, res) => {
  res.render('offender/index', { 'planSaved' : 'The plan has been saved' });
})

router.get('/offender/step/plan-updated', (req, res) => {
  res.render('offender/step/index', { 'planUpdated' : 'The step has been updated' });
})




router.get('/offender/print-page', (req, res) => {
  let printChoice = req.session.data['print']

  if (printChoice == 'Full plan') {
    res.render('offender/print/full')
  } else {
    res.render('offender/print/overview')
  }
})








// Add your routes above the module.exports line
module.exports = router
