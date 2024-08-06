"use client";
import { Record } from "@/types";
import { useCallback, useEffect, useState } from "react";

const useRecords = () => {
  const [records, setRecords] = useState<Record[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [refresh, setRefresh] = useState<boolean>(false);

  const fetchRecords = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch("/api/records");
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
      const data: Record[] = (await response.json()) as Record[];
      setRecords(data);
    } catch (err) {
      setError(err as string);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    void fetchRecords();
  }, [fetchRecords, refresh]);

  const refetch = () => setRefresh((prev) => !prev);

  return { records, loading, error, refetch };
};

export default useRecords;
