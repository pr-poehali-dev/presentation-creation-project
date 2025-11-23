interface CategoryCardProps {
  title: string;
  image: string;
  count?: number;
}

const CategoryCard = ({ title, image, count }: CategoryCardProps) => {
  return (
    <a
      href="/catalog"
      className="group relative aspect-[4/5] overflow-hidden rounded-lg bg-secondary hover:shadow-lg transition-all duration-300"
    >
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
      
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
        <h3 className="text-xl font-bold mb-1">{title}</h3>
        {count && (
          <p className="text-sm text-white/80">{count} товаров</p>
        )}
      </div>
    </a>
  );
};

export default CategoryCard;