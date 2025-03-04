import { useState } from 'react'
import { CheckCircle, Copy } from 'lucide-react'

type Props = {
    label: string,
    value: string | undefined
}

export const InfoDetailCopy = ({ label, value }: Props) => {

  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (value) {
      navigator.clipboard
        .writeText(value)
        .then(() => {
          setCopied(true);
          setTimeout(() => setCopied(false), 3000);
        })
        .catch((err) => {
          console.error("Error al copiar: ", err);
        });
    }
  };

  return (
    <div className="flex justify-between items-center gap-2">
      <div className="flex flex-col gap-1">
        <span className="text-xl text-primary font-bold">{label}</span>
        <span className="text-base text-white">{value}</span>
      </div>

      <button onClick={handleCopy} className="focus:outline-none">
        {copied ? (
          <CheckCircle className="w-6 h-6 text-primary" />
        ) : (
          <Copy className="w-6 h-6 text-primary" />
        )}
      </button>
    </div>
  );
};
