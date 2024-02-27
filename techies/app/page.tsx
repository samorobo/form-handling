import Image from "next/image";
import First from "./components/page";
//import { useRouter } from "next/router";

export default function Home() {
  // const router = useRouter()
  return (
    <div className="max-w-72 mx-auto px-4 m-0 h-full bg-green-500 absolute">
      <First />

      {/* <button onClick={() => router.push('/assured')}>main</button> */}
      </div>
  );
}
