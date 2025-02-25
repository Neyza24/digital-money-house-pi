import { api } from "@/lib/axios";
import { DataTransaction } from "@/types/activity";

export async function fetchActivity(accountId: number): Promise<DataTransaction[]> {
  if (!accountId) return [];
  const response = await api.get(`/accounts/${accountId}/activity`, {
    headers: { Authorization: localStorage.getItem("token") || "" },
  });
  return response.data;
}
  