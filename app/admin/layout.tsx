export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="min-h-screen bg-slate-100">
      <header className="border-b bg-white px-6 py-4">
        <h1 className="text-xl font-semibold">Admin Dashboard</h1>
      </header>
      <main className="mx-auto max-w-6xl px-6 py-8">{children}</main>
    </section>
  );
}
