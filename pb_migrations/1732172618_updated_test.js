/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fqg6idjkeyzutrh")

  collection.options = {
    "query": "SELECT\ntrees.id,\ntrees.unit,\ntrees.status,\nunit_types.parameters,\nunit_types.sdg\nFROM trees\nJOIN \nunit_types ON unit_types.id = trees.unit\nWHERE trees.unit != \"\" AND trees.status != \"not planted\" AND trees.status != \"dead\"\nGROUP BY trees.id"
  }

  // remove
  collection.schema.removeField("fumwfla1")

  // remove
  collection.schema.removeField("wmgpyfxb")

  // remove
  collection.schema.removeField("qqeetd5b")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ifqpbnd6",
    "name": "unit",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "1l8ewf3sqxr9gqw",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "rlgiuydk",
    "name": "status",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "new planted",
        "good",
        "poor",
        "dead",
        "producing",
        "not planted",
        "pending"
      ]
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "9wttzkvx",
    "name": "parameters",
    "type": "json",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSize": 2000000
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "zjiienn6",
    "name": "sdg",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "n578zbn2subzjth",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fqg6idjkeyzutrh")

  collection.options = {
    "query": "SELECT\ntrees.id,\ntrees.unit,\ntrees.status,\nunit_types.parameters\nFROM trees\nJOIN \nunit_types ON unit_types.id = trees.unit\nWHERE trees.unit != \"\" AND trees.status != \"not planted\" AND trees.status != \"dead\"\nGROUP BY trees.id"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "fumwfla1",
    "name": "unit",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "1l8ewf3sqxr9gqw",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "wmgpyfxb",
    "name": "status",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "new planted",
        "good",
        "poor",
        "dead",
        "producing",
        "not planted",
        "pending"
      ]
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "qqeetd5b",
    "name": "parameters",
    "type": "json",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSize": 2000000
    }
  }))

  // remove
  collection.schema.removeField("ifqpbnd6")

  // remove
  collection.schema.removeField("rlgiuydk")

  // remove
  collection.schema.removeField("9wttzkvx")

  // remove
  collection.schema.removeField("zjiienn6")

  return dao.saveCollection(collection)
})
