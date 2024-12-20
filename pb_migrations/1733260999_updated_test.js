/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fqg6idjkeyzutrh")

  collection.options = {
    "query": "SELECT \n     (ROW_NUMBER() OVER()) AS id,\n   academics_requests.academic  as Amount\nFROM \n    academics_requests\n"
  }

  // remove
  collection.schema.removeField("lohtqfmh")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "itzc7efv",
    "name": "Amount",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSize": 2000000
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fqg6idjkeyzutrh")

  collection.options = {
    "query": "SELECT \n     (ROW_NUMBER() OVER()) AS id,\n   academics_requests.applicationData  as Amount\nFROM \n    academics_requests\n"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "lohtqfmh",
    "name": "Amount",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSize": 2000000
    }
  }))

  // remove
  collection.schema.removeField("itzc7efv")

  return dao.saveCollection(collection)
})
