/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "mr1xmz86v569kuh",
    "created": "2024-10-26 15:52:29.781Z",
    "updated": "2024-10-26 15:52:29.781Z",
    "name": "tree_reports",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "eiuppldx",
        "name": "tree",
        "type": "relation",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "e7m4kwgf2i2yb4z",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": null
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
  const collection = dao.findCollectionByNameOrId("mr1xmz86v569kuh");

  return dao.deleteCollection(collection);
})
