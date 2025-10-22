import sql from "@/sql/db";

export const data = await sql`
  SELECT * from day;`;
