/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fqg6idjkeyzutrh")

  collection.options = {
    "query": "SELECT \n     (ROW_NUMBER() OVER()) AS id,\n   (micro_impact.impact) as impact\nFROM \n    micro_impact\nWHERE micro_impact.id = 'jlxcffmv43p3b44'\n"
  }

  // remove
  collection.schema.removeField("ynukiyxy")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "yjbszlam",
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
    "query": "SELECT \n     (ROW_NUMBER() OVER()) AS id,\n   (micro_impact.impact) as impact\nFROM \n    micro_impact\nWHERE micro_impact.id = 'gv16c4x8um3wmvi'\n"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ynukiyxy",
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
  collection.schema.removeField("yjbszlam")

  return dao.saveCollection(collection)
})
