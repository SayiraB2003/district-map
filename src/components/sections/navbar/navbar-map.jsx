"use client";

import React, { useState } from 'react';

import { Menu } from "lucide-react";
import {
  Box,
  IconButton,
} from '@mui/material';
import { ChevronRight } from '@mui/icons-material';

import { Button } from "../../ui/button.jsx";
import Navigation from "../../ui/navigation";
import {
  Navbar as NavbarComponent,
  NavbarLeft,
  NavbarRight,
} from "../../ui/navbar";
import { Sheet, SheetContent, SheetTrigger } from "../../ui/sheet";

import Sidebar from '../sidebar/sidebar.jsx';

export default function Navbar() {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 mb-4 px-4 pb-4">
        <div className="max-w-container px-3 relative mx-auto">
          <NavbarComponent>
            <NavbarLeft>
              <Box
                className="hidden text-sm sm:block text-muted-foreground hover:text-foreground"
                onClick={() => setIsOpen(true)}
              >
              Help <ChevronRight fontSize="small" className="mb-1" />
              </Box>
            </NavbarLeft>
            <NavbarRight>
              <a href="/" className="hidden text-sm sm:block text-muted-foreground hover:text-foreground">
                Home
              </a>
              <br/>
              <a href="/map" className="hidden text-sm sm:block text-muted-foreground hover:text-foreground">
                Map
              </a>
              <br/>
              <a href="/about" className="hidden text-sm sm:block text-muted-foreground hover:text-foreground">
                About/FAQ
              </a>
              <br/>
              <a href="/resources" className="hidden text-sm sm:block text-muted-foreground hover:text-foreground">
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
      <Sidebar {...{ isOpen, setIsOpen }} />
      </>
  );
}