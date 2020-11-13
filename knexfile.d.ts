export declare const CLIENT: string, DATABASE: string, USERNAME: string, PASSWORD: string, HOSTNAME: string, SCHEMA: string;
declare const _default: {
    client: string;
    connection: {
        host: string;
        database: string;
        user: string;
        password: string;
    };
    migrations: {
        directory: string;
        tableName: string;
    };
    seeds: {
        directory: string;
    };
    pool: {
        min: number;
        max: number;
    }
};
export default _default;
