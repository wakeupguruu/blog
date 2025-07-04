import React from "react";

// Alert Component
const Alert = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { variant?: "default" | "destructive" }
>(({ className = "", variant = "default", ...props }, ref) => {
  const baseClasses = "relative w-full rounded-lg border p-4";
  const iconClasses = "[&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px]";
  const variantClasses =
    variant === "destructive"
      ? "border-red-500/50 text-red-600 dark:border-red-500 [&>svg]:text-red-600"
      : "bg-white text-black"; // You can adjust this as per your theme

  return (
    <div
      ref={ref}
      role="alert"
      className={`${baseClasses} ${iconClasses} ${variantClasses} ${className}`}
      {...props}
    />
  );
});
Alert.displayName = "Alert";

// Alert Title
const AlertTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className = "", ...props }, ref) => (
  <h5
    ref={ref}
    className={`mb-1 font-medium leading-none tracking-tight ${className}`}
    {...props}
  />
));
AlertTitle.displayName = "AlertTitle";

// Alert Description
const AlertDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className = "", ...props }, ref) => (
  <div
    ref={ref}
    className={`text-sm [&_p]:leading-relaxed ${className}`}
    {...props}
  />
));
AlertDescription.displayName = "AlertDescription";

export { Alert, AlertTitle, AlertDescription };
