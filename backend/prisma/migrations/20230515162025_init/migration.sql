-- AlterTable
ALTER TABLE "User" ALTER COLUMN "password" SET DEFAULT (crypt('', gen_salt('bf')));
