type PixelRect = {
  x: number;
  y: number;
  width: number;
  height: number;
  fill: string;
};

const palette = {
  outline: "#111111",
  hair: "#7a2d12",
  hairHighlight: "#dc780e",
  skin: "#ffd166",
  jacket: "#1bee0c",
  jacketShade: "#0f7f17",
  scarf: "#f7f39a",
  pack: "#194f63",
  pants: "#118ab2",
  pantsShade: "#0b5f7a",
  shoes: "#ef476f",
  shoesShade: "#912548",
  glove: "#f4d35e",
} as const;

function rect(x: number, y: number, width: number, height: number, fill: string): PixelRect {
  return { x, y, width, height, fill };
}

function makeFrame(
  leftArmY: number,
  leftArmHeight: number,
  rightArmY: number,
  rightArmHeight: number,
  leftLegX: number,
  leftLegY: number,
  leftLegHeight: number,
  rightLegX: number,
  rightLegY: number,
  rightLegHeight: number,
  leftShoeX: number,
  leftShoeY: number,
  leftShoeWidth: number,
  rightShoeX: number,
  rightShoeY: number,
  rightShoeWidth: number,
  torsoY = 16,
  leanOffset = 0,
): PixelRect[] {
  const ox = leanOffset;

  return [
    rect(19 + ox, 7, 10, 1, palette.hairHighlight),
    rect(18 + ox, 8, 12, 2, palette.hair),
    rect(17 + ox, 10, 13, 2, palette.outline),
    rect(18 + ox, 11, 10, 4, palette.skin),
    rect(28 + ox, 12, 1, 1, palette.outline),
    rect(18 + ox, 15, 9, 1, palette.outline),
    rect(17 + ox, 15, 2, 2, palette.hair),
    rect(16 + ox, 16, 3, 3, palette.hair),
    rect(20 + ox, torsoY, 9, 1, palette.scarf),
    rect(18 + ox, torsoY + 1, 12, 6, palette.jacket),
    rect(18 + ox, torsoY + 1, 2, 6, palette.jacketShade),
    rect(28 + ox, torsoY + 2, 2, 5, palette.jacketShade),
    rect(17 + ox, torsoY + 2, 2, 5, palette.pack),
    rect(21 + ox, torsoY + 2, 2, 1, palette.outline),
    rect(20 + ox, torsoY + 3, 1, 3, palette.outline),
    rect(29 + ox, rightArmY, 2, rightArmHeight, palette.jacket),
    rect(30 + ox, rightArmY + rightArmHeight - 2, 2, 2, palette.glove),
    rect(15 + ox, leftArmY, 2, leftArmHeight, palette.jacketShade),
    rect(14 + ox, leftArmY + leftArmHeight - 2, 2, 2, palette.glove),
    rect(20 + ox, 23, 8, 4, palette.pants),
    rect(20 + ox, 26, 3, 2, palette.pantsShade),
    rect(25 + ox, 26, 3, 2, palette.pantsShade),
    rect(leftLegX + ox, leftLegY, 3, leftLegHeight, palette.pants),
    rect(rightLegX + ox, rightLegY, 3, rightLegHeight, palette.pants),
    rect(leftLegX + ox, leftLegY + 1, 1, leftLegHeight - 1, palette.pantsShade),
    rect(rightLegX + ox, rightLegY + 1, 1, rightLegHeight - 1, palette.pantsShade),
    rect(leftShoeX + ox, leftShoeY, leftShoeWidth, 2, palette.shoes),
    rect(rightShoeX + ox, rightShoeY, rightShoeWidth, 2, palette.shoes),
    rect(leftShoeX + ox, leftShoeY + 1, leftShoeWidth, 1, palette.shoesShade),
    rect(rightShoeX + ox, rightShoeY + 1, rightShoeWidth, 1, palette.shoesShade),
  ];
}

const frames: PixelRect[][] = [
  makeFrame(18, 5, 16, 6, 20, 27, 8, 26, 26, 9, 19, 35, 5, 25, 35, 6, 16, 0),
  makeFrame(19, 4, 16, 7, 21, 27, 8, 27, 27, 8, 20, 35, 5, 27, 35, 5, 16, 0),
  makeFrame(20, 4, 17, 6, 22, 27, 7, 28, 28, 7, 21, 34, 5, 28, 35, 5, 16, 1),
  makeFrame(21, 4, 18, 5, 23, 28, 6, 28, 26, 9, 22, 34, 5, 27, 35, 6, 16, 1),
  makeFrame(18, 5, 19, 4, 22, 28, 6, 26, 26, 9, 21, 34, 5, 25, 35, 6, 16, 0),
  makeFrame(17, 6, 20, 4, 21, 27, 7, 25, 27, 8, 20, 35, 5, 24, 35, 5, 16, -1),
  makeFrame(16, 6, 19, 5, 20, 26, 9, 26, 28, 6, 19, 35, 6, 26, 34, 5, 16, -1),
  makeFrame(16, 7, 18, 5, 20, 26, 9, 27, 28, 6, 19, 35, 6, 27, 34, 5, 16, -1),
  makeFrame(17, 6, 17, 6, 20, 27, 8, 26, 26, 9, 19, 35, 5, 25, 35, 6, 16, 0),
  makeFrame(18, 5, 16, 7, 21, 27, 8, 27, 27, 8, 20, 35, 5, 27, 35, 5, 16, 0),
  makeFrame(19, 4, 17, 6, 22, 27, 7, 28, 28, 7, 21, 34, 5, 28, 35, 5, 16, 1),
  makeFrame(20, 4, 18, 5, 23, 28, 6, 28, 26, 9, 22, 34, 5, 27, 35, 6, 16, 1),
];

export default function Sprint() {
  return (
    <div className="runner-scene" aria-hidden="true">
      <div className="runner-clouds" />
      <div className="runner-hills" />
      <div className="runner-ground">
        <div className="runner">
          <svg
            className="runner-strip"
            width="576"
            height="48"
            viewBox="0 0 576 48"
            xmlns="http://www.w3.org/2000/svg"
            shapeRendering="crispEdges"
          >
            {frames.map((frame, frameIndex) => (
              <g key={frameIndex} transform={`translate(${frameIndex * 48},0)`}>
                {frame.map((pixel, pixelIndex) => (
                  <rect
                    key={`${frameIndex}-${pixelIndex}`}
                    x={pixel.x}
                    y={pixel.y}
                    width={pixel.width}
                    height={pixel.height}
                    fill={pixel.fill}
                  />
                ))}
              </g>
            ))}
          </svg>
        </div>
      </div>
    </div>
  );
}
