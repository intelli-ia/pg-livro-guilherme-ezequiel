const gold = [
  "Liderar exige preparo",
  "Feedback com clareza",
  "Delegar sem fazer tudo sozinho",
  "Conversas difíceis",
  "Decisões com mais segurança",
  "Frete grátis",
];
const ink = [
  "O Preço da Liderança",
  "14 capítulos práticos",
  "Roteiros de conversa",
  "Exercícios e quadros de consulta",
  "Guilherme Ezequiel",
];

function Track({ items, reverse = false }: { items: string[]; reverse?: boolean }) {
  // a lista é repetida 2x (metade visível + cópia) para o loop de -50% não ter emenda
  const row = [...items, ...items, ...items, ...items];
  return (
    <div className={`band-track ${reverse ? "band-reverse" : ""}`}>
      {[0, 1].map((copy) => (
        <div key={copy} className="flex shrink-0 items-center gap-[26px] pr-[26px]">
          {row.map((text, i) => (
            <span key={`${copy}-${i}`} className="flex items-center gap-[26px]">
              <span>{text}</span>
              <i>✦</i>
            </span>
          ))}
        </div>
      ))}
    </div>
  );
}

/** Duas faixas inclinadas em loop, entre a hero e a segunda dobra. */
export default function Bands() {
  return (
    <div className="bands" aria-hidden="true">
      <div className="band band-gold">
        <Track items={gold} />
      </div>
      <div className="band band-ink">
        <Track items={ink} reverse />
      </div>
    </div>
  );
}
