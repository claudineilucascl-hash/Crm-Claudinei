"use client";

import { useState } from "react";
import { createClient } from "@supabase/supabase-js";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function entrar(e) {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    );

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password
    });

    if (error) {
      setMessage(error.message);
    } else {
      window.location.href = "/dashboard";
    }

    setLoading(false);
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 20
      }}
    >
      <form
        onSubmit={entrar}
        style={{
          width: "100%",
          maxWidth: 380,
          background: "#fff",
          padding: 30,
          borderRadius: 16,
          boxShadow: "0 8px 30px #0001"
        }}
      >
        <h1>CRM Grandes Soluções</h1>
        <p>Acesse seu painel</p>

        <input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{
            width: "100%",
            boxSizing: "border-box",
            padding: 14,
            margin: "8px 0"
          }}
        />

        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={{
            width: "100%",
            boxSizing: "border-box",
            padding: 14,
            margin: "8px 0"
          }}
        />

        <button
          type="submit"
          disabled={loading}
          style={{
            width: "100%",
            padding: 14,
            marginTop: 12
          }}
        >
          {loading ? "Entrando..." : "Entrar"}
        </button>

        {message && (
          <p style={{ color: "red" }}>
            {message}
          </p>
        )}
      </form>
    </main>
  );
}
