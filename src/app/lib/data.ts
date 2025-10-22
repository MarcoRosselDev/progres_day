import sql from "@/sql/db/db";

export const data = await sql`
  SELECT * from day;`;
