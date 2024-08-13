export default function Card({
  children,
  width,
  height,
  ...rest
}: {
  children: React.ReactNode;
  width?: string;
  height?: string;
}) {
  const cardStyles = {
    backgroundColor: "white",
    padding: "1rem",
    borderRadius: "0.5rem",
    boxShadow: "7px -1px 13px -6px rgba(0,0,0,0.75)",
    width,
    height,
  };

  return (
    <div {...rest} style={cardStyles}>
      {children}
    </div>
  );
}
