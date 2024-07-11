import { Record } from "@/types";
import { RecordService, WebhookService } from "@repo/services";
import { NextResponse, type NextRequest } from "next/server";

const webhookService = new WebhookService<Record>();
const recordService = new RecordService<Record>(webhookService);

export async function GET(_req: NextRequest): Promise<Response> {
  await recordService.loadRecords();
  return NextResponse.json(recordService.getRecords());
}

export async function POST(req: NextRequest): Promise<Response> {
  await recordService.loadRecords();
  const newRecord = (await req.json()) as Record;
  try {
    // Ensure the new record has a unique ID
    const newId = Math.max(...recordService.getRecords().map((r) => r.id)) + 1;
    const recordWithId = {
      ...newRecord,
      id: newId,
      recordNumber: `R-00${newId}`,
    };
    await recordService.insertRecord(recordWithId);
    await recordService.saveRecords();
    return NextResponse.json(
      { message: "Record inserted", record: recordWithId },
      { status: 201 },
    );
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
}
