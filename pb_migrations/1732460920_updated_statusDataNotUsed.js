/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("516vetad7h0fwp3")

  collection.options = {
    "query": "SELECT\n  (ROW_NUMBER() OVER()) as id,\n  users.first_name,\n  count(users.tree_orders) as total\nFROM users\nGROUP BY users.user_type;"
  }

  // remove
  collection.schema.removeField("nisippw6")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "xmig3htv",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "wee1gpuh",
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
    "query": "SELECT  users.id, users.first_name FROM users;"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "nisippw6",
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
  collection.schema.removeField("xmig3htv")

  // remove
  collection.schema.removeField("wee1gpuh")

  return dao.saveCollection(collection)
})
