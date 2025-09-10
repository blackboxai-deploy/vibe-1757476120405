import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand & Newsletter */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-full bg-gradient-to-br from-gray-400 to-gray-600"></div>
              <span className="font-playfair text-2xl font-bold text-gray-900">
                Luxe Silver
              </span>
            </Link>
            <p className="text-sm text-gray-600 leading-relaxed">
              Crafting exquisite silver jewelry that celebrates both contemporary elegance and timeless tribal artistry.
            </p>
            <div className="space-y-3">
              <h4 className="font-semibold text-gray-900">Stay Updated</h4>
              <div className="flex space-x-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 text-sm"
                />
                <Button size="sm" className="bg-gray-900 hover:bg-gray-800">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>

          {/* Shop Categories */}
          <div className="space-y-4">
            <h3 className="font-semibold text-gray-900">Shop</h3>
            <div className="space-y-3">
              <Link href="/products?category=contemporary" className="block text-sm text-gray-600 hover:text-gray-900 transition-colors">
                Contemporary Collection
              </Link>
              <Link href="/products?category=tribal" className="block text-sm text-gray-600 hover:text-gray-900 transition-colors">
                Tribal Ornaments
              </Link>
              <Link href="/products?category=bridal" className="block text-sm text-gray-600 hover:text-gray-900 transition-colors">
                Bridal Jewelry
              </Link>
              <Link href="/products?category=mens" className="block text-sm text-gray-600 hover:text-gray-900 transition-colors">
                Men's Collection
              </Link>
              <Link href="/products" className="block text-sm text-gray-600 hover:text-gray-900 transition-colors">
                All Products
              </Link>
              <Link href="/products?filter=new" className="block text-sm text-gray-600 hover:text-gray-900 transition-colors">
                New Arrivals
              </Link>
            </div>
          </div>

          {/* Customer Care */}
          <div className="space-y-4">
            <h3 className="font-semibold text-gray-900">Customer Care</h3>
            <div className="space-y-3">
              <Link href="/contact" className="block text-sm text-gray-600 hover:text-gray-900 transition-colors">
                Contact Us
              </Link>
              <Link href="/shipping" className="block text-sm text-gray-600 hover:text-gray-900 transition-colors">
                Shipping Info
              </Link>
              <Link href="/returns" className="block text-sm text-gray-600 hover:text-gray-900 transition-colors">
                Returns & Exchanges
              </Link>
              <Link href="/size-guide" className="block text-sm text-gray-600 hover:text-gray-900 transition-colors">
                Size Guide
              </Link>
              <Link href="/care-guide" className="block text-sm text-gray-600 hover:text-gray-900 transition-colors">
                Jewelry Care
              </Link>
              <Link href="/faq" className="block text-sm text-gray-600 hover:text-gray-900 transition-colors">
                FAQ
              </Link>
            </div>
          </div>

          {/* About & Policies */}
          <div className="space-y-4">
            <h3 className="font-semibold text-gray-900">Company</h3>
            <div className="space-y-3">
              <Link href="/about" className="block text-sm text-gray-600 hover:text-gray-900 transition-colors">
                About Us
              </Link>
              <Link href="/craftsmanship" className="block text-sm text-gray-600 hover:text-gray-900 transition-colors">
                Our Craftsmanship
              </Link>
              <Link href="/sustainability" className="block text-sm text-gray-600 hover:text-gray-900 transition-colors">
                Sustainability
              </Link>
              <Link href="/careers" className="block text-sm text-gray-600 hover:text-gray-900 transition-colors">
                Careers
              </Link>
              <Link href="/privacy" className="block text-sm text-gray-600 hover:text-gray-900 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="block text-sm text-gray-600 hover:text-gray-900 transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-gray-600">
            © 2024 Luxe Silver. All rights reserved. | Handcrafted with love.
          </div>
          
          <div className="flex items-center space-x-6">
            {/* Social Links */}
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors" aria-label="Instagram">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.621 5.367 11.988 11.988 11.988s11.987-5.367 11.987-11.988C24.004 5.367 18.637.001 12.017.001zm5.568 16.442c-.353.711-.858 1.216-1.569 1.569-.695.307-1.466.466-2.302.466H8.286c-.836 0-1.607-.159-2.302-.466-.711-.353-1.216-.858-1.569-1.569-.307-.695-.466-1.466-.466-2.302V8.286c0-.836.159-1.607.466-2.302.353-.711.858-1.216 1.569-1.569.695-.307 1.466-.466 2.302-.466h5.428c.836 0 1.607.159 2.302.466.711.353 1.216.858 1.569 1.569.307.695.466 1.466.466 2.302v5.854c0 .836-.159 1.607-.466 2.302z"/>
                  <path d="M12.017 7.056c-2.707 0-4.931 2.224-4.931 4.931s2.224 4.931 4.931 4.931 4.931-2.224 4.931-4.931-2.224-4.931-4.931-4.931zm0 8.123c-1.760 0-3.192-1.432-3.192-3.192s1.432-3.192 3.192-3.192 3.192 1.432 3.192 3.192-1.432 3.192-3.192 3.192z"/>
                  <circle cx="17.27" cy="6.73" r="1.14"/>
                </svg>
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors" aria-label="Facebook">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors" aria-label="Pinterest">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.372 0 12s5.373 12 12 12c6.627 0 12-5.372 12-12S18.627 0 12 0zm0 19c-.721 0-1.418-.109-2.073-.312.286-.465.713-1.227.87-1.897l.557-2.10c.275.525.856.955 1.535.955 2.015 0 3.386-1.839 3.386-4.299 0-1.856-1.577-3.606-3.963-3.606-2.977 0-4.487 2.134-4.487 3.919 0 1.076.409 2.036 1.286 2.394.143.058.219.032.252-.089l.216-.877c.026-.105.013-.143-.049-.236-.2-.307-.329-.704-.329-1.268 0-1.635 1.222-3.1 3.18-3.1 1.734 0 2.687 1.059 2.687 2.473 0 1.86-.824 3.431-2.046 3.431-.675 0-1.181-.558-1.018-1.243.194-.817.571-1.699.571-2.288 0-.528-.283-.969-.869-.969-.689 0-1.243.713-1.243 1.667 0 .608.206 1.02.206 1.02L8.2 16.73c-.183.694-.028 1.546.009 1.635C5.029 17.263 2.5 14.925 2.5 12c0-5.238 4.262-9.5 9.5-9.5s9.5 4.262 9.5 9.5-4.262 9.5-9.5 9.5z"/>
                </svg>
              </a>
            </div>

            {/* Payment Icons */}
            <div className="flex items-center space-x-2">
              <div className="text-xs text-gray-500">Secure payments:</div>
              <div className="flex space-x-1">
                <div className="w-8 h-5 bg-gray-800 rounded text-white text-xs flex items-center justify-center font-bold">V</div>
                <div className="w-8 h-5 bg-red-600 rounded text-white text-xs flex items-center justify-center font-bold">M</div>
                <div className="w-8 h-5 bg-blue-600 rounded text-white text-xs flex items-center justify-center font-bold">A</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;