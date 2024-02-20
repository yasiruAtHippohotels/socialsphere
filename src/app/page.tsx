import { useRouter } from "next/navigation";
import styles from "./home.module.css";

import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div>
        <h1>Creative Thoughts Agency.</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero
          blanditiis adipisci minima reiciendis a autem assumenda dolore.
        </p>
        <div className="flex gap-2">
          <button className="p-2 bg-slate-400">Learn More</button>
          <button className="p-2 bg-slate-400">Contact</button>
        </div>
        <div>
          <Image
            className=""
            src="/assets/brands.png"
            alt=""
            width={500}
            height={500}
          />
        </div>
      </div>
      <div>
        <Image src="/assets/hero.gif" alt="" width={500} height={500} />
      </div>
    </div>
  );
}
