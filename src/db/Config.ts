export namespace Database {
  export const schema = 'public'
  export const hostName = 'postgres-banners.ccjkae1wpput.eu-central-1.rds.amazonaws.com'
  export const name = 'banners_service'
  export const userName = 'postgres'
  export const password = process.env.DBUserPassword
}
