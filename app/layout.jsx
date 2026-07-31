export const metadata = {
  title: "Lương Đức Phú | Front-end Developer",
  description:
    "Portfolio của Lương Đức Phú — Front-end Developer tại TP. Hồ Chí Minh.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="vi">
      <body>{children}</body>
    </html>
  );
}
