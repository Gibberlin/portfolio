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
        <div className="runner-track">    
            
          </div>
          <div className="runner-shell">
            <div className="runner">
              <Image
                src="/images/rider.png"
                alt=""
                width={120}
                height={90}
                className="runner-image"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    
  );
}
