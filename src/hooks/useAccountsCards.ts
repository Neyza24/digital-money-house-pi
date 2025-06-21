"use client";

import { api } from "@/lib/axios";
import { useEffect, useState } from "react";
import { CardData, CardDelete, NewCard } from "@/types/cards";




export const useAccountsCards = (account_id: number | null) => {
    const [cards, setCards] = useState<CardData[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    

    const getCards = async (account_id: number) => {
        setLoading(true);
        setError(null);
        try {
        const response = await api.get(`accounts/${account_id}/cards`, {
            headers: {
            Authorization: localStorage.getItem("token"),
            },
        });
        setCards(response.data);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (err: any) {
        setError(err.response?.data?.message || "Error al obtener tarjetas");
        } finally {
        setLoading(false);
        }
    };

    const postNewCard = async (newCard: NewCard, account_id: number) => {
      setLoading(true);
      setError(null);
      try {
        const authToken = localStorage.getItem("token");
        if (!authToken) {
          throw new Error("No hay token de autenticación");
        }

        await api.post(
          `/accounts/${account_id}/cards`,
          newCard,
          {
            headers: { Authorization: authToken },
          }
        );
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (err: any) {
        setError(
          err.response?.data?.message ||
            "Error al crear registrar una nueva tarjeta"
        );
      } finally {
        setLoading(false);
      }
    }; 


    const deleteCard = async ({account_id, card_id}: CardDelete) => {
        setLoading(true);
        setError(null);
        try {
          await api.delete(`accounts/${account_id}/cards/${card_id}`, {
            headers: {
              Authorization: localStorage.getItem("token"),
            },
        });
          getCards(account_id);
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (err: any) {
          setError(err.response?.data?.message || "Error al eliminar la tarjeta");
        } finally {
          setLoading(false);
        }
      };

  useEffect(() => {
    if (account_id) {
        getCards(account_id);
      }
  }, [account_id]);

  return { cards, loading, error, getCards, deleteCard, postNewCard};
  
};