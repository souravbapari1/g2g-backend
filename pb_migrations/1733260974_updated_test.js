/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fqg6idjkeyzutrh")

  collection.options = {
    "query": "SELECT \n     (ROW_NUMBER() OVER()) AS id,\n   academics_requests.applicationData  as Amount\nFROM \n    academics_requests\n"
  }

  // remove
  collection.schema.removeField("yvfgjhht")

  // remove
  collection.schema.removeField("cngmzfl5")

  // remove
  collection.schema.removeField("3lbdzmtg")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "lohtqfmh",
    "name": "Amount",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSize": 2000000
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fqg6idjkeyzutrh")

  collection.options = {
    "query": "SELECT \n     (ROW_NUMBER() OVER()) AS id,\n    memberships_payments.id AS payment_id,\n    users.city AS city,\n    COUNT(memberships_payments.id) AS total_payments\nFROM \n    memberships_payments\nJOIN \n    users ON memberships_payments.user = users.id\nGROUP BY \n    memberships_payments.id, users.city\nORDER BY \n    city"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "yvfgjhht",
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
    "id": "cngmzfl5",
    "name": "city",
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
    "id": "3lbdzmtg",
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
  collection.schema.removeField("lohtqfmh")

  return dao.saveCollection(collection)
})
