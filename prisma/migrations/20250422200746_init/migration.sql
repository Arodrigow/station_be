/*
  Warnings:

  - Added the required column `estado` to the `Station` table without a default value. This is not possible if the table is not empty.
  - Added the required column `muni` to the `Station` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Station" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "code" TEXT NOT NULL,
    "lat" REAL NOT NULL,
    "long" REAL NOT NULL,
    "muni" TEXT NOT NULL,
    "estado" TEXT NOT NULL,
    "userId" INTEGER,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    CONSTRAINT "Station_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Station" ("code", "created_at", "id", "lat", "long", "updated_at", "userId") SELECT "code", "created_at", "id", "lat", "long", "updated_at", "userId" FROM "Station";
DROP TABLE "Station";
ALTER TABLE "new_Station" RENAME TO "Station";
CREATE UNIQUE INDEX "Station_id_key" ON "Station"("id");
CREATE UNIQUE INDEX "Station_code_key" ON "Station"("code");
CREATE UNIQUE INDEX "Station_userId_key" ON "Station"("userId");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
