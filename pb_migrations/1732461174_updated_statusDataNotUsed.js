/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("516vetad7h0fwp3")

  collection.options = {
    "query": "SELECT\n  (ROW_NUMBER() OVER()) as id,\n  users.user_type,\n  count(users.id) as total\nFROM users\nGROUP BY users.user_type;"
  }

  // remove
  collection.schema.removeField("zmeb3ihf")

  // remove
  collection.schema.removeField("hrmfoyxj")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "f4i47td1",
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
    "id": "yracqiwa",
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
    "query": "SELECT\n  (ROW_NUMBER() OVER()) as id,\n  blogs.public,\n  count(blogs.id) as total\nFROM blogs\nGROUP BY blogs.public;"
  }

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

  // remove
  collection.schema.removeField("f4i47td1")

  // remove
  collection.schema.removeField("yracqiwa")

  return dao.saveCollection(collection)
})
