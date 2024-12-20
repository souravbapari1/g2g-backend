/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "vakjsyns00rs90n",
    "created": "2024-11-26 12:42:03.920Z",
    "updated": "2024-11-26 12:42:03.920Z",
    "name": "memberships",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "vkylqz6v",
        "name": "name",
        "type": "text",
        "required": true,
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
        "id": "trghy9gb",
        "name": "amount",
        "type": "text",
        "required": true,
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
        "id": "urwbruyk",
        "name": "qna",
        "type": "json",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "maxSize": 2000000
        }
      },
      {
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
      }
    ],
    "indexes": [
      "CREATE UNIQUE INDEX `idx_wER9ioR` ON `memberships` (`name`)"
    ],
    "listRule": "",
    "viewRule": "",
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("vakjsyns00rs90n");

  return dao.deleteCollection(collection);
})
