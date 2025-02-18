interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function Button({ children, ...props }: IconButtonProps) {
  return (
    <button
      className=" flex justify-between items-center w-full px-5 h-12
    text-blue rounded-xl cursor-pointer
      transition-colors duration-300
    hover:bg-blue hover:text-gray-100"
      {...props}
    >
      {children}
    </button>
  );
}
