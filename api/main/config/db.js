'use strict'

const Sequelize = require('sequelize')
const env = require('./env')
const sequelize = new Sequelize(
  env.DATABASE,
  env.DATABASE_USERNAME,
  env.DATABASE_PASSWORD,
  {
    dialect: env.DATABASE_DIALECT,
    storage: env.DATABASE_STORAGE,
    define: {
      underscored: true,
    },
  }
)

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

db.patient = require('../models/Patient.js')(sequelize, Sequelize)
db.sourceFile = require('../models/SourceFile.js')(sequelize, Sequelize)
db.configuration = require('../models/Configuration.js')(sequelize, Sequelize)
db.reserveCategory = require('../models/ReserveCategory.js')(sequelize, Sequelize)
db.priority = require('../models/Priority.js')(sequelize, Sequelize)
db.categoryCriteria = require('../models/CategoryCriteria.js')(sequelize, Sequelize)
db.categoryCriteriaElement = require('../models/CategoryCriteriaElement.js')(sequelize, Sequelize)
db.numericCriteria = require('../models/NumericCriteria.js')(sequelize, Sequelize)
db.numericCriteriaBucket = require('../models/NumericCriteriaBucket.js')(sequelize, Sequelize)


db.sourceFile.hasMany(db.patient)
db.sourceFile.hasOne(db.configuration)
db.configuration.hasMany(db.reserveCategory)
db.configuration.hasOne(db.priority)
db.patient.hasMany(db.reserveCategory)
db.priority.hasMany(db.categoryCriteria)
db.priority.hasMany(db.numericCriteria)
db.categoryCriteria.hasMany(db.categoryCriteriaElement)
db.numericCriteria.hasMany(db.numericCriteriaBucket)

module.exports = db
