/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fqg6idjkeyzutrh")

  collection.options = {
    "query": " SELECT (ROW_NUMBER() OVER()) AS id,\n         COALESCE(COUNT(micro_actions.partners),0) AS partners\n        FROM \n            micro_actions"
  }

  // remove
  collection.schema.removeField("ovezyvc0")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "sfobrma4",
    "name": "partners",
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
    "query": " SELECT (ROW_NUMBER() OVER()) AS id,\n         COALESCE(COUNT(micro_actions.id),0) AS total\n        FROM \n            micro_actions"
  }

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

  // remove
  collection.schema.removeField("sfobrma4")

  return dao.saveCollection(collection)
})
