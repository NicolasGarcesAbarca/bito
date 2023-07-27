import Image from "next/image"

export default function Home() {
  return <main className="min-h-screen">
    <section className="grid grid-cols-2 px-28 min-h-screen bg-purple-primary text-purple-100">
      <div className="flex gap-10 flex-col justify-center">
        <div>
          <h1 className="font-bold text-6xl tracking-wider">ENCUENTRA</h1>
          <h1 className="font-bold text-6xl tracking-wider">LOS</h1>
          <h1 className="font-bold text-6xl tracking-wider">MEJORES</h1>
          <h1 className="font-bold text-6xl text-cyan-primary tracking-wider">BEATS</h1>
        </div>
        <div>
          <button className="p-4 bg-cyan-primary text-slate-800">Descubrir</button>
        </div>
      </div>
    </section>
    <section className="min-h-screen bg-gray-300">

    </section>

  </main>
}