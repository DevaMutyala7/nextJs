export default function Docslayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex justify-start gap-20">
      <div className="w-50 bg-slate-500 h-full fixed p-10">
        <p>Chapter 1</p>
        <p>Chapter 2</p>
        <p>Chapter 3</p>
        <p>Chapter 4</p>
      </div>
      <div>{children}</div>
    </div>
  );
}
