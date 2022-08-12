export default ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: env('DATABASE_HOST', 'db-mysql-tor1-77644-do-user-9839797-0.b.db.ondigitalocean.com'),
      port: env.int('DATABASE_PORT', 25060),
      database: env('DATABASE_NAME', 'dbmain'),
      user: env('DATABASE_USERNAME', 'doadmin'),
      password: env('DATABASE_PASSWORD', 'AVNS_m82Wx6aJyeUzmNI0F8T'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
