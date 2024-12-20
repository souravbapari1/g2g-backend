/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fqg6idjkeyzutrh")

  collection.options = {
    "query": "SELECT \n     (ROW_NUMBER() OVER()) AS id,\n    memberships_payments.id AS payment_id,\n    users.city AS user_name,\n    COUNT(memberships_payments.id) AS total_payments\nFROM \n    memberships_payments\nJOIN \n    users ON memberships_payments.user = users.id\nGROUP BY \n    memberships_payments.id, users.city\nORDER BY \n    user_name"
  }

  // remove
  collection.schema.removeField("ms9qeihv")

  // remove
  collection.schema.removeField("opramgt2")

  // remove
  collection.schema.removeField("ukirwcc1")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "dzqy9pyk",
    "name": "payment_id",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "sv5sc5hcu74o13y",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "hrcvidsq",
    "name": "user_name",
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
    "id": "vvxwcx7i",
    "name": "total_payments",
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
    "query": "SELECT \n     (ROW_NUMBER() OVER()) AS id,\n    memberships_payments.id AS payment_id,\n    users.city AS user_name,\n    COUNT(memberships_payments.id) AS total_payments\nFROM \n    memberships_payments\nJOIN \n    users ON memberships_payments.user = users.id\nGROUP BY \n    memberships_payments.id, users.city\nORDER BY \n    id"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ms9qeihv",
    "name": "payment_id",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "sv5sc5hcu74o13y",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "opramgt2",
    "name": "user_name",
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
    "id": "ukirwcc1",
    "name": "total_payments",
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
  collection.schema.removeField("dzqy9pyk")

  // remove
  collection.schema.removeField("hrcvidsq")

  // remove
  collection.schema.removeField("vvxwcx7i")

  return dao.saveCollection(collection)
})
