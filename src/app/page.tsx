import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen p-8 pb-20 sm:p-20 font-sans bg-[#2c2c2c] text-white">
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-2xl">Good evening, NIKITIN</h1>
        <div className="flex items-center gap-4">
          <input
            type="text"
            placeholder="Search"
            className="p-2 rounded bg-[#3a3a3a] text-white"
          />
          <Image
            src="/profile-pic.jpg"
            alt="Profile Picture"
            width={40}
            height={40}
            className="rounded-full"
          />
        </div>
      </header>
      <main className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <section className="lg:col-span-2">
          <div className="bg-[#3a3a3a] p-6 rounded-lg mb-8">
            <h2 className="text-xl mb-4">Valorant</h2>
            <p className="mb-4">
              Valorant is a multiplayer computer game developed and published by Riot Games. It is Riot Games' first first-person shooter game.
            </p>
            <button className="bg-[#ff4655] text-white py-2 px-4 rounded">+53 Reviews</button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-[#3a3a3a] p-6 rounded-lg">
              <h3 className="text-lg mb-2">Uncharted 4</h3>
              <p>The sequel to Uncharted 3: Drake's Deception and the final installment of Nathan Drake's adventures.</p>
            </div>
            <div className="bg-[#3a3a3a] p-6 rounded-lg">
              <h3 className="text-lg mb-2">Dishonored: Standard Edition</h3>
              <p>Experience the definitive Dishonored collection.</p>
            </div>
          </div>
        </section>
        <aside className="bg-[#3a3a3a] p-6 rounded-lg">
          <h2 className="text-xl mb-4">Your Statistic</h2>
          <div className="flex flex-col items-center">
            <div className="text-4xl mb-2">12,340h</div>
            <div className="flex gap-4">
              <div className="text-center">
                <div className="text-lg">2,340h</div>
                <div>Dota 2</div>
              </div>
              <div className="text-center">
                <div className="text-lg">5,420h</div>
                <div>CS:GO</div>
              </div>
              <div className="text-center">
                <div className="text-lg">4,580h</div>
                <div>Fortnite</div>
              </div>
            </div>
          </div>
        </aside>
      </main>
    </div>
  );
}
