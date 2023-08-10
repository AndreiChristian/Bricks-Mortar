/*
  Warnings:

  - Added the required column `image` to the `Subcategory` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Subcategory" (
    "subcategoryID" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "categoryID" INTEGER NOT NULL,
    CONSTRAINT "Subcategory_categoryID_fkey" FOREIGN KEY ("categoryID") REFERENCES "Category" ("categoryID") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Subcategory" ("categoryID", "description", "name", "subcategoryID") SELECT "categoryID", "description", "name", "subcategoryID" FROM "Subcategory";
DROP TABLE "Subcategory";
ALTER TABLE "new_Subcategory" RENAME TO "Subcategory";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
