/*
  Warnings:

  - You are about to alter the column `categoryID` on the `Item` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.
  - You are about to alter the column `subcategoryID` on the `Item` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Item" (
    "itemID" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "price" REAL NOT NULL,
    "quantityInStock" INTEGER NOT NULL,
    "categoryID" INTEGER NOT NULL,
    "subcategoryID" INTEGER NOT NULL,
    "image" TEXT NOT NULL,
    CONSTRAINT "Item_categoryID_fkey" FOREIGN KEY ("categoryID") REFERENCES "Category" ("categoryID") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Item_subcategoryID_fkey" FOREIGN KEY ("subcategoryID") REFERENCES "Subcategory" ("subcategoryID") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Item" ("categoryID", "description", "image", "itemID", "name", "price", "quantityInStock", "subcategoryID") SELECT "categoryID", "description", "image", "itemID", "name", "price", "quantityInStock", "subcategoryID" FROM "Item";
DROP TABLE "Item";
ALTER TABLE "new_Item" RENAME TO "Item";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
