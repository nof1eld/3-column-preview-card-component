export function Column(num, icon, title, text) {
  return (
    <div className="column" id={`column-${num}`}>
      <img src={`src/images/${icon}`} alt={title} />
      <h2>{title}</h2>
      <p>{text}</p>
      <button>Learn More</button>
    </div>
  );
}
