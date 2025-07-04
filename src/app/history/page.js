export default function History() {
    const historyPoints = [
      {
        period: '6000 BC',
        event: 'Earliest Evidence',
        description:
          'Archaeologists have found evidence of grape wine production in the region of modern-day Georgia, making it one of the oldest known alcoholic beverages.',
      },
      {
        period: '1500 BC',
        event: 'Ancient Egypt',
        description:
          'Wine was highly valued in Ancient Egypt, often associated with religious rituals and feasts for the elite.',
      },
      {
        period: '700 BC',
        event: 'Greek Influence',
        description:
          'The Greeks advanced viticulture and spread winemaking throughout their colonies, emphasizing wine\'s cultural importance.',
      },
      {
        period: 'Roman Empire',
        event: 'Expansion and Innovation',
        description:
          'Romans perfected wine production, introduced new techniques, and expanded vineyards across Europe, laying foundations for modern winemaking.',
      },
      {
        period: 'Middle Ages',
        event: 'Monastic Preservation',
        description:
          'Monasteries preserved and improved winemaking knowledge, maintaining vineyards and producing wine primarily for religious ceremonies.',
      },
      {
        period: '19th Century',
        event: 'Phylloxera Crisis',
        description:
          'A devastating root louse, phylloxera, nearly wiped out European vineyards, leading to grafting techniques that saved the industry.',
      },
      {
        period: 'Modern Era',
        event: 'Global Renaissance',
        description:
          'Winemaking spread globally, with New World regions like California, Australia, and South America producing world-class wines.',
      },
    ];
  
    return (
      <main className="max-w-5xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-heading text-burgundy mb-12 text-center">
          A Brief History of Wine
        </h1>
  
        <div className="space-y-12">
          {historyPoints.map(({ period, event, description }) => (
            <section key={period} className="border-l-4 border-gold pl-8 relative">
              <span className="absolute -left-10 top-2 w-6 h-6 rounded-full bg-burgundy border-4 border-cream shadow-md"></span>
              <time className="block text-charcoal font-semibold text-lg mb-2">{period}</time>
              <h2 className="text-2xl font-heading text-burgundy mb-2">{event}</h2>
              <p className="text-charcoal font-body leading-relaxed max-w-prose">
                {description}
              </p>
            </section>
          ))}
        </div>
      </main>
    );
  }
  