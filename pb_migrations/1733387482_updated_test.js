/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fqg6idjkeyzutrh")

  collection.options = {
    "query": "SELECT \n     (ROW_NUMBER() OVER()) AS id,\n   (micro_impact.userData) as users\nFROM \n    micro_impact\n"
  }

  // remove
  collection.schema.removeField("9uh3efow")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "lahllfwu",
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
    "query": "SELECT \n     (ROW_NUMBER() OVER()) AS id,\n   COUNT(micro_impact.userData) as users\nFROM \n    micro_impact\n"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "9uh3efow",
    "name": "users",
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
  collection.schema.removeField("lahllfwu")

  return dao.saveCollection(collection)
})
