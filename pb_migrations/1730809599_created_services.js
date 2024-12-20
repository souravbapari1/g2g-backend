/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "l7w4czjsvpxuggd",
    "created": "2024-11-05 12:26:39.656Z",
    "updated": "2024-11-05 12:26:39.656Z",
    "name": "services",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "xzjlktrz",
        "name": "title",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "m7orzia4",
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
            "image/jpm",
            "image/jxs",
            "image/gif",
            "image/webp",
            "image/tiff",
            "image/vnd.djvu",
            "image/x-icon",
            "image/bmp",
            "image/vnd.dwg",
            "image/bpg",
            "image/heic-sequence",
            "image/heic",
            "image/x-icns",
            "image/heif",
            "image/heif-sequence",
            "image/x-gimp-pat",
            "image/x-xcf",
            "image/vnd.radiance",
            "image/x-gimp-gbr",
            "image/svg+xml",
            "image/jxr",
            "image/avif"
          ],
          "thumbs": [],
          "maxSelect": 1,
          "maxSize": 5242880,
          "protected": false
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("l7w4czjsvpxuggd");

  return dao.deleteCollection(collection);
})
