import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  className = '',
  ...props 
}) => {
  const baseStyles = "py-4 px-8 rounded-xl font-bold text-lg transition-all duration-300 transform hover:-translate-y-1 shadow-lg flex items-center justify-center gap-2";
  
  // Updated shadow color for primary to match Amber accent
  const variants = {
    primary: "bg-accent hover:bg-accentHover text-white shadow-amber-500/30",
    secondary: "bg-white text-primary hover:bg-gray-100 border-2 border-primary",
    danger: "bg-danger text-white hover:bg-rose-800"
  };

  const widthClass = fullWidth ? "w-full" : "w-auto inline-block";

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${widthClass} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};