//  ********  Routing Module for HTML Endpoints  **********  //

//  Load modules
const express = require('express')

//  Declares "router" and assigns it the express.Router function, which gives us the .get method
const router = express.Router()

//  HTML Endpoints
router.get('/', function (req, res) {
  res.render('pages/index.ejs') 
})

router.get('/subscribe', function (req, res) {
  res.render('pages/subscribe.ejs')
})

router.get('/gallery', function (req, res) {
  res.render('pages/gallery.ejs')
})

router.get('/team', function (req, res) {
  res.render('pages/team.ejs')
})

router.get('/admin', function (req, res) {
  res.render('pages/admin.ejs')
})

//  Defines the script as a module
module.exports = router