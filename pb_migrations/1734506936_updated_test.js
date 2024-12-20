/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fqg6idjkeyzutrh")

  collection.options = {
    "query": "SELECT\n(users.isBlocked) as id,\nCount(users.id) as total\nFROM users WHERE users.user_type = 'individual'"
  }

  // remove
  collection.schema.removeField("zfvcl0zs")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "220ndv10",
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
    "query": "SELECT\n(users.city) as id,\nCount(users.city) as total\nFROM users WHERE users.user_type = 'individual' AND users.city !=''"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "zfvcl0zs",
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
  collection.schema.removeField("220ndv10")

  return dao.saveCollection(collection)
})
