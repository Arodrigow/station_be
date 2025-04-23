/*
  Warnings:

  - You are about to drop the column `irr` on the `Reading` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Reading" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "stationId" INTEGER NOT NULL,
    "vaz" REAL,
    "prec" REAL,
    "lux" REAL,
    "irr_lux" REAL,
    "temp" REAL,
    "pres" REAL,
    "umi" REAL,
    "carga" REAL,
    "v_gen" REAL,
    "a_gen" REAL,
    "w_gen" REAL,
    "irr_gen" REAL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    CONSTRAINT "Reading_stationId_fkey" FOREIGN KEY ("stationId") REFERENCES "Station" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Reading" ("a_gen", "carga", "created_at", "id", "lux", "prec", "pres", "stationId", "temp", "umi", "updated_at", "v_gen", "vaz", "w_gen") SELECT "a_gen", "carga", "created_at", "id", "lux", "prec", "pres", "stationId", "temp", "umi", "updated_at", "v_gen", "vaz", "w_gen" FROM "Reading";
DROP TABLE "Reading";
ALTER TABLE "new_Reading" RENAME TO "Reading";
CREATE UNIQUE INDEX "Reading_id_key" ON "Reading"("id");
CREATE UNIQUE INDEX "Reading_stationId_key" ON "Reading"("stationId");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
