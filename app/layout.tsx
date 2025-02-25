"use client";
import "./globals.css";

// import React, { useEffect, useState } from "react";
import React from "react";
import Script from "next/script";

export default function RootLayout({ children }: { children: React.ReactNode }) {

  // Estado que armazena a escolha do usuário: 'accepted', 'rejected' ou null
  // const [consent, setConsent] = useState<"accepted" | "rejected" | null>(null);

  // Ao montar, lemos o localStorage para ver se o usuário já escolheu
  // useEffect(() => {
  //   const storedConsent = localStorage.getItem("cookie-consent");
  //   if (storedConsent === "accepted" || storedConsent === "rejected") {
  //     setConsent(storedConsent as "accepted" | "rejected");
  //   }
  // }, []);

  // Lida com a escolha de "Aceitar"
  // const handleAccept = () => {
  //   localStorage.setItem("cookie-consent", "accepted");
  //   setConsent("accepted");
  // };

  // Lida com a escolha de "Rejeitar"
  // const handleReject = () => {
  //   localStorage.setItem("cookie-consent", "rejected");
  //   setConsent("rejected");
  // };

  // Verificamos se estamos em produção e se existe um ID do GA
  const isProduction = process.env.NODE_ENV === "production";
  const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <html lang="pt-BR">
      <head>
        {/* Aqui dentro do <head> o Next.js insere metadados do metadata acima */}
      </head>
      <body className="bg-gray-100" suppressHydrationWarning={true}>

       {/* 
          1) Carregamos o script do GA apenas se:
             - ambiente = produção
             - GA_ID existe
             - consent = "accepted"
        */}
       
        {isProduction && GA_ID && (
          <>
            {/* Carrega a biblioteca do GA */}
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            {/* Configura o GA */}
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}');
              `}
            </Script>
          </>
        )}

        {/* 
          2) Se consent ainda for null, significa que o usuário não escolheu:
             exibimos o banner fixo no rodapé
        */}
        {/* {consent === null && (
          <div
            style={{
              position: "fixed",
              bottom: 0,
              left: 0,
              right: 0,
              background: "#444",
              color: "#fff",
              padding: "1rem",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              zIndex: 9999,
            }}
          >
            <p style={{ margin: 0 }}>
              Usamos cookies de análise para melhorar sua experiência. Você aceita?
            </p>
            <div style={{ display: "flex", gap: "1rem", marginLeft: "1rem" }}>
              <button
                onClick={handleAccept}
                style={{ padding: "0.5rem 1rem", backgroundColor: "green" }}
              >
                Aceitar
              </button>
              <button
                onClick={handleReject}
                style={{ padding: "0.5rem 1rem", backgroundColor: "red" }}
              >
                Rejeitar
              </button>
            </div>
          </div>
        )} */}
        {/* 3) Renderizamos o restante da aplicação */}

        {children}
      </body>
    </html>
  );
}