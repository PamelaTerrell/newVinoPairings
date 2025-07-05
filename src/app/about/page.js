import Image from 'next/image';

export const metadata = {
  title: 'About - Vino Pairings',
  description: 'Learn more about the creator of Vino Pairings.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#f9f6ef] text-[#4b3f2f] font-serif py-10">
      <div className="max-w-3xl mx-auto p-6 bg-[#fdfaf3] border border-[#d8cfc4] shadow-md rounded">
        <h1 className="text-3xl md:text-4xl font-serif font-bold text-center mb-6 tracking-wide">
          Welcome to Vino Pairings
        </h1>
        <div className="flex flex-col items-center">
          <Image
            src="/Me.jpg"
            alt="Photo of Pamela Terrell"
            width={200}
            height={200}
            style={{ objectFit: 'cover' }}
            className="rounded-full border-4 border-[#d8cfc4] shadow-lg"
          />
          <p className="mt-6 text-lg text-center leading-relaxed">
            Hi, I’m Pamela Terrell, creator of Vino Pairings. I’ve always enjoyed exploring how great food and wine can complement each other, and I built this site to make it easy for everyone to find delicious combinations. Whether you’re hosting a dinner party or simply enjoying a quiet meal, I hope you’ll find inspiration here.
          </p>
        </div>
      </div>
    </div>
  );
}
