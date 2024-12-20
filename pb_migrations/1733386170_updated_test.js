/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fqg6idjkeyzutrh")

  collection.options = {
    "query": "SELECT \n     (ROW_NUMBER() OVER()) AS id,\n  SUM(micro_impact.impact) as impact\nFROM \n    micro_impact\n"
  }

  // remove
  collection.schema.removeField("yb06y5ff")

  // remove
  collection.schema.removeField("mpzxfy2v")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "jqvwv6gb",
    "name": "impact",
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
  const collection = dao.findCollectionByNameOrId("fqg6idjkeyzutrh")

  collection.options = {
    "query": "SELECT \n     (ROW_NUMBER() OVER()) AS id,\n   fslp.application,\n  fslp.status\nFROM \n    fslp\n"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "yb06y5ff",
    "name": "application",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSize": 2000000
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "mpzxfy2v",
    "name": "status",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "pending",
        "approved",
        "cancel",
        "complete"
      ]
    }
  }))

  // remove
  collection.schema.removeField("jqvwv6gb")

  return dao.saveCollection(collection)
})
