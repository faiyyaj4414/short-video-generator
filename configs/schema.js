import { boolean } from "drizzle-orm/gel-core";
import { pgTable } from "drizzle-orm/pg-core";
import { pgTable, serial, varchar, boolean } from "drizzle-orm/pg-core";
export const users=pgTable('users',{
    id:serial('id').primaryKey(),
    name:varchar('name').notNull(),
    email:varchar('email').notNull(),
    imageUrl:varchar('imageUrl'),
    subscription:boolean('subscription').default(false) 
})