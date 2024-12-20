/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fqg6idjkeyzutrh")

  collection.options = {
    "query": "SELECT \n     (ROW_NUMBER() OVER()) AS id,\n   COUNT(micro_impact.userData) as users\nFROM \n    micro_impact\n"
  }

  // remove
  collection.schema.removeField("3gwe3pkh")

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

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fqg6idjkeyzutrh")

  collection.options = {
    "query": "SELECT \n     (ROW_NUMBER() OVER()) AS id,\n   SUM(micro_impact.userData) as users\nFROM \n    micro_impact\n"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "3gwe3pkh",
    "name": "users",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSize": 1
    }
  }))

  // remove
  collection.schema.removeField("9uh3efow")

  return dao.saveCollection(collection)
})
