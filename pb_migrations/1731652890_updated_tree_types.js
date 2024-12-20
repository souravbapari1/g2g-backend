/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("lxeuccuy4ddzv1z")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "zsxanj8x",
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
  const collection = dao.findCollectionByNameOrId("lxeuccuy4ddzv1z")

  // remove
  collection.schema.removeField("zsxanj8x")

  return dao.saveCollection(collection)
})
