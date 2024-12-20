/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fqg6idjkeyzutrh")

  collection.options = {
    "query": "SELECT\n(users.city) as id,\nCount(users.city) as total\nFROM users WHERE users.user_type = 'individual' AND users.city !=''"
  }

  // remove
  collection.schema.removeField("pjzbxsyb")

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

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fqg6idjkeyzutrh")

  collection.options = {
    "query": "SELECT\n(users.city) as id,\n(users.city) as city\nFROM users WHERE users.user_type = 'individual' AND users.city !=''"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "pjzbxsyb",
    "name": "city",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSize": 1
    }
  }))

  // remove
  collection.schema.removeField("zfvcl0zs")

  return dao.saveCollection(collection)
})
