export const metadata = {
  title: "Grandes Soluções CRM",
  description: "CRM para lojas de móveis planejados",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
