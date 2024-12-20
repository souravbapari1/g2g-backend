/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("1l8ewf3sqxr9gqw")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "kluw29a7",
    "name": "color",
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

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("1l8ewf3sqxr9gqw")

  // remove
  collection.schema.removeField("kluw29a7")

  return dao.saveCollection(collection)
})
