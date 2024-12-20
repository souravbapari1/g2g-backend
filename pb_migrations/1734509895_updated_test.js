/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fqg6idjkeyzutrh")

  collection.options = {
    "query": "SELECT\n(ROW_NUMBER() OVER()) as id,\nCOUNT(users.id) as total\nFROM users WHERE users.user_type = 'individual' AND users.isBlocked = FALSE"
  }

  // remove
  collection.schema.removeField("4qhiuvhi")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "3oxl1a5k",
    "name": "total",
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
    "query": "SELECT\n(ROW_NUMBER() OVER()) as id,\nCount(users.id) as total\nFROM users WHERE users.user_type = 'individual' "
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "4qhiuvhi",
    "name": "total",
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
  collection.schema.removeField("3oxl1a5k")

  return dao.saveCollection(collection)
})
