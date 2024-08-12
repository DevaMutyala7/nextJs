export default function Card({ children }: { children: React.ReactNode }) {
  const cardStyles = {
    backgroundColor: "white",
    padding: "1rem",
    borderRadius: "0.5rem",
    boxShadow: "7px -1px 13px -6px rgba(0,0,0,0.75)",
  };

  return <div style={cardStyles}>{children}</div>;
}
