export const MAC_SCREEN_BOUNDS = {
  full: {
    x: 76,
    y: 48,
    width: 104,
    height: 76,
    viewBoxWidth: 256,
    viewBoxHeight: 220,
  },
  monitor: {
    x: 76,
    y: 48,
    width: 104,
    height: 76,
    viewBoxWidth: 256,
    viewBoxHeight: 146,
  },
} as const;

type MacintoshSpriteProps = {
  variant?: "full" | "monitor";
};

export default function MacintoshSprite({
  variant = "full",
}: MacintoshSpriteProps) {
  const isFull = variant === "full";

  return (
    <svg
      viewBox={isFull ? "0 0 256 220" : "0 0 256 146"}
      role="img"
      aria-label={
        isFull
          ? "Pixel-art vintage computer with keyboard and mouse"
          : "Pixel-art vintage computer monitor"
      }
      className="h-auto w-full"
      shapeRendering="crispEdges"
    >
      <rect width="256" height={isFull ? "220" : "146"} fill="transparent" />

      <rect x="48" y="20" width="160" height="126" fill="#d6d3c9" />
      <rect x="52" y="24" width="152" height="6" fill="#f1efe7" />
      <rect x="52" y="30" width="8" height="108" fill="#f1efe7" />
      <rect x="196" y="30" width="8" height="108" fill="#a9a79f" />
      <rect x="60" y="132" width="136" height="6" fill="#a9a79f" />
      <rect x="64" y="138" width="128" height="8" fill="#6d6d6d" />

      <rect x="68" y="34" width="120" height="10" fill="#f1efe7" />
      <rect x="68" y="34" width="120" height="2" fill="#ffffff" />
      <rect x="72" y="38" width="18" height="2" fill="#6d6d6d" />
      <rect x="94" y="38" width="28" height="2" fill="#6d6d6d" />
      <rect x="126" y="38" width="24" height="2" fill="#6d6d6d" />
      <rect x="154" y="38" width="30" height="2" fill="#6d6d6d" />

      <rect x="70" y="46" width="116" height="82" fill="#a9a79f" />
      <rect x="74" y="50" width="108" height="74" fill="#0b1a33" />
      <rect x="74" y="50" width="108" height="4" fill="#1b3d61" />
      <rect x="74" y="54" width="4" height="66" fill="#132c4d" />
      <rect x="178" y="54" width="4" height="66" fill="#07101f" />
      <rect x="78" y="120" width="100" height="4" fill="#07101f" />

      <rect x="82" y="56" width="92" height="62" fill="#0b1a33" />
      <rect x="84" y="58" width="88" height="58" fill="#102746" opacity="0.42" />
      <rect x="88" y="62" width="30" height="4" fill="#1bee0c" opacity="0.18" />
      <rect x="88" y="70" width="42" height="4" fill="#1bee0c" opacity="0.12" />

      <rect x="58" y="56" width="6" height="42" fill="#6d6d6d" />
      <rect x="60" y="58" width="2" height="2" fill="#f1efe7" />
      <rect x="60" y="64" width="2" height="2" fill="#f1efe7" />
      <rect x="60" y="70" width="2" height="2" fill="#f1efe7" />
      <rect x="60" y="76" width="2" height="2" fill="#f1efe7" />
      <rect x="60" y="82" width="2" height="2" fill="#f1efe7" />
      <rect x="60" y="88" width="2" height="2" fill="#f1efe7" />

      <rect x="150" y="136" width="24" height="3" fill="#6d6d6d" />
      <rect x="150" y="137" width="24" height="1" fill="#2a2a2a" />
      <rect x="82" y="130" width="12" height="4" fill="#6d6d6d" />
      <rect x="98" y="130" width="12" height="4" fill="#6d6d6d" />
      <rect x="114" y="130" width="12" height="4" fill="#6d6d6d" />

      {isFull ? (
        <>
          <rect x="40" y="154" width="158" height="30" fill="#d6d3c9" />
          <rect x="44" y="158" width="150" height="4" fill="#f1efe7" />
          <rect x="44" y="162" width="4" height="18" fill="#f1efe7" />
          <rect x="190" y="162" width="4" height="18" fill="#a9a79f" />
          <rect x="48" y="180" width="142" height="4" fill="#6d6d6d" />

          <rect x="56" y="164" width="16" height="8" fill="#f1efe7" />
          <rect x="74" y="164" width="16" height="8" fill="#f1efe7" />
          <rect x="92" y="164" width="16" height="8" fill="#f1efe7" />
          <rect x="110" y="164" width="16" height="8" fill="#f1efe7" />
          <rect x="128" y="164" width="16" height="8" fill="#f1efe7" />
          <rect x="146" y="164" width="16" height="8" fill="#f1efe7" />
          <rect x="164" y="164" width="16" height="8" fill="#f1efe7" />

          <rect x="62" y="174" width="14" height="6" fill="#f1efe7" />
          <rect x="78" y="174" width="14" height="6" fill="#f1efe7" />
          <rect x="94" y="174" width="14" height="6" fill="#f1efe7" />
          <rect x="110" y="174" width="30" height="6" fill="#f1efe7" />
          <rect x="142" y="174" width="14" height="6" fill="#f1efe7" />
          <rect x="158" y="174" width="14" height="6" fill="#f1efe7" />

          <rect x="204" y="164" width="26" height="20" fill="#d6d3c9" />
          <rect x="206" y="166" width="22" height="4" fill="#f1efe7" />
          <rect x="206" y="170" width="2" height="12" fill="#f1efe7" />
          <rect x="226" y="170" width="2" height="12" fill="#a9a79f" />
          <rect x="210" y="174" width="14" height="4" fill="#6d6d6d" />
          <rect x="214" y="178" width="6" height="4" fill="#a9a79f" />
          <rect x="34" y="186" width="204" height="4" fill="#6d6d6d" opacity="0.4" />
        </>
      ) : null}

      {/* Screen bounds (full): x=76, y=48, width=104, height=76 */}
      {/* Screen bounds (monitor): x=76, y=48, width=104, height=76 */}
    </svg>
  );
}
