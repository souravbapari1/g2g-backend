/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("yjks7zp6rdqr3rj")

  collection.options = {
    "query": "SELECT\n  (ROW_NUMBER() OVER()) as id,\n  payments.user,\n  SUM(payments.amount * payments.quantity) as total\nFROM payments WHERE payments.status = \"paid\"\nGROUP BY payments.user"
  }

  // remove
  collection.schema.removeField("bwzneoya")

  // remove
  collection.schema.removeField("y9kg6pln")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "xtumix7v",
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
    "id": "zi6sqvhh",
    "name": "total",
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
    "query": "SELECT\n  (ROW_NUMBER() OVER()) as id,\n  payments.user,\n  SUM(payments.amount) as total\nFROM payments WHERE payments.status = \"paid\"\nGROUP BY payments.user"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "bwzneoya",
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
    "id": "y9kg6pln",
    "name": "total",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSize": 1
    }
  }))

  // remove
  collection.schema.removeField("xtumix7v")

  // remove
  collection.schema.removeField("zi6sqvhh")

  return dao.saveCollection(collection)
})
