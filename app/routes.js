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

router.get('/startsteps', (req, res) => {
  let option = req.session.data['prototype-options']

  if (option == 'Child protection plan') {
    req.session.data['step-description'] = 'Child protection plan'
    req.session.data['step-intervention'] = 'No'
    req.session.data['step-done'] = ['Individual']
    req.session.data['strength'] = 'No'
    req.session.data['step-date-year'] = '2020'
    req.session.data['step-date-month'] = '1'
    req.session.data['step-date-day'] = '31'
    
    res.redirect('/offender/create-plan/steps')
  } else if (option == 'Unpaid work') {
    req.session.data['step-description'] = 'Unpaid work'
    req.session.data['step-intervention'] = 'No'
    req.session.data['step-done'] = ['Individual','Other']
    req.session.data['step-done-other'] = '3rd party supplier'
    req.session.data['strength'] = 'No'
    req.session.data['step-date-year'] = '2020'
    req.session.data['step-date-month'] = '1'
    req.session.data['step-date-day'] = '31'

    res.redirect('/offender/create-plan/steps')
  } else {
    res.redirect('/offender/create-plan/needs')
  }
})

router.get('/offender/plan-saved', (req, res) => {
  res.render('offender/index', { 'planSaved' : 'The plan has been saved' });
})

router.get('/offender/step/step-updated', (req, res) => {
  res.render('offender/step/1', { 'stepUpdated' : 'The step has been updated' });
})

router.get('/offender/step/step-updated-2', (req, res) => {
  res.render('offender/step/2', { 'stepUpdated2' : 'The step has been updated' });
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
