/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fqg6idjkeyzutrh")

  collection.options = {
    "query": " SELECT (ROW_NUMBER() OVER()) AS id,\n         COALESCE(COUNT(micro_impact.impact), 0) AS impact\n        FROM \n            micro_impact\n        WHERE \n            micro_impact.micro_action = 'gv16c4x8um3wmvi'"
  }

  // remove
  collection.schema.removeField("fcaq2zei")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "pu3cyv2s",
    "name": "impact",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSize": 1
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fqg6idjkeyzutrh")

  collection.options = {
    "query": " SELECT (ROW_NUMBER() OVER()) AS id,\n         COALESCE(COUNT(micro_impact.impact), 0) AS impact\n        FROM \n            micro_impact\n        WHERE \n            micro_impact.micro_action = '8s4l78txpodtz0j'"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "fcaq2zei",
    "name": "impact",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSize": 1
    }
  }))

  // remove
  collection.schema.removeField("pu3cyv2s")

  return dao.saveCollection(collection)
})
