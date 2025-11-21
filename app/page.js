"use client";

export default function Home() {
  return (
    <main style={{ padding: "40px", textAlign: "center" }}>
      <h1>Simple Next.js Test Frontend</h1>
      <p>This is a clean test page.</p>

      <button
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer"
        }}
        onClick={() => alert("Button works!")}
      >
        Click Me
      </button>
    </main>
  );
}
