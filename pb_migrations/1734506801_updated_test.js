/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fqg6idjkeyzutrh")

  collection.options = {
    "query": "SELECT\n(users.city) as id,\n(users.city) as city\nFROM users WHERE users.user_type = 'individual' AND users.city !=''"
  }

  // remove
  collection.schema.removeField("ckhjxbmc")

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

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fqg6idjkeyzutrh")

  collection.options = {
    "query": "SELECT\n(users.country) as id,\n(users.country) as country\nFROM users WHERE users.user_type = 'individual' AND users.country !=''"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ckhjxbmc",
    "name": "country",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSize": 1
    }
  }))

  // remove
  collection.schema.removeField("pjzbxsyb")

  return dao.saveCollection(collection)
})
