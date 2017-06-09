
export interface DatabaseState {
  database: Database;
}

export interface Database {
  name: string;
  size: number;
  tableCount: number;
}
