/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fqg6idjkeyzutrh")

  collection.options = {
    "query": " SELECT (ROW_NUMBER() OVER()) AS id,\n         COUNT(micro_impact.user) AS impact\n        FROM \n            micro_impact\n        WHERE \n            micro_impact.micro_action = 'gv16c4x8um3wmvi' "
  }

  // remove
  collection.schema.removeField("yetogjdg")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ofrzxikw",
    "name": "impact",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fqg6idjkeyzutrh")

  collection.options = {
    "query": " SELECT (ROW_NUMBER() OVER()) AS id,\n         COALESCE(COUNT(micro_impact.user), 0) AS impact\n        FROM \n            micro_impact\n        WHERE \n            micro_impact.micro_action = 'gv16c4x8um3wmvi'"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "yetogjdg",
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
  collection.schema.removeField("ofrzxikw")

  return dao.saveCollection(collection)
})
