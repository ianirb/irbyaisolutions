import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
  icon?: LucideIcon;
  onClick?: () => void;
  className?: string;
}

export default function Button({ 
  variant = 'primary', 
  children, 
  icon: Icon, 
  onClick,
  className = '',
  ...props
}: ButtonProps) {
  const baseStyles = "px-8 py-4 rounded-full font-semibold transition-all duration-300";
  const variants = {
    primary: "bg-blue-600 hover:bg-blue-700 text-white transform hover:scale-105",
    secondary: "border-2 border-purple-500 text-purple-400 hover:bg-purple-500/10"
  };

  return (
    <button 
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className} ${Icon ? 'flex items-center gap-2' : ''}`}
      {...props}
    >
      {Icon && <Icon className="w-5 h-5" />}
      {children}
    </button>
  );
}