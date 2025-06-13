"use client";

import { useState } from "react";
import { Code2 } from "lucide-react";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
  NavbarButton,
} from "./ResizableNavbar";

const navItems = [
  { name: "Home", link: "/" },
  { name: "About", link: "/about" },
  { name: "Services", link: "/services" },
  { name: "Contact", link: "/contact" },
];

export function Navigation() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const handleMobileItemClick = () => {
    setIsMobileOpen(false);
  };

  return (
    <Navbar className="fixed top-0 z-[100] w-full">
      {/* Desktop Navigation */}
      <NavBody>
        {/* Logo */}
        <div className="flex items-center gap-3 flex-shrink-0">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg">
            <Code2 className="w-5 h-5 text-white" />
          </div>
          <div className="flex flex-col min-w-0">
            <span className="text-lg font-semibold text-white whitespace-nowrap">
              Bytovia
            </span>
            <span className="text-xs text-gray-400 font-light whitespace-nowrap">
              Software Development
            </span>
          </div>
        </div>

        {/* Navigation Items */}
        <NavItems items={navItems} className="text-gray-300" />

        {/* Action Buttons */}
        <div className="flex items-center gap-3 flex-shrink-0">
          {/* Get Started Button */}
          <NavbarButton
            href="/contact"
            variant="primary"
            className="bg-white hover:bg-gray-100 text-black rounded-full px-6 py-2 font-medium transition-all duration-200 hover:scale-105 shadow-lg flex-shrink-0"
          >
            Get Started
          </NavbarButton>
        </div>
      </NavBody>

      {/* Mobile Navigation */}
      <MobileNav>
        <MobileNavHeader className="relative z-[110]">
          {/* Mobile Logo */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
              <Code2 className="w-4 h-4 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-base font-semibold text-white">
                Bytovia
              </span>
              <span className="text-xs text-gray-400">
                Software Development
              </span>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <MobileNavToggle
            isOpen={isMobileOpen}
            onClick={() => setIsMobileOpen(!isMobileOpen)}
          />
        </MobileNavHeader>

        {/* Mobile Menu */}
        <MobileNavMenu
          isOpen={isMobileOpen}
          onClose={() => setIsMobileOpen(false)}
        >
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.link}
              onClick={handleMobileItemClick}
              className="block px-4 py-3 text-base font-medium text-white hover:bg-white/10 rounded-lg transition-colors w-full touch-manipulation"
            >
              {item.name}
            </a>
          ))}
          
          {/* Mobile Action Button */}
          <div className="pt-4 border-t border-white/10 mt-4 w-full">
            <NavbarButton
              href="/contact"
              variant="primary"
              className="bg-white hover:bg-gray-100 text-black rounded-full px-6 py-3 font-medium w-full transition-all duration-200 text-center touch-manipulation"
            >
              Get Started
            </NavbarButton>
          </div>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
} 