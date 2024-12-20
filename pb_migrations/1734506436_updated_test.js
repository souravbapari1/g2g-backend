/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fqg6idjkeyzutrh")

  collection.options = {
    "query": "SELECT\n(ROW_NUMBER() OVER()) as id,\nCOUNT(users.id) as users\nFROM users WHERE users.user_type = ''"
  }

  // remove
  collection.schema.removeField("7nyhmics")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "zkhezyyn",
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
    "query": "SELECT\n(ROW_NUMBER() OVER()) as id,\nCOUNT(users.id) as users\nFROM users"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "7nyhmics",
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
  collection.schema.removeField("zkhezyyn")

  return dao.saveCollection(collection)
})
