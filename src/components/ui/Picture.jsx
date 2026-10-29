
const files = import.meta.glob('../../assets/images/*.{jpg,jpeg,png,webp,svg}', { eager: true, import: 'default' });
const registry = Object.fromEntries(
  Object.entries(files).map(([path, url]) => [path.split('/').pop().replace(/\.\w+$/, ''), url]),
);

export default function Picture({ name, alt = '', className = '' }) {
  const src = registry[name];
  if (!src) {
    return (
      <div className={`picture picture--empty ${className}`} role="img" aria-label={alt || name}>
        <span>{name}</span>
      </div>
    );
  }
  return <img className={`picture ${className}`} src={src} alt={alt} loading="lazy" />;
}
