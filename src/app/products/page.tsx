"use client";

import React, { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import ProductCard from "@/components/products/ProductCard";
import { products, categories, Product } from "@/lib/data/products";

const ProductsPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 15000]);
  const [sortBy, setSortBy] = useState("featured");
  const [showFilters, setShowFilters] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState({
    inStock: false,
    onSale: false,
    new: false,
    rating: false // 4+ rating
  });

  // Price ranges for filter
  const priceRanges = [
    { label: "Under ₹2,000", min: 0, max: 2000 },
    { label: "₹2,000 - ₹5,000", min: 2000, max: 5000 },
    { label: "₹5,000 - ₹10,000", min: 5000, max: 10000 },
    { label: "Above ₹10,000", min: 10000, max: 50000 }
  ];

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    // Search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query) ||
        product.tags.some(tag => tag.toLowerCase().includes(query))
      );
    }

    // Category filter
    if (selectedCategory !== "all") {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    // Price range filter
    filtered = filtered.filter(product => 
      product.price >= priceRange[0] && product.price <= priceRange[1]
    );

    // Additional filters
    if (selectedFilters.inStock) {
      filtered = filtered.filter(product => product.inStock);
    }
    if (selectedFilters.onSale) {
      filtered = filtered.filter(product => product.originalPrice && product.originalPrice > product.price);
    }
    if (selectedFilters.new) {
      filtered = filtered.filter(product => product.isNew);
    }
    if (selectedFilters.rating) {
      filtered = filtered.filter(product => product.rating >= 4.0);
    }

    // Sort products
    switch (sortBy) {
      case "price-low":
        filtered.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        filtered.sort((a, b) => b.price - a.price);
        break;
      case "newest":
        filtered.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
        break;
      case "rating":
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case "featured":
      default:
        filtered.sort((a, b) => (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0));
        break;
    }

    return filtered;
  }, [searchQuery, selectedCategory, priceRange, selectedFilters, sortBy]);

  const handleFilterChange = (filterKey: keyof typeof selectedFilters) => {
    setSelectedFilters(prev => ({
      ...prev,
      [filterKey]: !prev[filterKey]
    }));
  };

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedCategory("all");
    setPriceRange([0, 15000]);
    setSelectedFilters({
      inStock: false,
      onSale: false,
      new: false,
      rating: false
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="font-playfair text-4xl font-bold text-gray-900 mb-4">
            Our Jewelry Collection
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl">
            Discover exquisite handcrafted pieces that blend contemporary elegance with timeless tribal artistry
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Filters */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-semibold text-lg">Filters</h2>
                <Button variant="ghost" size="sm" onClick={clearFilters} className="text-gray-500">
                  Clear All
                </Button>
              </div>

              {/* Search */}
              <div className="mb-6">
                <Label className="text-sm font-medium mb-2 block">Search</Label>
                <Input
                  type="search"
                  placeholder="Search jewelry..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full"
                />
              </div>

              <Separator className="mb-6" />

              {/* Category Filter */}
              <div className="mb-6">
                <Label className="text-sm font-medium mb-3 block">Category</Label>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="all"
                      checked={selectedCategory === "all"}
                      onCheckedChange={() => setSelectedCategory("all")}
                    />
                    <Label htmlFor="all" className="text-sm">All Categories</Label>
                  </div>
                  {categories.map(category => (
                    <div key={category.id} className="flex items-center space-x-2">
                      <Checkbox
                        id={category.id}
                        checked={selectedCategory === category.id}
                        onCheckedChange={() => setSelectedCategory(category.id)}
                      />
                      <Label htmlFor={category.id} className="text-sm">{category.name}</Label>
                    </div>
                  ))}
                </div>
              </div>

              <Separator className="mb-6" />

              {/* Price Range */}
              <div className="mb-6">
                <Label className="text-sm font-medium mb-3 block">Price Range</Label>
                <div className="space-y-2">
                  {priceRanges.map((range, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <Checkbox
                        id={`price-${index}`}
                        checked={priceRange[0] === range.min && priceRange[1] === range.max}
                        onCheckedChange={() => setPriceRange([range.min, range.max])}
                      />
                      <Label htmlFor={`price-${index}`} className="text-sm">{range.label}</Label>
                    </div>
                  ))}
                </div>
              </div>

              <Separator className="mb-6" />

              {/* Additional Filters */}
              <div className="mb-6">
                <Label className="text-sm font-medium mb-3 block">Filters</Label>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="in-stock"
                      checked={selectedFilters.inStock}
                      onCheckedChange={() => handleFilterChange('inStock')}
                    />
                    <Label htmlFor="in-stock" className="text-sm">In Stock</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="on-sale"
                      checked={selectedFilters.onSale}
                      onCheckedChange={() => handleFilterChange('onSale')}
                    />
                    <Label htmlFor="on-sale" className="text-sm">On Sale</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="new"
                      checked={selectedFilters.new}
                      onCheckedChange={() => handleFilterChange('new')}
                    />
                    <Label htmlFor="new" className="text-sm">New Arrivals</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="rating"
                      checked={selectedFilters.rating}
                      onCheckedChange={() => handleFilterChange('rating')}
                    />
                    <Label htmlFor="rating" className="text-sm">4+ Stars</Label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Results Header */}
            <div className="bg-white rounded-lg shadow-sm border p-4 mb-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <span className="text-gray-600">
                    {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'} found
                  </span>
                  {(searchQuery || selectedCategory !== "all") && (
                    <div className="flex flex-wrap gap-2">
                      {searchQuery && (
                        <Badge variant="secondary" className="text-xs">
                          Search: {searchQuery}
                          <button onClick={() => setSearchQuery("")} className="ml-1">×</button>
                        </Badge>
                      )}
                      {selectedCategory !== "all" && (
                        <Badge variant="secondary" className="text-xs">
                          Category: {categories.find(c => c.id === selectedCategory)?.name}
                          <button onClick={() => setSelectedCategory("all")} className="ml-1">×</button>
                        </Badge>
                      )}
                    </div>
                  )}
                </div>
                
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-48">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="featured">Featured</SelectItem>
                    <SelectItem value="newest">Newest First</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                    <SelectItem value="rating">Highest Rated</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Products Grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <Card className="text-center py-12">
                <CardContent>
                  <div className="text-gray-400 mb-4">
                    <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">No products found</h3>
                  <p className="text-gray-600 mb-4">Try adjusting your filters or search terms</p>
                  <Button onClick={clearFilters}>Clear All Filters</Button>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;