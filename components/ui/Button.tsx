import Link from "next/link";
import clsx from "clsx";

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  className?: string;
};

export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
  className,
}: ButtonProps) {
  const styles = clsx(
    "inline-flex items-center justify-center rounded-xl px-6 py-3 font-semibold transition-all duration-300",
    {
      "bg-[var(--brand-green)] text-white hover:opacity-90 shadow-md":
        variant === "primary",

      "border border-[var(--border)] bg-white text-[var(--text)] hover:bg-[var(--surface-alt)]":
        variant === "secondary",
    },
    className
  );

  if (href) {
    return (
      <Link href={href} className={styles}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={styles}>
      {children}
    </button>
  );
}