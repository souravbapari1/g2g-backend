/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("g3aixcta21039cl")

  collection.options = {
    "query": "SELECT \n    (ROW_NUMBER() OVER()) AS id,\n    project_type.id AS project_type,\n    COUNT(projects.id) AS total\nFROM \n    projects\nJOIN \n    project_type ON project_type.id = projects.type\nGROUP BY \n    project_type.id;\n\n"
  }

  // remove
  collection.schema.removeField("o1soe2yq")

  // remove
  collection.schema.removeField("y4rmz3tx")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "icfozeh7",
    "name": "project_type",
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
    "id": "sxein7bh",
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
  const collection = dao.findCollectionByNameOrId("g3aixcta21039cl")

  collection.options = {
    "query": "SELECT \n    (ROW_NUMBER() OVER()) AS id,\n    project_type.id AS project_type_id,\n    COUNT(projects.id) AS total\nFROM \n    projects\nJOIN \n    project_type ON project_type.id = projects.type\nGROUP BY \n    project_type.id;\n\n"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "o1soe2yq",
    "name": "project_type_id",
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
    "id": "y4rmz3tx",
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
  collection.schema.removeField("icfozeh7")

  // remove
  collection.schema.removeField("sxein7bh")

  return dao.saveCollection(collection)
})
