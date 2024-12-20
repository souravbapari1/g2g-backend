/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fqg6idjkeyzutrh")

  collection.options = {
    "query": "SELECT\n(ROW_NUMBER() OVER()) as id,\nCOUNT(users.id) as users\nFROM users"
  }

  // remove
  collection.schema.removeField("45179qvm")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "7nyhmics",
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

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fqg6idjkeyzutrh")

  collection.options = {
    "query": "SELECT\n(ROW_NUMBER() OVER()) as id,\nprojects.operated_by as users\nFROM projects"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "45179qvm",
    "name": "users",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": null
    }
  }))

  // remove
  collection.schema.removeField("7nyhmics")

  return dao.saveCollection(collection)
})
