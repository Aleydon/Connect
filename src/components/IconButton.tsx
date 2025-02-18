interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function IconButton({ children, ...props }: IconButtonProps) {
  return (
    <button
      className="p-1.5 h-12
    text-blue rounded-md cursor-pointer
      transition-colors duration-300
    hover:bg-blue hover:text-gray-100"
      {...props}
    >
      {children}
    </button>
  );
}
