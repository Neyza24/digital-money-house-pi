"use client";

import { useAuth } from "@/hooks/useAuth";
import { DataTransaction } from "@/types/activity";
import { fetchActivity } from "@/utils/getActivity";
import {
  filterByPeriod,
  filterByType,
  paginateTransactions,
  searchTransactions,
  sortByDate,
} from "@/utils/transactionsHelpers";
import { useRouter, useSearchParams } from "next/navigation";
import { createContext, useCallback, useEffect, useState } from "react";


export interface ActivityContextType {
  transactions: DataTransaction[];
  filteredTransactions: DataTransaction[];
  searchQuery: string;
  filterPeriod: string;
  filterOperation: string;
  currentPage: number;
  totalPages: number;
  setSearchQuery: (query: string) => void;
  setFilterPeriod: (period: string) => void;
  setFilterOperation: (operation: string) => void;
  setCurrentPage: (page: number) => void;
  loadActivity: () => Promise<void>;
  resetFilters: () => void;
}

export const ActivityContext = createContext<ActivityContextType | undefined>(
  undefined
);

export const ActivityProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { accountData, isAuth } = useAuth();

  const accountId = accountData?.id ?? 0; // O accountData?.account_id

  const [transactions, setTransactions] = useState<DataTransaction[]>([]);
  const [filteredTransactions, setFilteredTransactions] = useState<
    DataTransaction[]
  >([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterPeriod, setFilterPeriod] = useState("");
  const [filterOperation, setFilterOperation] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const searchParams = useSearchParams();
  const router = useRouter();


  const loadActivity = useCallback(async () => {
  
    const allTransactions = await fetchActivity(accountId);

    let filtered = sortByDate(allTransactions);

    // Filtro por período, si existe
    if (filterPeriod) {
      filtered = filterByPeriod(filtered, filterPeriod);
    }

    // Filtro por tipo (Deposit/Transaction), si existe
    if (filterOperation) {
      filtered = filterByType(
        filtered,
        filterOperation as "Deposit" | "Transaction"
      );
    }

    // Aplica el buscador por palabras clave en la descriprion
    if (searchQuery) {
      filtered = searchTransactions(filtered, searchQuery);
    }

    // Items per page and total pages
    const perPage = 10;
    const total = Math.ceil(filtered.length / perPage);
    setTotalPages(total);

    // porción de datos para la página actual
    const paginated = paginateTransactions(filtered, currentPage, perPage);
    setFilteredTransactions(paginated);
    setTransactions(allTransactions);
  }, [accountId, searchQuery, filterPeriod, filterOperation, currentPage]) 

  
  useEffect(() => {
    const pageParam = searchParams.get("page");
    const queryParam = searchParams.get("query");
    const periodParam = searchParams.get("period");
    const operationParam = searchParams.get("operation");

    if (pageParam) setCurrentPage(Number(pageParam));
    if (queryParam) setSearchQuery(queryParam);
    if (periodParam) setFilterPeriod(periodParam);
    if (operationParam) setFilterOperation(operationParam);
  }, [searchParams]);

  
  useEffect(() => {

  if (!isAuth || !accountData || !localStorage.getItem("token")) return;
    loadActivity();
  }, [isAuth, accountData,loadActivity]);




  const resetFilters = () => {
    setSearchQuery("");
    setFilterPeriod("");
    setFilterOperation("");
    setCurrentPage(1);
    // Actualiza la URL para remover los parámetros
    router.push('/activity');
  };

  return (
    <ActivityContext.Provider value={{ transactions,
      filteredTransactions,
      searchQuery,
      filterPeriod,
      filterOperation,
      currentPage,
      totalPages,
      setSearchQuery,
      setFilterPeriod,
      setFilterOperation,
      setCurrentPage,
      loadActivity,
      resetFilters }}>
      {children}
    </ActivityContext.Provider>
  );
};
