"use client";

import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

export default function Dashboard() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    );

    supabase.auth.getUser().then(({ data }) => {
      setUser(data.user);
    });
  }, []);

  return (
    <main style={{ padding: 30 }}>
      <h1>CRM Grandes Soluções</h1>

      <p>Bem-vindo ao seu painel.</p>

      {user && <p>Usuário: {user.email}</p>}

      <div
        style={{
          background: "#fff",
          padding: 20,
          borderRadius: 12,
          marginTop: 20
        }}
      >
        <h2>Clientes e oportunidades</h2>

        <p>
          Aqui vamos construir seu CRM: clientes, contatos,
          oportunidades, tarefas, orçamentos e atendimento por voz.
        </p>
      </div>
    </main>
  );
}
