/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("516vetad7h0fwp3")

  collection.options = {
    "query": "SELECT\n  (ROW_NUMBER() OVER()) as id,\n  blogs.public,\n  count(blogs.id) as total\nFROM blogs\nGROUP BY blogs.public;"
  }

  // remove
  collection.schema.removeField("dynr2nwy")

  // remove
  collection.schema.removeField("u81xtxjp")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "zmeb3ihf",
    "name": "public",
    "type": "bool",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "hrmfoyxj",
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
    "query": "SELECT\n  (ROW_NUMBER() OVER()) as id,\n  users.user_type,\n  count(users.id) as total\nFROM users\nGROUP BY users.user_type;"
  }

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

  // remove
  collection.schema.removeField("zmeb3ihf")

  // remove
  collection.schema.removeField("hrmfoyxj")

  return dao.saveCollection(collection)
})
