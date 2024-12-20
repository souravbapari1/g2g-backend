/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "jh11rscicoiu2y6",
    "created": "2024-12-08 06:53:42.687Z",
    "updated": "2024-12-08 06:53:42.687Z",
    "name": "podcast_catagory",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "4qywlros",
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
      }
    ],
    "indexes": [
      "CREATE UNIQUE INDEX `idx_56wcHBc` ON `podcast_catagory` (`name`)"
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
  const collection = dao.findCollectionByNameOrId("jh11rscicoiu2y6");

  return dao.deleteCollection(collection);
})
