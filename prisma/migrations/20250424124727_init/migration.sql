-- CreateEnum
CREATE TYPE "Role" AS ENUM ('USER', 'ADMIN', 'STATION');

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT,
    "documento" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "role" "Role" NOT NULL DEFAULT 'USER',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Station" (
    "id" SERIAL NOT NULL,
    "code" TEXT NOT NULL,
    "lat" DOUBLE PRECISION NOT NULL,
    "long" DOUBLE PRECISION NOT NULL,
    "muni" TEXT NOT NULL,
    "estado" TEXT NOT NULL,
    "userId" INTEGER,
    "role" "Role" NOT NULL DEFAULT 'STATION',
    "token" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Station_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Reading" (
    "id" SERIAL NOT NULL,
    "stationId" INTEGER NOT NULL,
    "vaz" DOUBLE PRECISION,
    "prec" DOUBLE PRECISION,
    "lux" DOUBLE PRECISION,
    "irr_lux" DOUBLE PRECISION,
    "temp" DOUBLE PRECISION,
    "pres" DOUBLE PRECISION,
    "umi" DOUBLE PRECISION,
    "carga" DOUBLE PRECISION,
    "v_gen" DOUBLE PRECISION,
    "a_gen" DOUBLE PRECISION,
    "w_gen" DOUBLE PRECISION,
    "irr_gen" DOUBLE PRECISION,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Reading_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_id_key" ON "User"("id");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_documento_key" ON "User"("documento");

-- CreateIndex
CREATE UNIQUE INDEX "Station_id_key" ON "Station"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Station_code_key" ON "Station"("code");

-- CreateIndex
CREATE UNIQUE INDEX "Station_token_key" ON "Station"("token");

-- CreateIndex
CREATE UNIQUE INDEX "Reading_id_key" ON "Reading"("id");

-- AddForeignKey
ALTER TABLE "Station" ADD CONSTRAINT "Station_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reading" ADD CONSTRAINT "Reading_stationId_fkey" FOREIGN KEY ("stationId") REFERENCES "Station"("id") ON DELETE CASCADE ON UPDATE CASCADE;
