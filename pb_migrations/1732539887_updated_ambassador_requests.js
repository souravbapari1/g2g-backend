/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("90c81j7nz8ifk1u")

  collection.indexes = [
    "CREATE UNIQUE INDEX `idx_vwshF1u` ON `ambassador_requests` (`user`)"
  ]

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("90c81j7nz8ifk1u")

  collection.indexes = []

  return dao.saveCollection(collection)
})
