export default function Panel({ tone = 'cream', title, id, children, className = '' }) {
  return (
    <section id={id} className={`panel panel--${tone} ${className}`}>
      <div className="container">
        {title && <h2 className="panel__title">{title}</h2>}
        {children}
      </div>
    </section>
  );
}
