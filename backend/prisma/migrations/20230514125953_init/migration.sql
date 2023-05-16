/*
  Warnings:

  - A unique constraint covering the columns `[practitioner_id]` on the table `Practitioners` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Practitioners_practitioner_id_key" ON "Practitioners"("practitioner_id");
