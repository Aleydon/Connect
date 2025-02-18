import { Mail } from 'lucide-react';

interface InputProps extends React.HTMLAttributes<HTMLInputElement> {}

export function Input({ ...props }: InputProps) {
  return (
    <div
      className="flex items-center gap-2 bg-gray-800 border
     border-gray-600 rounded-xl px-4 h-12"
    >
      <span className="text-gray-400">
        <Mail />
      </span>
      <input className="flex-1 outline-0" {...props} />
    </div>
  );
}
