"use client";
import useRecords from "@/components/application/records/hooks/use-records";
import SlideOver from "@/components/application/records/slide-over";
import RecordTable from "@/components/application/records/table";
import Toast from "@/components/application/records/toast";
import { type FormData, type Record } from "@/types";
import { useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";

const defaultFormValues: FormData = {
  description: "",
  title: "",
  email: "",
  recordNumber: "",
};

export default function RecordPage(): JSX.Element {
  const [selected, setSelected] = useState<FormData>(defaultFormValues);
  const [open, setOpen] = useState(false);
  const { error, loading, records, refetch } = useRecords();

  const { register, handleSubmit, reset } = useForm<FormData>({
    defaultValues: selected,
  });

  const [toast, setToast] = useState<{
    message: string;
    type: "success" | "error";
  } | null>(null);

  const handleOnChange = (record: Partial<Record>): void => {
    setSelected(record);
    reset(record);
    setOpen(true);
  };

  const handleOnDelete = (record: FormData): void => {
    if (!record.id) {
      throw new Error("Failed to delete record");
    }
    void onDelete(record.id.toString());
  };

  const handleOnNew = (): void => {
    setSelected(defaultFormValues);
    reset(defaultFormValues);
    setOpen(true);
  };

  const handleOnSuccess = (message: string): void => {
    setOpen(false);
    setToast({ message, type: "success" });
    refetch();
  };

  const onDelete = async (id: string): Promise<void> => {
    try {
      const response = await fetch(`/api/records/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
      handleOnSuccess(`Record Deleted Successfully`);
    } catch (error) {
      console.error(error);
      alert(error);
    }
  };
  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      const response = await fetch(
        `/api/records/${data?.id ? `/${data.id}` : ""}`,
        {
          method: data.id ? "PUT" : "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        },
      );

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
      handleOnSuccess(
        `Record ${data?.id ? `Updated` : `Created`} Successfully`,
      );
    } catch (error) {
      console.error(error);
      alert(error);
    }
  };
  if (loading && !records) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
    <>
      <div className="container min-h-[340px]">
        {records ? (
          <RecordTable
            onNew={handleOnNew}
            onEdit={handleOnChange}
            onDelete={handleOnDelete}
            records={records}
          />
        ) : null}
      </div>
      <SlideOver
        open={open}
        setOpen={setOpen}
        record={selected}
        register={(field) => register(field)}
        onSubmit={handleSubmit(onSubmit)}
      />
      {toast ? (
        <Toast
          type={toast.type}
          message={toast.message}
          onClose={() => setToast(null)}
        />
      ) : null}
    </>
  );
}
