-- CreateEnum
CREATE TYPE "public"."Role" AS ENUM ('user', 'admin', 'super', 'owner');

-- AlterTable
ALTER TABLE "public"."user" ADD COLUMN     "role" "public"."Role" DEFAULT 'user';
