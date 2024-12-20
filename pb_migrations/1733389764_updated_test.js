/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fqg6idjkeyzutrh")

  collection.options = {
    "query": "SELECT \n     (ROW_NUMBER() OVER()) AS id,\n   SUM(micro_impact.impact) as impact\nFROM \n    micro_impact\nWHERE micro_impact.id = 'k55xe7q4atllo59'\n"
  }

  // remove
  collection.schema.removeField("3wvi8nze")

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

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fqg6idjkeyzutrh")

  collection.options = {
    "query": "SELECT \n     (ROW_NUMBER() OVER()) AS id,\n   SUM(micro_impact.impact) as impact\nFROM \n    micro_impact\nWHERE micro_impact.id = 'jlxcffmv43p3b44'\n"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "3wvi8nze",
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
  collection.schema.removeField("gkjt47a0")

  return dao.saveCollection(collection)
})
