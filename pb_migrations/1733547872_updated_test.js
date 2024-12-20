/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fqg6idjkeyzutrh")

  collection.options = {
    "query": " SELECT (ROW_NUMBER() OVER()) AS id,\n         COUNT(micro_impact.user) AS impact\n        FROM \n            micro_impact\n        WHERE \n            micro_impact.micro_action = 'gv16c4x8um3wmvi' AND micro_impact.user != ''"
  }

  // remove
  collection.schema.removeField("9gf5rbyb")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "zabts9gb",
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
    "query": " SELECT (ROW_NUMBER() OVER()) AS id,\n         COUNT(micro_impact.user) AS impact\n        FROM \n            micro_impact\n        WHERE \n            micro_impact.micro_action = 'gv16c4x8um3wmvi' AND micro_impact.user != \"\""
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "9gf5rbyb",
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

  // remove
  collection.schema.removeField("zabts9gb")

  return dao.saveCollection(collection)
})
