import "./globals.css";

export const metadata = {
  title: "Nusrat Jahan Trisha | Web Developer",
  description: "Portfolio of Nusrat Jahan Trisha, an aspiring web developer focused on problem-solving and meaningful digital experiences.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}