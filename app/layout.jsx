export const metadata = {
  title: "Lương Đức Phú | Full-stack Developer",
  description:
    "Portfolio của Lương Đức Phú — Full-stack Developer tại Bến Cát, Bình Dương.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="vi">
      <body>{children}</body>
    </html>
  );
}
