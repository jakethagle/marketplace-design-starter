import { type IWebhookService } from "@/interfaces/common";
import axios from "axios";

export class WebhookService<T> implements IWebhookService<T> {
  async emitEvent(endpoint: string, data: unknown): Promise<void> {
    try {
      await axios.post(endpoint, data);
    } catch (error) {
      console.error(`Error emitting webhook event: ${error as string}`);
    }
  }
}
