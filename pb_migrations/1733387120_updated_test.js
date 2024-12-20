/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fqg6idjkeyzutrh")

  collection.options = {
    "query": "SELECT \n     (ROW_NUMBER() OVER()) AS id,\n   SUM(micro_impact.impact) as impact\nFROM \n    micro_impact\n"
  }

  // remove
  collection.schema.removeField("jqvwv6gb")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "qput0j5v",
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
    "query": "SELECT \n     (ROW_NUMBER() OVER()) AS id,\n  SUM(micro_impact.impact) as impact\nFROM \n    micro_impact\n"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "jqvwv6gb",
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
  collection.schema.removeField("qput0j5v")

  return dao.saveCollection(collection)
})
