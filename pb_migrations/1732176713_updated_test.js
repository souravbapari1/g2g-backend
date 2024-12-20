/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fqg6idjkeyzutrh")

  collection.options = {
    "query": "SELECT\ntrees.id,\ntrees.unit,\ntrees.status,\nunit_types.parameters,\nunit_types.sdg,\nunit_types.orm_unit,\nunit_types.unit as meserment\nFROM trees\nJOIN unit_types ON unit_types.id = trees.unit\nWHERE trees.unit != \"\" AND trees.status != \"not planted\" AND trees.status != \"dead\"\nGROUP BY trees.id"
  }

  // remove
  collection.schema.removeField("ccnjqmql")

  // remove
  collection.schema.removeField("sfranr1b")

  // remove
  collection.schema.removeField("evxerzo1")

  // remove
  collection.schema.removeField("meveakrx")

  // remove
  collection.schema.removeField("au0xgghr")

  // remove
  collection.schema.removeField("te8jdqrq")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "03x11mri",
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
    "id": "veczb3zc",
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
    "id": "ltvderxe",
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
    "id": "apt65d9o",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "e2wmz2va",
    "name": "orm_unit",
    "type": "text",
    "required": true,
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
    "id": "iizwxog7",
    "name": "meserment",
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

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fqg6idjkeyzutrh")

  collection.options = {
    "query": "SELECT\ntrees.id,\ntrees.unit,\ntrees.status,\nunit_types.parameters,\nunit_types.sdg,\nunit_types.orm_unit,\nunit_types.unit as unit_me\nFROM trees\nJOIN unit_types ON unit_types.id = trees.unit\nWHERE trees.unit != \"\" AND trees.status != \"not planted\" AND trees.status != \"dead\"\nGROUP BY trees.id"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ccnjqmql",
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
    "id": "sfranr1b",
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
    "id": "evxerzo1",
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
    "id": "meveakrx",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "au0xgghr",
    "name": "orm_unit",
    "type": "text",
    "required": true,
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
    "id": "te8jdqrq",
    "name": "unit_me",
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

  // remove
  collection.schema.removeField("03x11mri")

  // remove
  collection.schema.removeField("veczb3zc")

  // remove
  collection.schema.removeField("ltvderxe")

  // remove
  collection.schema.removeField("apt65d9o")

  // remove
  collection.schema.removeField("e2wmz2va")

  // remove
  collection.schema.removeField("iizwxog7")

  return dao.saveCollection(collection)
})
