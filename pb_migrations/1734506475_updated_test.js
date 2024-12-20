/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fqg6idjkeyzutrh")

  collection.options = {
    "query": "SELECT\n(ROW_NUMBER() OVER()) as id,\nCOUNT(users.id) as users\nFROM users WHERE users.user_type = 'individual'"
  }

  // remove
  collection.schema.removeField("zkhezyyn")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "okht1p0t",
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
    "query": "SELECT\n(ROW_NUMBER() OVER()) as id,\nCOUNT(users.id) as users\nFROM users WHERE users.user_type = ''"
  }

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

  // remove
  collection.schema.removeField("okht1p0t")

  return dao.saveCollection(collection)
})
