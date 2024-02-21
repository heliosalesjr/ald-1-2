'use client'
import React from "react";
import { Navbar, NavbarMenuToggle, NavbarMenuItem, NavbarMenu, NavbarContent, NavbarItem, Link } from "@nextui-org/react";
import { usePathname } from 'next/navigation';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const pathname = usePathname();

  const links = [
    { label: "Introdução", href: "/" },
    
    { label: "Atividades do Projeto", href: "/atividades" },
    { label: "Matemática e Educação Financeira", href: "/matematica" },
    { label: "Recursos Didáticos", href: "/recursos" },
  ];

  return (
    <Navbar
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <a href="/">
          <img src="/images/logo-blue.png" alt="Logo" height={50} width={50}/>
        </a>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex flex-grow justify-end gap-4" justify="center">
        <div className="pr-8">
          <img src="/images/logo-blue.png" alt="Logo" height={60} width={60}/>
        </div>
        
        {links.map((link, index) => (
          <NavbarItem key={index}>
            <Link
              href={link.href}
              className={`transition-all first-letter duration-500 ease-in-out hover:text-blue-800  hover:font-semibold ${
                pathname === link.href ? 'border-b-3 border-primary font-semibold text-blue-900' : ''
              }`}
              color="foreground"
            >
              {link.label}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarMenu>
        {links.map((link, index) => (
          <NavbarMenuItem key={index}>
            <Link
              href={link.href}
              size="lg"
              style={{ display: 'block', textAlign: 'center' }}
              className={`font-semibold text-primary-focus py-4 hover:text-green-800 ${
                pathname === link.href ? 'border-b-3 border-primary-focus' : ''
              }`}
            >
              {link.label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>

    </Navbar>
  );
}
