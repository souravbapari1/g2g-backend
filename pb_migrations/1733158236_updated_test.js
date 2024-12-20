/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fqg6idjkeyzutrh")

  collection.options = {
    "query": "SELECT \n     (ROW_NUMBER() OVER()) AS id,\n    memberships_payments.id AS payment_id,\n    users.first_name AS user_name,\n    COUNT(memberships_payments.id) AS total_payments\nFROM \n    memberships_payments\nJOIN \n    users ON memberships_payments.user = users.id\nGROUP BY \n    memberships_payments.id, users.first_name\nORDER BY \n    id"
  }

  // remove
  collection.schema.removeField("zfsbfikg")

  // remove
  collection.schema.removeField("xaunn72v")

  // remove
  collection.schema.removeField("tlccejnn")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "w6ylkxra",
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
    "id": "ouwgzh8d",
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
    "id": "prka1bdi",
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
    "query": "SELECT \n    (ROW_NUMBER() OVER()) AS id,\n    project_type.id AS type,\n    project_type.name AS name,\n    COUNT(projects.id) AS total\nFROM \n    projects\nJOIN \n    project_type ON project_type.id = projects.type\nGROUP BY \n    project_type.id, \n    project_type.name;\n"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "zfsbfikg",
    "name": "type",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "cicr7462kdp9f7g",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "xaunn72v",
    "name": "name",
    "type": "text",
    "required": true,
    "presentable": true,
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
    "id": "tlccejnn",
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
  collection.schema.removeField("w6ylkxra")

  // remove
  collection.schema.removeField("ouwgzh8d")

  // remove
  collection.schema.removeField("prka1bdi")

  return dao.saveCollection(collection)
})
