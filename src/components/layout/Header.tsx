"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Badge } from "@/components/ui/badge";

const Header = () => {
  const [cartCount, setCartCount] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    {
      name: "Contemporary",
      items: ["Minimalist Rings", "Modern Necklaces", "Statement Earrings", "Elegant Bracelets"]
    },
    {
      name: "Tribal",
      items: ["Ethnic Necklaces", "Traditional Bangles", "Bohemian Earrings", "Tribal Rings"]
    },
    {
      name: "Bridal",
      items: ["Wedding Sets", "Engagement Rings", "Bridal Necklaces", "Ceremonial Jewelry"]
    },
    {
      name: "Men's",
      items: ["Men's Rings", "Chain Necklaces", "Cufflinks", "Bracelets"]
    }
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4">
        {/* Top Bar */}
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-gray-400 to-gray-600"></div>
            <span className="font-playfair text-2xl font-bold text-gray-900">
              Luxe Silver
            </span>
          </Link>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Input
                type="search"
                placeholder="Search jewelry..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-4 pr-12 py-2 rounded-full border-gray-300 focus:border-gray-400"
              />
              <Button
                size="sm"
                className="absolute right-1 top-1 h-8 w-8 rounded-full bg-gray-800 hover:bg-gray-700"
              >
                <span className="sr-only">Search</span>
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </Button>
            </div>
          </div>

          {/* Right Navigation */}
          <div className="flex items-center space-x-4">
            <Link href="/account/login">
              <Button variant="ghost" size="sm" className="hidden sm:flex">
                Account
              </Button>
            </Link>
            <Link href="/wishlist">
              <Button variant="ghost" size="sm" className="hidden sm:flex">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </Button>
            </Link>
            <Link href="/cart">
              <Button variant="ghost" size="sm" className="relative">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l1.5 9M7 13L5.5 4M21 13v7a2 2 0 01-2 2H5a2 2 0 01-2-2v-7m18 0H3" />
                </svg>
                {cartCount > 0 && (
                  <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs bg-gray-900">
                    {cartCount}
                  </Badge>
                )}
              </Button>
            </Link>
          </div>
        </div>

        {/* Navigation Menu */}
        <div className="hidden md:flex h-14 items-center justify-center border-t">
          <NavigationMenu>
            <NavigationMenuList className="space-x-8">
              <NavigationMenuItem>
                <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink className="text-sm font-medium hover:text-gray-600 transition-colors">
                    Home
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              
              {categories.map((category) => (
                <NavigationMenuItem key={category.name}>
                  <NavigationMenuTrigger className="text-sm font-medium">
                    {category.name}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="p-6 w-80">
                      <h3 className="font-semibold mb-4">{category.name} Collection</h3>
                      <div className="grid gap-3">
                        {category.items.map((item) => (
                          <Link
                            key={item}
                            href={`/products?category=${category.name.toLowerCase()}&subcategory=${item.toLowerCase().replace(/\s+/g, '-')}`}
                            className="block p-2 rounded-md hover:bg-gray-50 transition-colors"
                          >
                            <div className="text-sm font-medium">{item}</div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              ))}
              
              <NavigationMenuItem>
                <Link href="/products" legacyBehavior passHref>
                  <NavigationMenuLink className="text-sm font-medium hover:text-gray-600 transition-colors">
                    All Products
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <Link href="/about" legacyBehavior passHref>
                  <NavigationMenuLink className="text-sm font-medium hover:text-gray-600 transition-colors">
                    About
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Mobile Search */}
        <div className="md:hidden py-3 border-t">
          <div className="relative">
            <Input
              type="search"
              placeholder="Search jewelry..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-4 pr-12 py-2 rounded-full"
            />
            <Button
              size="sm"
              className="absolute right-1 top-1 h-8 w-8 rounded-full bg-gray-800 hover:bg-gray-700"
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;