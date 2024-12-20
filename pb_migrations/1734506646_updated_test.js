/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fqg6idjkeyzutrh")

  collection.options = {
    "query": "SELECT\n(ROW_NUMBER() OVER()) as id,\nCOUNT(users.country) as country\nFROM users WHERE users.user_type = 'individual' AND users.country !=''"
  }

  // remove
  collection.schema.removeField("okht1p0t")

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

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fqg6idjkeyzutrh")

  collection.options = {
    "query": "SELECT\n(ROW_NUMBER() OVER()) as id,\nCOUNT(users.id) as users\nFROM users WHERE users.user_type = 'individual'"
  }

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

  // remove
  collection.schema.removeField("ugihwdn3")

  return dao.saveCollection(collection)
})
