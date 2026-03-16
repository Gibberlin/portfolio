import Image from "next/image";

export default function Sprint() {
  return (
    <div className="runner-scene" aria-hidden="true">
      <div className="runner-clouds" />
      <div className="runner-hills" />
      <div className="runner-ufo-track">
        <Image
          src="/images/alien.gif"
          alt=""
          width={72}
          height={72}
          className="runner-ufo"
          priority
        />
      </div>
      <div className="runner-ground">
        <div className="bike-shadow" />
        <div className="runner-rig">
          <div className="bike" aria-hidden="true">
            <div className="bike-wheel bike-wheel--rear">
              <span className="bike-wheel__hub" />
            </div>
            <div className="bike-wheel bike-wheel--front">
              <span className="bike-wheel__hub" />
            </div>
            <span className="bike-frame bike-frame--top" />
            <span className="bike-frame bike-frame--down" />
            <span className="bike-frame bike-frame--seat" />
            <span className="bike-frame bike-frame--fork" />
            <span className="bike-seat" />
            <span className="bike-handlebar" />
            <span className="bike-basket" />
            <span className="bike-pedal" />
          </div>
          <div className="runner-shell">
            <div className="runner">
              <Image
                src="/images/rider.png"
                alt=""
                width={56}
                height={56}
                className="runner-image"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
