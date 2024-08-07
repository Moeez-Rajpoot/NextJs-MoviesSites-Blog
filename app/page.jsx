import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen bg-[#1c1a1a] justify-center items-center">
      <div className="w-80% h-fit pt-5">
        <Image
          width={1100}
          height={1000}
          alt="A person holding a remote and choosing between different screens"
          src="https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2024/05/person-holding-remote-and-choosing-between-different-screens.png"
        />
      </div>
    </main>
  );
}