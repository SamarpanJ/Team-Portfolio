"use client";
import { cn } from "@/lib/utils";
import { IconMenu2, IconX } from "@tabler/icons-react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "motion/react";

import React, { useRef, useState } from "react";

interface NavbarProps {
  children: React.ReactNode;
  className?: string;
}

interface NavBodyProps {
  children: React.ReactNode;
  className?: string;
  visible?: boolean;
}

interface NavItemsProps {
  items: {
    name: string;
    link: string;
  }[];
  className?: string;
  onItemClick?: () => void;
}

interface MobileNavProps {
  children: React.ReactNode;
  className?: string;
  visible?: boolean;
}

interface MobileNavHeaderProps {
  children: React.ReactNode;
  className?: string;
}

interface MobileNavMenuProps {
  children: React.ReactNode;
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

export const Navbar = ({ children, className }: NavbarProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const [visible, setVisible] = useState<boolean>(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 100) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  });

  return (
    <motion.div
      ref={ref}
      className={cn("fixed inset-x-0 top-0 z-40 w-full", className)}
    >
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(
              child as React.ReactElement<{ visible?: boolean }>,
              { visible },
            )
          : child,
      )}
    </motion.div>
  );
};
Navbar.displayName = 'Navbar';

export const NavBody = ({ children, className, visible }: NavBodyProps) => {
  return (
    <motion.div
      animate={{
        backdropFilter: visible ? "blur(10px)" : "blur(8px)",
        boxShadow: visible
          ? "0 0 24px rgba(0, 0, 0, 0.3), 0 1px 1px rgba(255, 255, 255, 0.05), 0 0 0 1px rgba(255, 255, 255, 0.1), 0 0 4px rgba(0, 0, 0, 0.3), 0 16px 68px rgba(0, 0, 0, 0.2), 0 1px 0 rgba(255, 255, 255, 0.1) inset"
          : "0 0 16px rgba(0, 0, 0, 0.2), 0 1px 1px rgba(255, 255, 255, 0.03), 0 0 0 1px rgba(255, 255, 255, 0.08)",
        width: visible ? "70%" : "100%",
        y: visible ? 10 : 0,
      }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 50,
      }}
      className={cn(
        "relative z-[60] mx-auto hidden w-full max-w-7xl flex-row items-center justify-between self-start rounded-full bg-black/80 backdrop-blur-md px-6 py-3 lg:flex border border-white/10",
        visible && "bg-black/90",
        className,
      )}
    >
      {children}
    </motion.div>
  );
};
NavBody.displayName = 'NavBody';

export const NavItems = ({ items, className, onItemClick }: NavItemsProps) => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <motion.div
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "absolute inset-0 hidden flex-1 flex-row items-center justify-center space-x-2 text-sm font-medium transition duration-200 lg:flex lg:space-x-2",
        className,
      )}
    >
      {items.map((item, idx) => (
        <a
          onMouseEnter={() => setHovered(idx)}
          onClick={onItemClick}
          className="relative px-4 py-2 text-gray-300 hover:text-white transition-colors duration-200"
          key={`link-${idx}`}
          href={item.link}
        >
          {hovered === idx && (
            <motion.div
              layoutId="hovered"
              className="absolute inset-0 h-full w-full rounded-full bg-white/10"
            />
          )}
          <span className="relative z-20">{item.name}</span>
        </a>
      ))}
    </motion.div>
  );
};
NavItems.displayName = 'NavItems';

