/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fqg6idjkeyzutrh")

  collection.options = {
    "query": "SELECT\n(ROW_NUMBER() OVER()) as id,\n(users.country) as country\nFROM users WHERE users.user_type = 'individual' AND users.country !=''"
  }

  // remove
  collection.schema.removeField("ugihwdn3")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "fi3gyp42",
    "name": "country",
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
    "query": "SELECT\n(ROW_NUMBER() OVER()) as id,\nCOUNT(users.country) as country\nFROM users WHERE users.user_type = 'individual' AND users.country !=''"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ugihwdn3",
    "name": "country",
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
  collection.schema.removeField("fi3gyp42")

  return dao.saveCollection(collection)
})
