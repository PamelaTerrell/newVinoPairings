export default function About() {
    return (
      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <img
            src="/Me.jpg"
            alt="Pamela Terrell"
            className="w-40 h-40 object-cover rounded-full border-4 border-gold shadow-md"
          />
          <div>
            <h1 className="text-3xl font-heading text-burgundy mb-4">About Vino Pairings</h1>
            <p className="text-lg font-body text-charcoal leading-relaxed">
              Welcome to Vino Pairings, your elegant guide to perfect wine and food combinations.
              I’m Pamela Terrell, a passionate enthusiast of fine cuisine and exquisite vintages.
              My mission is to help you discover pairings that elevate every meal into a memorable experience.
            </p>
          </div>
        </div>
  
        <div className="mt-8 bg-cream border-l-4 border-gold p-6">
          <blockquote className="italic font-body text-lg text-charcoal">
            “Wine is the only artwork you can drink.” – Luis Fernando Olaverri
          </blockquote>
        </div>
      </main>
    );
  }
  