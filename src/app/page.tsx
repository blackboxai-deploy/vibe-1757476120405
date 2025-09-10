import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const HomePage = () => {
  // Featured products data
  const featuredProducts = [
    {
      id: 1,
      name: "Celestial Crescent Necklace",
      price: 2499,
      originalPrice: 3299,
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/ebb6119c-05b7-451c-8389-00f0976b6ee2.png",
      category: "Contemporary",
      isNew: true
    },
    {
      id: 2,
      name: "Tribal Thunder Cuff",
      price: 3999,
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/fa16e096-5b8a-4ab0-a657-1db81d03b34d.png",
      category: "Tribal",
      rating: 4.8
    },
    {
      id: 3,
      name: "Bohemian Dream Earrings",
      price: 1899,
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/b22ce9fb-665f-4f48-ab7c-477da3bc3045.png",
      category: "Tribal",
      rating: 4.9
    },
    {
      id: 4,
      name: "Modern Infinity Ring",
      price: 1599,
      originalPrice: 1999,
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/cce8a5e9-bc61-4a15-818a-11c847f74d6b.png",
      category: "Contemporary",
      isNew: true
    }
  ];

  const collections = [
    {
      name: "Contemporary",
      description: "Modern minimalist designs for everyday elegance",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/d7e4b0ab-6c26-48ad-be92-c0ba821a776d.png",
      itemCount: 120
    },
    {
      name: "Tribal",
      description: "Traditional patterns celebrating cultural heritage",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/c71cc8ef-99fe-451b-81e5-b57bcd847a3e.png",
      itemCount: 85
    },
    {
      name: "Bridal",
      description: "Exquisite pieces for your special moments",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/99035f83-4016-4404-8e83-e2431b9e5279.png",
      itemCount: 45
    },
    {
      name: "Men's",
      description: "Masculine designs with sophisticated appeal",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/02fe7e7a-7bae-4025-b525-f388786fec2e.png",
      itemCount: 60
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/4d4ec26b-2b4c-46a8-aaec-3d30d14bb34f.png')`
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl">
          <h1 className="font-playfair text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Timeless Silver
            <span className="block text-4xl md:text-6xl text-gray-300">Artistry</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto leading-relaxed">
            Where contemporary elegance meets traditional tribal craftsmanship in exquisite silver jewelry
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100 font-semibold px-8 py-3">
              <Link href="/products">Explore Collection</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900 font-semibold px-8 py-3">
              <Link href="/about">Our Story</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-4xl font-bold text-gray-900 mb-4">
              Featured Pieces
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Handpicked treasures that showcase the perfect blend of contemporary design and traditional craftsmanship
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <Card key={product.id} className="group cursor-pointer hover:shadow-lg transition-all duration-300">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {product.isNew && (
                      <Badge className="absolute top-3 left-3 bg-gray-900">
                        New
                      </Badge>
                    )}
                    {product.originalPrice && (
                      <Badge className="absolute top-3 right-3 bg-red-600">
                        Sale
                      </Badge>
                    )}
                  </div>
                  <div className="p-4">
                    <div className="text-sm text-gray-500 mb-1">{product.category}</div>
                    <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-gray-600 transition-colors">
                      {product.name}
                    </h3>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <span className="font-bold text-gray-900">₹{product.price.toLocaleString()}</span>
                        {product.originalPrice && (
                          <span className="text-sm text-gray-500 line-through">
                            ₹{product.originalPrice.toLocaleString()}
                          </span>
                        )}
                      </div>
                      {product.rating && (
                        <div className="flex items-center text-sm">
                          <svg className="w-4 h-4 text-yellow-400 mr-1" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          <span className="text-gray-600">{product.rating}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Button size="lg" variant="outline">
              <Link href="/products">View All Products</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Collections Showcase */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-4xl font-bold text-gray-900 mb-4">
              Our Collections
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Discover diverse styles that celebrate both modern sophistication and timeless traditions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {collections.map((collection) => (
              <Card key={collection.name} className="group cursor-pointer hover:shadow-xl transition-all duration-300">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src={collection.image}
                      alt={collection.name}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-300"></div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl font-playfair">{collection.name}</CardTitle>
                    <p className="text-gray-600 text-sm">{collection.description}</p>
                    <div className="flex justify-between items-center mt-2">
                      <span className="text-sm text-gray-500">{collection.itemCount} items</span>
                      <Button size="sm" variant="ghost" className="text-gray-900 hover:text-gray-600">
                        <Link href={`/products?category=${collection.name.toLowerCase()}`}>
                          Explore →
                        </Link>
                      </Button>
                    </div>
                  </CardHeader>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Story Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-playfair text-4xl font-bold text-gray-900 mb-6">
                Crafted with Heritage
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Each piece at Luxe Silver tells a story of masterful craftsmanship, where traditional techniques meet contemporary design. Our artisans blend time-honored methods with modern aesthetics to create jewelry that transcends trends.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                From the intricate patterns of tribal ornaments to the clean lines of contemporary pieces, every creation is a testament to our commitment to quality and artistic excellence.
              </p>
              <Button size="lg" className="bg-gray-900 hover:bg-gray-800">
                <Link href="/about">Discover Our Story</Link>
              </Button>
            </div>
            <div className="relative">
              <img
                src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/104ebbea-d6e4-492b-8446-dfb97263661e.png"
                alt="Artisan crafting silver jewelry"
                className="rounded-lg shadow-xl w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-playfair text-3xl font-bold mb-4">
            Stay Connected
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Be the first to discover new collections, exclusive designs, and special offers from Luxe Silver
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
            <Button className="bg-white text-gray-900 hover:bg-gray-100 font-semibold px-6 py-3">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;