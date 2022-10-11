-- CreateTable
CREATE TABLE "Player" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "x" DOUBLE PRECISION NOT NULL,
    "y" DOUBLE PRECISION NOT NULL,
    "r" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Player_pkey" PRIMARY KEY ("id")
);
