/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "nujdk2vdz42f2qw",
    "created": "2024-10-30 12:48:33.232Z",
    "updated": "2024-10-30 12:48:33.232Z",
    "name": "measurements",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "ubjtdcic",
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
      "CREATE UNIQUE INDEX `idx_tbUPdUv` ON `measurements` (`name`)"
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
  const collection = dao.findCollectionByNameOrId("nujdk2vdz42f2qw");

  return dao.deleteCollection(collection);
})