export const MobileNav = ({ children, className, visible }: MobileNavProps) => {
  return (
    <motion.div
      animate={{
        backdropFilter: visible ? "blur(12px)" : "blur(6px)",
        boxShadow: visible
          ? "0 0 24px rgba(0, 0, 0, 0.4), 0 1px 1px rgba(255, 255, 255, 0.08), 0 0 0 1px rgba(255, 255, 255, 0.12), 0 0 4px rgba(0, 0, 0, 0.3), 0 16px 68px rgba(0, 0, 0, 0.25), 0 1px 0 rgba(255, 255, 255, 0.1) inset"
          : "0 0 16px rgba(0, 0, 0, 0.2), 0 1px 1px rgba(255, 255, 255, 0.05), 0 0 0 1px rgba(255, 255, 255, 0.08)",
        width: visible ? "85%" : "100%",
        marginLeft: visible ? "auto" : "auto",
        marginRight: visible ? "auto" : "auto",
        paddingRight: visible ? "12px" : "16px",
        paddingLeft: visible ? "12px" : "16px",
        paddingTop: visible ? "12px" : "12px",
        paddingBottom: visible ? "12px" : "12px",
        borderRadius: visible ? "20px" : "24px",
        y: visible ? 12 : 0,
        scale: visible ? 0.98 : 1,
      }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 50,
      }}
      className={cn(
        "relative z-[100] mx-auto flex w-full max-w-[calc(100vw-1rem)] flex-col items-center justify-between bg-black/80 backdrop-blur-md border border-white/10 lg:hidden",
        visible && "bg-black/95 border-white/15",
        className,
      )}
    >
      {children}
    </motion.div>
  );
};
MobileNav.displayName = 'MobileNav';

export const MobileNavHeader = ({
  children,
  className,
}: MobileNavHeaderProps) => {
  return (
    <div
      className={cn(
        "flex w-full flex-row items-center justify-between",
        className,
      )}
    >
      {children}
    </div>
  );
};
MobileNavHeader.displayName = 'MobileNavHeader';

export const MobileNavMenu = ({
  children,
  className,
  isOpen,
  onClose,
}: MobileNavMenuProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -10, scale: 0.95 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className={cn(
            "absolute inset-x-0 top-full left-0 right-0 mt-2 z-[70] flex w-full flex-col items-start justify-start gap-3 rounded-xl bg-black/95 backdrop-blur-xl border border-white/20 px-6 py-6 shadow-2xl",
            className,
          )}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};
MobileNavMenu.displayName = 'MobileNavMenu';

export const MobileNavToggle = ({
  isOpen,
  onClick,
}: {
  isOpen: boolean;
  onClick: () => void;
}) => {
  return (
    <button
      onClick={onClick}
      className="p-2 rounded-lg text-white hover:bg-white/10 transition-colors duration-200 relative z-[80] flex items-center justify-center"
      aria-label={isOpen ? "Close menu" : "Open menu"}
    >
      <motion.div
        animate={{ rotate: isOpen ? 180 : 0 }}
        transition={{ duration: 0.2 }}
      >
        {isOpen ? (
          <IconX className="w-5 h-5" />
        ) : (
          <IconMenu2 className="w-5 h-5" />
        )}
      </motion.div>
    </button>
  );
};
MobileNavToggle.displayName = 'MobileNavToggle';

export const NavbarLogo = () => {
  return (
    <a
      href="#"
      className="relative z-20 mr-4 flex items-center space-x-2 px-2 py-1 text-sm font-normal text-black"
    >
      <img
        src="https://assets.aceternity.com/logo-dark.png"
        alt="logo"
        width={30}
        height={30}
      />
      <span className="font-medium text-black dark:text-white">Startup</span>
    </a>
  );
};
NavbarLogo.displayName = 'NavbarLogo';

export const NavbarButton = ({
  href,
  as: Tag = "a",
  children,
  className,
  variant = "primary",
  ...props
}: {
  href?: string;
  as?: React.ElementType;
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "dark" | "gradient";
  [key: string]: any;
}) => {
  const baseStyles =
    "px-4 py-2 rounded-md bg-white button bg-white text-black text-sm font-bold relative cursor-pointer hover:-translate-y-0.5 transition duration-200 inline-block text-center";

  const variantStyles = {
    primary:
      "shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]",
    secondary: "bg-transparent shadow-none dark:text-white",
    dark: "bg-black text-white shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]",
    gradient:
      "bg-gradient-to-b from-blue-500 to-blue-700 text-white shadow-[0px_2px_0px_0px_rgba(255,255,255,0.3)_inset]",
  };

  const combinedProps: any = {
    className: cn(baseStyles, variantStyles[variant], className),
    ...props,
  };

  if (href) {
    combinedProps.href = href;
  }

  return React.createElement(Tag, combinedProps, children);
};
NavbarButton.displayName = 'NavbarButton'; 