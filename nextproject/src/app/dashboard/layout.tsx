export default function DashboardLayout({
  children,
  users,
  analytics,
  revenue,
}: {
  children: React.ReactNode;
  users: React.ReactNode;
  revenue: React.ReactNode;
  analytics: React.ReactNode;
}) {
  return (
    <div>
      {children}
      <div>
        {users}
        {analytics}
      </div>
      <div>{revenue}</div>
    </div>
  );
}
