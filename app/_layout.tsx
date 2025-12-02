export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Dashboard</title>
        {/* Link to global styles or other meta tags */}
      </head>
      <body>
        {/* You can include a header, sidebar, or any other common layout elements here */}
        <header>
          {/* You could add a navigation or logo here */}
          <h1>Dashboard</h1>
        </header>
        <main>
          {/* This is where child content will be injected */}
          {children}
        </main>
        {/* You could add a footer here */}
      </body>
    </html>
  );
}
