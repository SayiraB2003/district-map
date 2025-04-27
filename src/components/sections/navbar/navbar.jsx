"use client";

import React from 'react';
import { Button } from "../../ui/button.jsx";
import Navigation from "../../ui/navigation";
import {
  Navbar as NavbarComponent,
  NavbarLeft,
  NavbarRight,
} from "../../ui/navbar";
import { Sheet, SheetContent, SheetTrigger } from "../../ui/sheet";
import { Menu } from "lucide-react";

export default function Navbar() {
  return (
    <>
      <header className="sticky top-0 z-50 -mb-4 px-4 pb-4">
        <div className="fade-bottom bg-background absolute left-0 h-14 w-full"></div>
        <div className="max-w-container relative mx-auto">
          <NavbarComponent>
            <NavbarLeft>
              <a href="/" className="hidden text-sm md:block font-semibold">
                A Look at UK Districts
              </a>
            </NavbarLeft>
            <NavbarRight>
              <a href="/" className="hidden text-sm md:block text-muted-foreground hover:text-foreground">
                Home
              </a>
              <br/>
              <a href="/map" className="hidden text-sm md:block text-muted-foreground hover:text-foreground">
                Map
              </a>
              <br/>
              <a href="/about" className="hidden text-sm md:block text-muted-foreground hover:text-foreground">
                About/FAQ
              </a>
              <br/>
              <a href="/resources" className="hidden text-sm md:block text-muted-foreground hover:text-foreground">
                Resources
              </a>
              <br/>
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="shrink-0 md:hidden">
                    <Menu className="size-5" />
                    <span className="sr-only">Toggle navigation menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right">
                  <nav className="grid gap-6 text-lg font-medium">
                    <a href="/" className="flex items-center gap-2 text-xl font-bold">
                      <span>Home</span>
                    </a>
                    <a href="/map" className="text-muted-foreground hover:text-foreground">
                      Map
                    </a>
                    <a href="/about" className="text-muted-foreground hover:text-foreground">
                      About/FAQ
                    </a>
                    <a href="/resources" className="text-muted-foreground hover:text-foreground">
                      Resources
                    </a>
                  </nav>
                </SheetContent>
              </Sheet>
            </NavbarRight>
          </NavbarComponent>
        </div>
      </header>
      </>
  );
}