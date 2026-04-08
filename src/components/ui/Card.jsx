function Card({ children }) {
  return (
    <div
      style={{
        padding: "20px",
        border: "1px solid #eee",
        borderRadius: "10px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
      }}
    >
      {children}
    </div>
  );
}

export default Card;