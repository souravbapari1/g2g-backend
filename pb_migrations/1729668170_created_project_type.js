/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "cicr7462kdp9f7g",
    "created": "2024-10-23 07:22:50.423Z",
    "updated": "2024-10-23 07:22:50.423Z",
    "name": "project_type",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "kg4tr6zg",
        "name": "name",
        "type": "text",
        "required": true,
        "presentable": true,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "babadirc",
        "name": "parameters",
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
        "id": "npbp0prj",
        "name": "unit_measurement",
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
      "CREATE UNIQUE INDEX `idx_P9ksBfN` ON `project_type` (`name`)"
    ],
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("cicr7462kdp9f7g");

  return dao.deleteCollection(collection);
})
