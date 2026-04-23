import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "56px",
          background:
            "radial-gradient(circle at top left, rgba(34,211,238,0.35), transparent 32%), linear-gradient(135deg, #020617 0%, #0f172a 45%, #1e293b 100%)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              display: "flex",
              width: 64,
              height: 64,
              borderRadius: 20,
              background: "rgba(34,211,238,0.18)",
              border: "1px solid rgba(103,232,249,0.45)",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 32,
            }}
          >
            ⚡
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 28, color: "#67e8f9" }}>agentskil.qzz.io</div>
            <div style={{ fontSize: 18, color: "#cbd5e1" }}>Agent Skill Resource Site</div>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 16, maxWidth: 920 }}>
          <div style={{ fontSize: 68, fontWeight: 800, lineHeight: 1.05 }}>Agent Skill Hub</div>
          <div style={{ fontSize: 30, lineHeight: 1.4, color: "#e2e8f0" }}>
            收录 Agent Skills、部署教程与生态资讯，面向 AI 开发者的内容资源站
          </div>
        </div>

        <div style={{ display: "flex", gap: 16, fontSize: 22, color: "#cbd5e1" }}>
          <div style={{ display: "flex", padding: "10px 18px", borderRadius: 9999, background: "rgba(15,23,42,0.56)", border: "1px solid rgba(148,163,184,0.3)" }}>Skills</div>
          <div style={{ display: "flex", padding: "10px 18px", borderRadius: 9999, background: "rgba(15,23,42,0.56)", border: "1px solid rgba(148,163,184,0.3)" }}>Tutorials</div>
          <div style={{ display: "flex", padding: "10px 18px", borderRadius: 9999, background: "rgba(15,23,42,0.56)", border: "1px solid rgba(148,163,184,0.3)" }}>News</div>
        </div>
      </div>
    ),
    size,
  );
}
