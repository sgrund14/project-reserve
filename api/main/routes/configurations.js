'use strict'

const { Router } = require('express')

const router = Router()

// GET all configurations
router.get('/configurations', (req, res) => {
  const { db } = req
  db.configuration
    .findAll({
      order: ['id'],
    })
    .then((configurations) => {
      res.json(configurations)
    })
})

// GET one configuration by id
router.get('/configurations/:id', (req, res) => {
  const { db } = req

  const id = req.params.id
  db.configuration
    .find({
      where: { id },
    })
    .then((configuration) => {
      res.json(configuration)
    })
})

// POST single configuration 
router.post('/configurations', (req, res) => {
  const { db } = req

  const task = req.body.task
  db.patient
    .create({
      task,
      urgency: null,
    })
    .then((newTodo) => {
      res.json(newTodo)
    })
})

module.exports = router
