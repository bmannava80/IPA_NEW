export default function TabLayout({ title, children }) {
  return (
    <div className="tab-layout">
      {typeof title === 'string' ? <h3 className="tab-title">{title}</h3> : title}
      <div>{children}</div>
    </div>
  );
}
