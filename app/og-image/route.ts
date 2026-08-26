export const dynamic = "force-static";

export function GET() {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
    <rect width="1200" height="630" fill="#f4f0e8"/>
    <rect x="54" y="54" width="1092" height="522" fill="#fffdf8" stroke="#18304d" stroke-width="3"/>
    <rect x="54" y="54" width="18" height="522" fill="#b7352d"/>
    <text x="115" y="215" fill="#b7352d" font-family="Arial, sans-serif" font-size="31" font-weight="700" letter-spacing="7">THE EPOCH PROJECT</text>
    <text x="110" y="350" fill="#14253f" font-family="Georgia, serif" font-size="112" font-weight="700">EPOCH</text>
    <text x="115" y="430" fill="#14253f" font-family="Arial, sans-serif" font-size="43">APUSH 美国史学习实验室</text>
    <text x="115" y="505" fill="#697586" font-family="Arial, sans-serif" font-size="28">概念关联 · 历史情境化 · 因果推理</text>
  </svg>`;
  return new Response(svg, { headers: { "content-type": "image/svg+xml; charset=utf-8", "cache-control": "public, max-age=31536000, immutable" } });
}
