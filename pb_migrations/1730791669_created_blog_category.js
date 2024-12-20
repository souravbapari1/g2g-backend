/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "5ur8wncsk0unctg",
    "created": "2024-11-05 07:27:49.073Z",
    "updated": "2024-11-05 07:27:49.073Z",
    "name": "blog_category",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "sskwniui",
        "name": "title",
        "type": "text",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [
      "CREATE UNIQUE INDEX `idx_oTd4L3J` ON `blog_category` (`title`)"
    ],
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
  const collection = dao.findCollectionByNameOrId("5ur8wncsk0unctg");

  return dao.deleteCollection(collection);
})
