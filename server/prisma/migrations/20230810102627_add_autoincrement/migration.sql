/*
  Warnings:

  - The primary key for the `Subcategory` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `subcategoryID` on the `Subcategory` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Subcategory" (
    "subcategoryID" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "categoryID" INTEGER NOT NULL,
    CONSTRAINT "Subcategory_categoryID_fkey" FOREIGN KEY ("categoryID") REFERENCES "Category" ("categoryID") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Subcategory" ("categoryID", "description", "image", "name", "subcategoryID") SELECT "categoryID", "description", "image", "name", "subcategoryID" FROM "Subcategory";
DROP TABLE "Subcategory";
ALTER TABLE "new_Subcategory" RENAME TO "Subcategory";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
