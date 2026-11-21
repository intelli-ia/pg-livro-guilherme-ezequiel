import Image from "next/image";
import AuthorPhoto from "@/components/AuthorPhoto";
import Bands from "@/components/Bands";
import BookMockup from "@/components/BookMockup";
import CTAButton from "@/components/CTAButton";
import FAQ from "@/components/FAQ";
import FreeShippingSeal from "@/components/FreeShippingSeal";
import Header from "@/components/Header";
import { Check, Compass, Lock, Scale, Tools, Users } from "@/components/Icons";
import LoopVideo from "@/components/LoopVideo";
import Marker from "@/components/Marker";
import Reveal from "@/components/Reveal";
import { AUTHOR, CHECKOUT_URL, IMAGES, PRICE_INSTALLMENTS, PRICE_OFFER, WHATSAPP_URL } from "@/lib/config";

const audience = [
  {
    icon: Compass,
    title: "Para quem quer se preparar antes da promoção",
    text: "Entenda o que muda quando, além de fazer bem o seu trabalho, você passa a responder pelo trabalho de uma equipe.",
  },
  {
    icon: Users,
    title: "Para quem acabou de assumir uma equipe",
    text: "Aprenda a alinhar expectativas, delegar responsabilidades e acompanhar as entregas sem precisar fazer tudo sozinho.",
  },
  {
    icon: Scale,
    title: "Para quem já lidera e enfrenta decisões difíceis",
    text: "Prepare-se para dar um feedback delicado, lidar com conflitos e tomar decisões que nem todo mundo vai aceitar.",
  },
  {
    icon: Tools,
    title: "Para quem quer aplicar a leitura no trabalho",
    text: "Use os roteiros de conversa, os exercícios e os quadros de consulta do livro quando surgir uma situação real.",
  },
];

const topics = [
  "Dar feedback com clareza, mostrando o que precisa mudar e combinando o próximo passo.",
  "Delegar responsabilidades e acompanhar as entregas sem ter que fazer tudo sozinho.",
  "Conduzir conversas difíceis, como cobrar uma entrega de alguém com quem você tem amizade.",
  "Desenvolver a autonomia da equipe para que as decisões do dia a dia não dependam sempre de você.",
  "Usar indicadores para definir prioridades e avaliar as consequências de uma decisão.",
];

const included = ["Livro físico O Preço da Liderança.", "Frete grátis."];

const authorChips = ["Do operacional à diretoria", "Mais de uma década com indústrias", "Mentor de líderes"];

