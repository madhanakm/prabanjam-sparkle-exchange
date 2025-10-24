import { Card } from "@/components/ui/card";

const products = [
  {
    title: "Silver Coins",
    category: "Silver Collection",
    image: "https://images.unsplash.com/photo-1610375461246-83df859d849d?w=800&q=80"
  },
  {
    title: "Gold Jewelry",
    category: "Gold Collection",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80"
  },
  {
    title: "Silver Bars",
    category: "Investment Grade",
    image: "https://images.unsplash.com/photo-1610375461229-96460e532ebe?w=800&q=80"
  },
  {
    title: "Diamond Jewelry",
    category: "Premium Collection",
    image: "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=800&q=80"
  }
];

const Products = () => {
  return (
    <section id="products" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our <span className="text-accent">Collection</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Explore our curated selection of premium precious metals and jewelry
          </p>
        </div>

        {/* Products grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {products.map((product, index) => (
            <Card 
              key={product.title}
              className="group overflow-hidden border-border/50 hover:shadow-elegant transition-all duration-500 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-square">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-sm text-accent font-medium mb-2">{product.category}</p>
                <h3 className="font-playfair text-xl font-semibold text-foreground">
                  {product.title}
                </h3>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
