export const detectCardType = (number: string) => {
    if (/^4/.test(number)) return "visa";
    if (/^5[1-5]/.test(number) || /^2(2[2-9][1-9]|2[3-9]|[3-6]|7[0-1][0-9]|720)/.test(number)) return "mastercard";
    if (/^3[47]/.test(number)) return "amex";
    if (/^6(011|22|4|5)/.test(number)) return "discover";
    return "default";
  };