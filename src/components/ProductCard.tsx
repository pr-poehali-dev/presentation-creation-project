import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface ProductCardProps {
  id?: number;
  image: string;
  title: string;
  brand: string;
  price: number;
  oldPrice?: number;
  rating?: number;
  isNew?: boolean;
  isSale?: boolean;
}

const ProductCard = ({
  id = 1,
  image,
  title,
  brand,
  price,
  oldPrice,
  rating = 5,
  isNew = false,
  isSale = false,
}: ProductCardProps) => {
  return (
    <a href={`/product/${id}`} className="group relative bg-card rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 block">
      <div className="relative aspect-square overflow-hidden bg-secondary">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {isNew && (
            <Badge className="bg-accent text-accent-foreground hover:bg-accent">
              NEW
            </Badge>
          )}
          {isSale && oldPrice && (
            <Badge variant="destructive">
              -{Math.round(((oldPrice - price) / oldPrice) * 100)}%
            </Badge>
          )}
        </div>

        <Button
          size="icon"
          variant="ghost"
          className="absolute top-3 right-3 bg-background/80 backdrop-blur-sm hover:bg-background opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <Icon name="Heart" size={20} />
        </Button>

        <Button
          className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity bg-primary text-primary-foreground hover:bg-primary/90"
        >
          В корзину
        </Button>
      </div>

      <div className="p-4 space-y-2">
        <p className="text-xs text-muted-foreground uppercase tracking-wide">
          {brand}
        </p>
        <h3 className="font-medium text-sm line-clamp-2 min-h-[2.5rem]">
          {title}
        </h3>
        
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Icon
              key={i}
              name="Star"
              size={14}
              className={i < rating ? 'fill-accent text-accent' : 'text-muted'}
            />
          ))}
        </div>

        <div className="flex items-center gap-2 pt-1">
          <span className="text-lg font-bold">{price.toLocaleString('ru-RU')} ₽</span>
          {oldPrice && (
            <span className="text-sm text-muted-foreground line-through">
              {oldPrice.toLocaleString('ru-RU')} ₽
            </span>
          )}
        </div>
      </div>
    </a>
  );
};

export default ProductCard;