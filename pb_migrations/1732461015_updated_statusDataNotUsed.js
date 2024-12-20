/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("516vetad7h0fwp3")

  collection.options = {
    "query": "SELECT\n  (ROW_NUMBER() OVER()) as id,\n  users.user_type,\n  count(users.id) as total\nFROM users\nGROUP BY users.user_type;"
  }

  // remove
  collection.schema.removeField("pq5fvf0w")

  // remove
  collection.schema.removeField("urt4fypn")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "dynr2nwy",
    "name": "user_type",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "individual",
        "ambassador",
        "partner"
      ]
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "u81xtxjp",
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
  const collection = dao.findCollectionByNameOrId("516vetad7h0fwp3")

  collection.options = {
    "query": "SELECT\n  (ROW_NUMBER() OVER()) as id,\n  users.user_type,\n  users.first_name\nFROM users\nGROUP BY users.user_type;"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "pq5fvf0w",
    "name": "user_type",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "individual",
        "ambassador",
        "partner"
      ]
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "urt4fypn",
    "name": "first_name",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // remove
  collection.schema.removeField("dynr2nwy")

  // remove
  collection.schema.removeField("u81xtxjp")

  return dao.saveCollection(collection)
})
