import { DataTransaction } from "@/types/activity";


// filtrar por período
export function filterByPeriod(transactions: DataTransaction[], period: string): DataTransaction[] {
    const today = new Date();
    
    const dateMap: Record<string, number> = {
      "hoy": 0,
      "ayer": 1,
      "última semana": 7,
      "últimos 15 días": 15,
      "último mes": 30,
      "últimos 3 meses": 90,
    };
  
    if (!dateMap[period]) return transactions;
  
    return transactions.filter((transaction) => {
      const transactionDate = new Date(transaction.dated);
      const diffInDays = (today.getTime() - transactionDate.getTime()) / (1000 * 3600 * 24);
      return diffInDays <= dateMap[period];
    });
  }


// filtrar por tipo de operación (ingresos/Deposit o egresos/Transaction)
export function filterByType(transactions: DataTransaction[], type: "Deposit" | "Transaction"): DataTransaction[] {
    return transactions.filter((transaction) => transaction.type === type);
}
  
  // helper para paginar resultados
  export function paginateTransactions(transactions: DataTransaction[], page: number, perPage: number = 10): DataTransaction[] {
    const startIndex = (page - 1) * perPage;
    return transactions.slice(startIndex, startIndex + perPage);
  }
  
  // helper para ordenar por fecha de más nueva a más antigua
  export function sortByDate(transactions: DataTransaction[]): DataTransaction[] {
    return transactions.sort((a, b) => new Date(b.dated).getTime() - new Date(a.dated).getTime());
  }
  
  // helper para buscar transacciones por palabras clave
  export function searchTransactions(transactions: DataTransaction[], query: string): DataTransaction[] {
    if (!query.trim()) return transactions;
    return transactions.filter((transaction) =>
      transaction.description.toLowerCase().includes(query.toLowerCase())
    );
  }
  
  // helper para borrar filtros (resetear)
  export function resetFilters(originalTransactions: DataTransaction[]): DataTransaction[] {
    return [...originalTransactions];
  }
  
  // helper para formatear la fecha y obtener el nombre del día
  export function getDayName(dateString: string): string {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = { weekday: "long" };
    return new Intl.DateTimeFormat("es-ES", options).format(date);
  }



  export function absoluteAmountFormat(transaction: DataTransaction): number {
    if (transaction.type === "Transaction") {
      return Math.abs(transaction.amount);
    }
    return transaction.amount;
  }

  export function formatToTwoDecimals(num: number): string {
    return (Math.round(num * 100) / 100).toFixed(2);
  }