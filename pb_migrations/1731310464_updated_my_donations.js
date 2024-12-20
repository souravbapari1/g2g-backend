/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("yjks7zp6rdqr3rj")

  collection.options = {
    "query": "SELECT\n  (payments.user) as id,\n  payments.user,\n  SUM(payments.amount) as totalAmount,\n  SUM(payments.quantity) as totalQ\nFROM payments WHERE payments.status = \"paid\"\nGROUP BY payments.user"
  }

  // remove
  collection.schema.removeField("hohinzrc")

  // remove
  collection.schema.removeField("28dvqyvn")

  // remove
  collection.schema.removeField("jfxupydm")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "fgmp5cbd",
    "name": "user",
    "type": "relation",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "iaj9chf5",
    "name": "totalAmount",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSize": 1
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "qwtplwd1",
    "name": "totalQ",
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
  const collection = dao.findCollectionByNameOrId("yjks7zp6rdqr3rj")

  collection.options = {
    "query": "SELECT\n  (ROW_NUMBER() OVER()) as id,\n  payments.user,\n  SUM(payments.amount) as totalAmount,\n  SUM(payments.quantity) as totalQ\nFROM payments WHERE payments.status = \"paid\"\nGROUP BY payments.user"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "hohinzrc",
    "name": "user",
    "type": "relation",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "28dvqyvn",
    "name": "totalAmount",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSize": 1
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "jfxupydm",
    "name": "totalQ",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSize": 1
    }
  }))

  // remove
  collection.schema.removeField("fgmp5cbd")

  // remove
  collection.schema.removeField("iaj9chf5")

  // remove
  collection.schema.removeField("qwtplwd1")

  return dao.saveCollection(collection)
})
