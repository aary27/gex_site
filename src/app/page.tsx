import Link from "next/link";

export default function HomePage() {
  return (
    <main
      style={{
        backgroundImage: "url('/kert.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        color: "white",
      }}
    >
      {/* Navigation */}
      <nav
        style={{
          display: "flex",
          gap: "20px",
          marginTop: "20px",
          fontSize: "1.2rem",
        }}
      >
        <Link href="/people">About</Link>
        <Link href="/places">Projects</Link>
      </nav>

      {/* Centered welcome message */}
      <div
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1 style={{ fontSize: "3rem", textAlign: "center" }}>
          Kertasari, Sumbawa
        </h1>
      </div>
    </main>
  );
}
