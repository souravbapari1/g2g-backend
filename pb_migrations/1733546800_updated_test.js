/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fqg6idjkeyzutrh")

  collection.options = {
    "query": " SELECT \n            (ROW_NUMBER() OVER()) AS id,\n            COALESCE(COUNT(micro_impact.impact), 0) AS impact\n        FROM \n            micro_impact\n        WHERE \n            micro_impact.micro_action = '8s4l78txpodtz0j'"
  }

  // remove
  collection.schema.removeField("mzvoyxr9")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "nv6g69pk",
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
    "query": " SELECT \n            (ROW_NUMBER() OVER()) AS id,\n            COALESCE(SUM(micro_impact.impact), 0) AS impact\n        FROM \n            micro_impact\n        WHERE \n            micro_impact.micro_action = '8s4l78txpodtz0j'"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "mzvoyxr9",
    "name": "impact",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSize": 1
    }
  }))

  // remove
  collection.schema.removeField("nv6g69pk")

  return dao.saveCollection(collection)
})
