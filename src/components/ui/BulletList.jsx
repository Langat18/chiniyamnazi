export default function BulletList({ items, ordered = false, className = '' }) {
  const Tag = ordered ? 'ol' : 'ul';
  return (
    <Tag className={`list ${className}`}>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </Tag>
  );
}
