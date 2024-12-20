/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("mbxepr0hrjz7crg")

  collection.indexes = [
    "CREATE UNIQUE INDEX `idx_CZyIYry` ON `blogs` (`slug`)"
  ]

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("mbxepr0hrjz7crg")

  collection.indexes = []

  return dao.saveCollection(collection)
})
