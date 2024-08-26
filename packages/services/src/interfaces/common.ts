export interface IRecordService<T> {
  loadRecords(): Promise<void>;
  getRecords(): T[];
  updateRecord(id: number, newData: Partial<T>): Promise<void>;
  insertRecord(newRecord: T): Promise<void>;
  deleteRecord(id: number): Promise<void>;
  saveRecords(): Promise<void>;
}

export interface IWebhookService<T> {
  emitEvent(eventType: string, data: T): Promise<void>;
}
