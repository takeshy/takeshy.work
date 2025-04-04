import "./globals.css";
import Header from "./components/Header";

export const metadata = {
  title: "takeshy.work - モダンなビジネスソリューション",
  description:
    "takeshy.workは最新のSaaS技術と生成AIを組み合わせて、あなたのビジネスに最適なソリューションを提供します",
  icons: {
    icon: '/favicon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
        />
      </head>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