export default function Home() {
  return (
    <main className="overflow-x-clip">
      <Header />

      {/* DOBRA 01 — HERO */}
      <section id="hero" className="grain bg-night relative isolate overflow-hidden text-white">
        {/* colagem de fotos do autor em baixa opacidade, só para preencher o fundo */}
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-20 grid grid-cols-3 grid-rows-6 opacity-[0.025] md:grid-cols-6 md:grid-rows-3">
          {Array.from({ length: 18 }, (_, i) => (
            <div key={i} className="relative overflow-hidden">
              <Image
                src={`/colagem/g${String(i + 1).padStart(2, "0")}.webp`}
                alt=""
                fill
                sizes="(min-width: 768px) 17vw, 34vw"
                className="object-cover grayscale"
              />
            </div>
          ))}
        </div>
        {/* escurece as bordas para a colagem se dissolver no fundo */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(90%_80%_at_50%_45%,transparent_30%,#161d26_100%)]"
        />

        <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-6 pb-20 pt-14 md:min-h-[100svh] md:grid-cols-12 md:gap-x-10 md:pb-24 md:pt-24">
          <div className="order-2 md:order-1 md:col-span-6 md:pr-0">
            <Reveal delay={0.08}>
              <h1 className="gold-text text-balance text-[clamp(2.0625rem,1.25rem+3.1vw,3.75rem)] font-bold leading-[1.06] tracking-[-0.022em]">
                Lidere e tome decisões com mais segurança
              </h1>
            </Reveal>
            <Reveal delay={0.16}>
              <div className="my-6 h-px w-20 bg-gradient-to-r from-gold to-transparent" />
              <h2 className="text-base font-normal leading-relaxed text-white/80 md:text-[1.125rem]">
                Um livro em que ensino como desenvolver pessoas, delegar responsabilidades e enfrentar decisões
                difíceis. Para quem já lidera ou deseja se tornar líder.
              </h2>
            </Reveal>
            <Reveal delay={0.24}>
              <div className="mt-9">
                <CTAButton size="lg" glow />
              </div>
            </Reveal>
          </div>

          {/* livro sobre a faixa dourada, com o selo de frete grátis */}
          <div className="relative order-1 md:order-2 md:col-span-6 md:flex md:flex-col md:justify-center md:self-stretch">
            <div
              aria-hidden
              className="pointer-events-none absolute -bottom-8 -top-14 left-1/2 -z-10 w-[11.5rem] -translate-x-1/2 bg-gradient-to-b from-gold-soft via-gold to-gold-deep shadow-[0_40px_90px_-30px_rgba(240,178,33,0.45)] md:-bottom-24 md:-top-24 md:w-[15rem]"
            />
            <div className="relative mx-auto flex h-[26rem] w-full max-w-md items-center justify-center md:h-[34rem] md:max-w-none">
              <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[26rem] w-[26rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(240,178,33,0.28),transparent)] md:h-[34rem] md:w-[34rem]" />

              <Reveal y={40} delay={0.1} className="relative">
                <BookMockup width="clamp(12rem, 58vw, 21rem)" />
                <FreeShippingSeal className="absolute -right-8 top-5 z-20 w-[6.5rem] md:-right-12 md:top-10 md:w-[8.5rem]" />
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* FAIXAS EM LOOP */}
      <Bands />

      {/* DOBRA 02 — PARA QUEM É O LIVRO */}
      <section id="para-quem" className="bg-light relative pb-32 pt-24 text-ink md:pb-40 md:pt-32">
        <div className="mx-auto grid max-w-6xl gap-14 px-6 md:grid-cols-12 md:items-stretch md:gap-x-16">
          <div className="md:col-span-7">
            <Reveal>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold-deep">Para quem é o livro</p>
              <h2 className="type-section mt-4 font-bold">
                Um livro pensado para quem quer <Marker>assumir a liderança</Marker> ou já é líder.
              </h2>
            </Reveal>

            <ul className="mt-10 divide-y divide-ink/10 border-y border-ink/10">
              {audience.map(({ icon: Icon, title, text }, i) => (
                <li key={title}>
                  <Reveal delay={i * 0.06}>
                    <div className="flex gap-5 py-6">
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-ink text-gold">
                        <Icon className="h-6 w-6" />
                      </span>
                      <div>
                        <h3 className="text-lg font-bold leading-snug text-ink">{title}</h3>
                        <p className="mt-1.5 text-base leading-[1.7] text-muted">{text}</p>
                      </div>
                    </div>
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>

          <Reveal y={40} className="md:col-span-5 md:h-full [&>div]:md:h-full">
            <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden md:aspect-auto md:h-full md:max-w-none rounded-[2rem] shadow-[0_40px_80px_-40px_rgba(22,29,38,0.6)]">
              {IMAGES.author && (
                <Image
                  src={IMAGES.author}
                  alt={`${AUTHOR} em ambiente de trabalho`}
                  fill
                  sizes="(min-width: 768px) 28rem, 90vw"
                  className="object-cover object-top"
                />
              )}
              <div aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* DOBRA 03 — O QUE VOCÊ VAI APRENDER */}
      <section
        id="conteudo"
        className="grain bg-night-2 relative isolate -mt-16 rounded-t-[4rem] pb-32 pt-24 text-white md:pb-40 md:pt-32"
      >
        <div className="relative mx-auto grid max-w-6xl gap-14 px-6 md:grid-cols-12 md:gap-x-16">
          {/* coluna esquerda: fixa no desktop enquanto os tópicos rolam */}
          <div className="md:col-span-5 md:self-start md:sticky md:top-28">
            <Reveal>
              <h2 className="type-section font-bold">
                Você vai <span className="gold-text">aprender a:</span>
              </h2>
              <div className="my-6 h-px w-24 bg-gradient-to-r from-gold to-transparent" />
              <p className="text-base leading-[1.75] text-white/75 md:text-lg">
                São <strong className="font-semibold text-gold">14 capítulos práticos</strong> onde você encontrará
                situações reais, exercícios e roteiros de conversa para aplicar no trabalho.
              </p>
            </Reveal>
            <Reveal y={40}>
              <div className="relative mt-8 aspect-video overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] shadow-[0_30px_70px_-30px_rgba(0,0,0,0.7)]">
                <LoopVideo
                  src="/livro-folheando.mp4"
                  poster="/livro-folheando-poster.webp"
                  label="Folheando o sumário do livro O Preço da Liderança"
                  className="absolute inset-0 size-full object-cover"
                />
              </div>
            </Reveal>
          </div>

          {/* coluna direita: tópicos */}
          <div className="md:col-span-7">
            <ol className="space-y-14 md:space-y-24">
              {topics.map((text, i) => (
                <li key={i}>
                  <Reveal>
                    <div className="flex items-start gap-5 border-t border-white/15 pt-9 md:gap-7">
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gold text-xl font-bold text-ink md:h-14 md:w-14 md:text-2xl">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <p className="pt-0.5 text-xl font-bold leading-snug text-white md:text-2xl">{text}</p>
                    </div>
                  </Reveal>
                </li>
              ))}
              <li className="md:pt-16">
                <Reveal y={40}>
                  <div className="rounded-3xl bg-gold p-8 text-ink md:p-12">
                    <h3 className="text-2xl font-bold leading-snug md:text-[1.75rem]">
                      Lidar com o peso de liderar sem deixar que o cargo tome conta da sua vida.
                    </h3>
                    <p className="mt-4 text-base leading-[1.75] text-ink/80 md:text-lg">
                      Reconheça os sinais de sobrecarga e preserve seus limites nos momentos de maior pressão.
                    </p>
                    <div className="mt-8">
                      <CTAButton variant="dark" size="lg" />
                    </div>
                  </div>
                </Reveal>
              </li>
            </ol>
          </div>
        </div>
      </section>

      {/* DOBRA 04 — OFERTA */}
      <section
        id="oferta"
        className="bg-paper relative -mt-16 rounded-t-[4rem] pb-28 pt-24 text-ink md:pb-36 md:pt-32"
      >
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <h2 className="type-section mx-auto max-w-3xl text-center font-bold">
              Garanta seu exemplar de <Marker>O Preço da Liderança.</Marker>
            </h2>
          </Reveal>

          <Reveal y={40} className="mt-14">
            <div className="grain bg-night relative isolate overflow-hidden rounded-[2.5rem] border border-gold/25 p-7 text-white shadow-[0_50px_100px_-40px_rgba(22,29,38,0.75)] md:p-14">
              {/* retângulo amarelo atrás do livro, com a altura total do cartão */}
              <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 hidden md:block">
                <div className="grid h-full grid-cols-12 gap-10 px-14">
                  <div className="col-span-5 flex justify-center">
                    <div className="h-full w-[12rem] bg-gradient-to-b from-gold-soft via-gold to-gold-deep shadow-[0_40px_90px_-30px_rgba(240,178,33,0.45)]" />
                  </div>
                </div>
              </div>
              <div className="grid items-center gap-12 md:grid-cols-12 md:gap-10">
                <div className="relative flex justify-center md:col-span-5">
                  {/* retângulo amarelo no celular: do topo do cartão até o fim da área do livro */}
                  <div
                    aria-hidden
                    className="pointer-events-none absolute -bottom-3 -top-7 left-1/2 -z-10 w-[9rem] -translate-x-1/2 bg-gradient-to-b from-gold-soft via-gold to-gold-deep shadow-[0_40px_90px_-30px_rgba(240,178,33,0.45)] md:hidden"
                  />
                  <div className="relative">
                    <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[120%] w-[150%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(240,178,33,0.3),transparent)]" />
                    <BookMockup width="clamp(11.5rem, 50vw, 18rem)" />
                  </div>
                </div>

                <div className="md:col-span-7">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">Ao comprar, você recebe:</p>
                  <ul className="mt-5 space-y-4">
                    {included.map((item) => (
                      <li key={item} className="flex items-start gap-3.5 text-base text-white/90 md:text-lg">
                        <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold text-ink">
                          <Check className="h-3.5 w-3.5" />
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="my-8 h-px bg-white/12" />

                  <div className="flex flex-wrap items-end justify-between gap-x-8 gap-y-3">
                    <div>
                      <p className="inline-block rounded-full bg-gold/15 px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-gold">
                        Condição especial de lançamento
                      </p>
                      <p className="mt-5">
                        <span className="gold-text text-[2.75rem] font-bold leading-[1.05] tracking-tight sm:text-[4rem] md:text-[5rem]">
                          {PRICE_OFFER}
                        </span>
                      </p>
                      <p className="mt-3 text-xl font-medium text-white/80">{PRICE_INSTALLMENTS}</p>
                    </div>
                  </div>

                  <div className="mt-8">
                    <CTAButton size="lg" full label="Quero garantir meu exemplar" href={CHECKOUT_URL} />
                    <p className="mt-4 flex items-center justify-center gap-2 text-sm text-white/60">
                      <Lock className="h-4 w-4 text-gold" /> Pagamento seguro.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* DOBRA 05 — SOBRE O AUTOR */}
      <section
        id="autor"
        className="grain bg-night relative isolate -mt-16 overflow-hidden rounded-t-[4rem] pb-32 pt-24 text-white md:pb-40 md:pt-32"
      >
        <div className="relative mx-auto grid max-w-6xl gap-16 px-6 md:grid-cols-12 md:items-stretch md:gap-x-16">
          <Reveal className="md:col-span-5 md:h-full [&>div]:md:h-full">
            <AuthorPhoto chips={authorChips} />
          </Reveal>

          <div className="md:col-span-7">
            <Reveal>
              <h2 className="type-section font-bold">
                Sou {AUTHOR}, e também precisei aprender a <span className="gold-text">liderar.</span>
              </h2>
              <div className="my-7 h-px w-24 bg-gradient-to-r from-gold to-transparent" />
            </Reveal>

            <div className="space-y-5 text-base leading-[1.8] text-white/75 md:text-lg">
              <Reveal>
                <p>
                  Comecei no operacional aos dezoito anos e percorri o caminho até a diretoria. Hoje, sou consultor
                  empresarial e mentor de líderes, sócio-fundador de uma consultoria que atende indústrias brasileiras
                  há mais de uma década.
                </p>
              </Reveal>
              <Reveal>
                <p>
                  Nesse percurso, cometi erros, enfrentei decisões difíceis e precisei ouvir verdades que mudaram minha
                  maneira de conduzir pessoas. Acompanhando outros líderes, reconheci muitas das dúvidas que eu mesmo
                  havia carregado.
                </p>
              </Reveal>
              <Reveal>
                <p>
                  Foi dessa experiência que nasceu <strong className="font-semibold text-white">O Preço da Liderança</strong>.
                  Escrevi o livro que gostaria de ter encontrado quando assumi minhas primeiras responsabilidades: uma
                  conversa honesta sobre o que o cargo exige, com ferramentas para enfrentar situações que fazem parte
                  da vida de quem lidera.
                </p>
              </Reveal>
              <Reveal>
                <p className="border-l-2 border-gold pl-5 font-medium text-white">
                  Quero compartilhar esse aprendizado com você, seja para se preparar para sua primeira oportunidade ou
                  para conduzir melhor as responsabilidades que já assumiu.
                </p>
              </Reveal>
            </div>

            <Reveal>
              <p className="mt-9 text-2xl font-bold">{AUTHOR}</p>
              <p className="text-sm tracking-wide text-white/60">Consultor empresarial · Mentor de líderes</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* DOBRA 06 — PERGUNTAS FREQUENTES */}
      <section
        id="faq"
        className="bg-light relative -mt-16 rounded-t-[4rem] pb-32 pt-24 text-ink md:pb-40 md:pt-32"
      >
        <div className="mx-auto flex max-w-6xl flex-col gap-14 px-6 md:flex-row md:gap-20">
          <div className="shrink-0 md:w-[36%]">
            <div className="md:sticky md:top-28">
              <Reveal>
                <h2 className="type-section text-center font-bold md:text-left">Ficou com alguma dúvida?</h2>
                <div className="mx-auto my-6 h-px w-20 bg-gold md:mx-0" />
                <div className="rounded-3xl bg-ink p-7 text-center text-white md:text-left">
                  <p className="text-lg font-bold">Ainda precisa de ajuda?</p>
                  <p className="mt-2 text-sm leading-relaxed text-white/70">
                    Fale com nossa equipe pelo WhatsApp para esclarecer suas dúvidas.
                  </p>
                  <div className="mt-6">
                    <CTAButton
                      full
                      size="sm"
                      variant="whatsapp"
                      icon="whatsapp"
                      label="Tirar dúvidas pelo WhatsApp"
                      href={WHATSAPP_URL}
                    />
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
          <div className="md:flex-1">
            <Reveal>
              <FAQ />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ÚLTIMA DOBRA — CHAMADA FINAL */}
      <section
        id="contato"
        className="relative -mt-16 overflow-hidden rounded-t-[4rem] bg-gradient-to-b from-gold-soft to-gold pb-10 pt-28 text-ink md:pt-40"
      >
        <div className="mx-auto max-w-4xl px-6 text-center">
          <Reveal>
            <h2 className="type-section font-bold">Aproveite a condição especial de lançamento</h2>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="mt-14 pb-24 md:mt-20 md:pb-36">
              <CTAButton variant="white" size="lg" href={CHECKOUT_URL} />
            </div>
          </Reveal>
        </div>

        <footer className="relative mx-auto flex max-w-6xl flex-col items-center gap-1 border-t border-ink/15 px-6 pt-6 text-center text-sm text-ink/70">
          <span className="font-bold text-ink">O Preço da Liderança</span>
          <span>© 2026 {AUTHOR}. Todos os direitos reservados.</span>
        </footer>
      </section>
    </main>
  );
}
