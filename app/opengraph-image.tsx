import { ImageResponse } from "next/og";

import { perfil } from "@/content/perfil";

export const alt = `${perfil.nome} — ${perfil.papel}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: "#fafafa",
        color: "#14213d",
        padding: "72px",
      }}
    >
      <div style={{ display: "flex", fontSize: 24, letterSpacing: 4, color: "#5a6478" }}>
        {perfil.papel.toUpperCase()}
      </div>

      <div style={{ display: "flex", fontSize: 78, lineHeight: 1.05, fontWeight: 700 }}>
        {perfil.manchete}
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: 20, fontSize: 26 }}>
        <div
          style={{ display: "flex", width: 56, height: 6, backgroundColor: "#046a38" }}
        />
        {perfil.nome}
      </div>
    </div>,
    size,
  );
}
