# UBQTS_Web

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Getting Started on Backend -- Postgresql
run the following bash command in WSL
```bash
# to install postgresql
sudo apt update
sudo apt install postgresql postgresql-contrib

# to check the version of postgresql
psql --version

# to initialize postgresql database
sudo service postgresql initdb

# to start postgresql
sudo service postgresql start


# or run the following command if you have already installed postgresql
sudo -u postgres pg_ctlcluster 12 main start    # you can change 12 into the version of your postgre
```

if you are using Docker, run the following command
```bash
# to start postgresql
docker run --name my-postgres -e POSTGRES_PASSWORD=mysecretpassword -p 5432:5432 -d postgres
```

### PostgreSQL -- Create User and Database
```bash
# 1. log in as postgre super user
sudo -i -u postgres

# 2. enter PostgreSQL interact mode
psql
```
thus you have entered the postgre as super user
```sql
-- create user 
CREATE USER your_username WITH PASSWORD 'your_password';
-- change user password
ALTER USER your_username WITH PASSWORD 'newpassword';

-- create database
CREATE DATABASE mydatabase;
-- grant database privileges to user
GRANT ALL PRIVILEGES ON DATABASE mydatabase TO my_username;

-- create table or import data
CREATE TABLE ads (
    id SERIAL PRIMARY KEY,
    picture TEXT
);

-- other commands
\du -- list all users
\l  -- list all database
\c  -- move to database
\dp -- check privilege
```
thus you have finished creating database and table

remember to change your `.env` file into your environment variable.
```dotenv
DATABASE_URL="postgresql://username:password@localhost:5432/database"
```
run prisma
```bash
npx prisma generate
npx prisma db pull
```
remember to add model into `schema.prisma` after running `npx prisma generate`

thus you have finished the PostgreSQL setup

## Getting Started on Backend -- Prisma
use the command
```bash
npx prisma studio
```
to open GUI for prisma container

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
