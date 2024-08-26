import { type IRecordService, type IWebhookService } from "@/interfaces/common";
import * as fs from "fs";
import * as path from "path";

export class RecordService<T extends { id: number }>
  implements IRecordService<T>
{
  private filePath: string;
  private records: T[] = [];
  private webhookService: IWebhookService<T>;

  constructor(webhookService: IWebhookService<T>) {
    this.filePath = path.resolve("records.json");
    this.webhookService = webhookService;
  }

  async loadRecords(): Promise<void> {
    try {
      const data = await fs.promises.readFile(this.filePath, "utf-8");
      this.records = JSON.parse(data) as T[];
    } catch (error) {
      console.error(`Error reading file from disk: ${error as string}`);
    }
  }

  getRecords(): T[] {
    return this.records;
  }

  async updateRecord(id: number, newData: Partial<T>): Promise<void> {
    const index = this.records.findIndex((record) => record.id === id);
    if (index !== -1) {
      const updatedRecord = { ...this.records[index], ...newData };
      this.records[index] = updatedRecord as T;
      await this.webhookService.emitEvent("recordUpdated", updatedRecord as T);
    } else {
      throw new Error(`Record with id ${id} not found`);
    }
  }

  async insertRecord(newRecord: T): Promise<void> {
    this.records.push(newRecord);
    await this.saveRecords();
    await this.webhookService.emitEvent("recordInserted", newRecord);
  }

  async deleteRecord(id: number): Promise<void> {
    const record = this.records.find((record) => record.id === id);
    if (record) {
      this.records = this.records.filter((record) => record.id !== id);
      await this.webhookService.emitEvent("recordDeleted", record);
    } else {
      throw new Error(`Record with id ${id} not found`);
    }
  }

  async saveRecords(): Promise<void> {
    try {
      await fs.promises.writeFile(
        this.filePath,
        JSON.stringify(this.records, null, 2),
        "utf-8",
      );
    } catch (error) {
      console.error(`Error writing file to disk: ${error as string}`);
    }
  }
}
