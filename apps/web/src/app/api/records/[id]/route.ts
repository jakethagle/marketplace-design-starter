import { Record } from "@/types";
import { RecordService, WebhookService } from "@repo/services";
import { NextResponse, type NextRequest } from "next/server";

//Initialize our webhook eventing service for notifying Slack
const webhookService = new WebhookService<Record>();
//Initialize our record service for managing records and inject the webhook service for notifying Slack
const recordService = new RecordService<Record>(webhookService);
interface Params {
  id: string;
}
export async function GET(
  _req: NextRequest,
  context: { params: Params },
): Promise<NextResponse> {
  const { params } = context;
  await recordService.loadRecords();
  const recordList = recordService.getRecords();
  const recordId = parseInt(params.id, 10);
  const record = recordList.find((r) => r.id === recordId);

  if (record) {
    return NextResponse.json(record);
  }
  return NextResponse.json({ message: "Record not found" }, { status: 404 });
}

export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } },
): Promise<NextResponse> {
  await recordService.loadRecords();
  const recordId = parseInt(params.id, 10);
  const newData = (await req.json()) as Record;
  try {
    await recordService.updateRecord(recordId, newData);
    await recordService.saveRecords();
    return NextResponse.json({ message: "Record updated" });
  } catch (error) {
    return NextResponse.json({ message: error as string }, { status: 500 });
  }
}

export async function DELETE(
  _req: NextRequest,
  context: { params: { id: string } },
) {
  const { params } = context;
  await recordService.loadRecords();
  const recordId = parseInt(params.id, 10);
  try {
    await recordService.deleteRecord(recordId);
    await recordService.saveRecords();
    return NextResponse.json({ message: "Record deleted" });
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
}
