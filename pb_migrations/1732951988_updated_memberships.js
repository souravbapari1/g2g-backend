/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vakjsyns00rs90n")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ner2iwbl",
    "name": "image",
    "type": "file",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "mimeTypes": [
        "image/x-xpixmap",
        "image/vnd.adobe.photoshop",
        "image/png",
        "image/vnd.mozilla.apng",
        "image/jpeg",
        "image/jxl",
        "image/jp2",
        "image/jpx",
        "image/jxs",
        "image/gif",
        "image/jpm",
        "image/webp",
        "image/bmp",
        "image/vnd.djvu",
        "image/bpg",
        "image/avif",
        "image/svg+xml"
      ],
      "thumbs": [],
      "maxSelect": 1,
      "maxSize": 5242880,
      "protected": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vakjsyns00rs90n")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ner2iwbl",
    "name": "image",
    "type": "file",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "mimeTypes": [
        "image/x-xpixmap",
        "image/vnd.adobe.photoshop",
        "image/png",
        "image/vnd.mozilla.apng",
        "image/jpeg",
        "image/jxl",
        "image/jp2",
        "image/jpx",
        "image/jxs",
        "image/gif",
        "image/jpm",
        "image/webp",
        "image/bmp",
        "image/vnd.djvu",
        "image/bpg",
        "image/avif"
      ],
      "thumbs": [],
      "maxSelect": 1,
      "maxSize": 5242880,
      "protected": false
    }
  }))

  return dao.saveCollection(collection)
})
