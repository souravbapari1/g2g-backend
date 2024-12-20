/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "jmhv8f7v9tz210l",
    "created": "2024-11-13 05:31:51.124Z",
    "updated": "2024-11-13 05:31:51.124Z",
    "name": "accredation_standars",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "24j38ryk",
        "name": "name",
        "type": "text",
        "required": false,
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
      "CREATE UNIQUE INDEX `idx_nZO0Exz` ON `accredation_standars` (`name`)"
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
  const collection = dao.findCollectionByNameOrId("jmhv8f7v9tz210l");

  return dao.deleteCollection(collection);
})
