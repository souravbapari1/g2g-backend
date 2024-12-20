/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fqg6idjkeyzutrh")

  collection.options = {
    "query": "SELECT \n        (ROW_NUMBER() OVER()) AS id,\n        SUM(micro_impact.user) as users\n        FROM \n        micro_impact\n"
  }

  // remove
  collection.schema.removeField("gkjt47a0")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "tiwlx853",
    "name": "users",
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
    "query": "SELECT \n     (ROW_NUMBER() OVER()) AS id,\n   SUM(micro_impact.impact) as impact\nFROM \n    micro_impact\nWHERE micro_impact.id = 'k55xe7q4atllo59'\n"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "gkjt47a0",
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
  collection.schema.removeField("tiwlx853")

  return dao.saveCollection(collection)
})
