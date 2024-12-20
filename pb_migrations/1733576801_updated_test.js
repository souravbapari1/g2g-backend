/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fqg6idjkeyzutrh")

  collection.options = {
    "query": " SELECT (ROW_NUMBER() OVER()) AS id,\n         COALESCE(COUNT(micro_actions.id),0) AS total\n        FROM \n            micro_actions"
  }

  // remove
  collection.schema.removeField("jl3za3vc")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ovezyvc0",
    "name": "total",
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
    "query": " SELECT (ROW_NUMBER() OVER()) AS id,\n         COALESCE(COUNT(micro_impact.user),0) AS impact\n        FROM \n            micro_impact\n        WHERE \n            micro_impact.micro_action = 'gv16c4x8um3wmvi' AND micro_impact.user != ''"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "jl3za3vc",
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
  collection.schema.removeField("ovezyvc0")

  return dao.saveCollection(collection)
})
