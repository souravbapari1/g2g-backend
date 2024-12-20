/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "g3aixcta21039cl",
    "created": "2024-11-03 08:21:40.335Z",
    "updated": "2024-11-03 08:21:40.335Z",
    "name": "project_status",
    "type": "view",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "9owxrntd",
        "name": "status",
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
        "id": "mnp7top7",
        "name": "total",
        "type": "number",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "noDecimal": false
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {
      "query": "SELECT\n  (ROW_NUMBER() OVER()) as id,\n  projects.status,\n  count(projects.status) as total\nFROM projects\nGROUP BY projects.status\n"
    }
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("g3aixcta21039cl");

  return dao.deleteCollection(collection);
})
