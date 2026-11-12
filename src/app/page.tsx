import Image from "next/image";
import AuthorPhoto from "@/components/AuthorPhoto";
import BookMockup from "@/components/BookMockup";
import CTAButton from "@/components/CTAButton";
import FAQ from "@/components/FAQ";
import Header from "@/components/Header";
import { Check, Compass, Lock, Quote, Scale, Target, Tools, Truck, Users, Workshop } from "@/components/Icons";
import LoopVideo from "@/components/LoopVideo";
import Marker from "@/components/Marker";
import Reveal from "@/components/Reveal";
import { AUTHOR, CHECKOUT_URL, PRICE_FAQ, PRICE_FROM, PRICE_INSTALLMENTS, PRICE_OFFER, WHATSAPP_URL } from "@/lib/config";

const bullets = [
  {
    icon: Truck,
    title: "Livro físico com frete grátis",
    text: "Receba O Preço da Liderança em casa, sem custo adicional de entrega.",
  },
  {
    icon: Workshop,
    title: "Workshop de bônus",
    text: "Sua compra inclui o Workshop “Próximo Nível”, que será liberado posteriormente.",
  },
  {
    icon: Tools,
    title: "Ferramentas para sua rotina",
    text: "Encontre orientações para delegar, conduzir conversas difíceis e desenvolver sua equipe.",
  },
];

const learn = [
  {
    icon: Compass,
    title: "Comece pela própria liderança",
    text: "Reconheça como seu comportamento, sua comunicação e suas reações sob pressão influenciam a confiança das pessoas em você.",
  },
  {
    icon: Users,
    title: "Prepare-se para conduzir pessoas",
    text: "Aprenda a estruturar feedbacks, preparar conversas difíceis e desenvolver a autonomia da equipe, com responsabilidades e expectativas claras.",
  },
  {
    icon: Target,
    title: "Dê direção ao trabalho e às decisões",
    text: "Organize prioridades, acompanhe resultados e compreenda os indicadores financeiros que ajudam a avaliar as consequências das suas escolhas.",
  },
  {
    icon: Scale,
    title: "Entenda o preço pessoal do cargo",
    text: "Reconheça a sobrecarga, a solidão das decisões e os limites que precisam ser respeitados para sustentar sua atuação como líder.",
  },
];

const included = [
  "Livro físico O Preço da Liderança.",
  "Bônus: Workshop “Próximo Nível”, com liberação posterior.",
  "Frete grátis.",
];

function LearnIcon({ icon: Icon }: { icon: (typeof learn)[number]["icon"] }) {
  return (
    <span className="flex h-14 w-14 items-center justify-center rounded-xl border border-gold/30 bg-gold/10 text-gold">
      <Icon className="h-6 w-6" />
    </span>
  );
}

// posições (desktop) dos stats ao redor do livro na hero
// o terceiro (z-0) fica atrás do livro (z-10); os outros ficam na frente (z-20)
const heroStatPos = [
  "md:-left-6 md:top-[3%] md:z-20 md:-translate-y-14 xl:-left-24",
  "md:right-0 md:top-[41%] md:z-20 md:-translate-y-14 xl:right-4 min-[1400px]:-right-16!",
  "md:-bottom-0 md:-left-6 md:z-0 md:-translate-y-14 xl:-left-[5.75rem]",
];
const heroStatFloat = ["float-a", "float-b", "float-c"];
// posições no celular (abaixo de md): mesma composição do desktop, em escala menor
const heroStatPosM = ["left-0 top-0 z-20", "right-0 top-[40%] z-20", "-bottom-6 left-0 z-0"];

const authorChips =["Do operacional à diretoria", "Mais de uma década com indústrias", "Mentor de líderes"];

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Header />

      {/* DOBRA 01 — HERO + BULLETS */}
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

        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 pb-28 pt-14 md:min-h-[100svh] md:grid-cols-12 md:gap-x-6 md:pb-24 md:pt-24">
          <div className="order-2 md:order-1 md:col-span-6 md:max-w-[34rem] md:-translate-y-10 xl:-translate-x-6">
            <Reveal delay={0.08}>
              <h1 className="gold-text text-balance text-[clamp(1.875rem,1.2rem+2.8vw,3.25rem)] font-bold leading-[1.09] tracking-[-0.022em]">
                Prepare-se para liderar pessoas e tomar decisões com mais segurança.
              </h1>
            </Reveal>
            <Reveal delay={0.16}>
              <div className="my-5 h-px w-20 bg-gradient-to-r from-gold to-transparent" />
              <h2 className="text-[0.9375rem] font-normal leading-relaxed text-white/80 md:text-[1.0625rem]">
                No meu livro <strong className="font-semibold text-white">O Preço da Liderança</strong>, compartilho o
                que aprendi sobre desenvolver pessoas, delegar responsabilidades e enfrentar decisões difíceis, para
                quem deseja liderar ou já sente o peso do cargo.
              </h2>
            </Reveal>
            <Reveal delay={0.24}>
              <div className="mt-7">
                <CTAButton />
              </div>
            </Reveal>
          </div>

          {/* livro com os stats orbitando */}
          <div className="relative order-1 md:order-2 md:col-span-6 md:flex md:flex-col md:justify-center md:self-stretch lg:translate-x-10 xl:translate-x-20">
            {/* retângulo amarelo estático, com a altura total da hero, para destacar o livro */}
            <div
              aria-hidden
              className="pointer-events-none absolute -bottom-8 -top-14 left-1/2 -z-10 w-[11.5rem] -translate-x-1/2 bg-gradient-to-b from-gold-soft via-gold to-gold-deep shadow-[0_40px_90px_-30px_rgba(240,178,33,0.45)] md:-bottom-24 md:-top-24 md:w-[15rem]"
            />
            <div className="relative mx-auto block h-[31rem] w-full max-w-md md:h-[38rem] md:max-w-none">
              <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[26rem] w-[26rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(240,178,33,0.28),transparent)] md:h-[34rem] md:w-[34rem]" />

              <Reveal y={40} delay={0.1} className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
                <BookMockup width="clamp(12rem, 58vw, 21rem)" />
              </Reveal>

              {bullets.map(({ icon: Icon, title, text }, i) => (
                <Reveal
                  key={title}
                  delay={0.25 + i * 0.1}
                  className={`absolute w-[7.5rem] md:w-[14.5rem] ${heroStatPosM[i]} ${heroStatPos[i]}`}
                >
                  <article className={`rounded-xl border border-gold/30 bg-ink/80 p-2 shadow-2xl shadow-black/40 backdrop-blur-md md:rounded-2xl md:p-4 ${heroStatFloat[i]}`}>
                    <div className="flex items-center gap-1.5 md:gap-3">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-gold/15 text-gold md:h-9 md:w-9 md:rounded-xl">
                        <Icon className="h-3.5 w-3.5 md:h-5 md:w-5" />
                      </span>
                      <h3 className={`text-[0.625rem] font-bold leading-tight text-white md:text-[0.8125rem] ${i === 2 ? "max-w-[7.75rem]" : ""}`}>
                        {title}
                      </h3>
                    </div>
                    <p className="mt-1.5 text-[0.5625rem] leading-snug text-white/65 md:mt-2.5 md:text-xs md:leading-relaxed">{text}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* DOBRA 02 — MANIFESTO */}
      <section
        id="manifesto"
        className="bg-light relative -mt-16 rounded-t-[4rem] pb-28 pt-24 text-ink md:pb-36 md:pt-32"
      >
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <div className="mx-auto max-w-4xl text-center">
              <h2 className="font-bold tracking-[-0.025em]">
                <span className="block text-[clamp(1.25rem,1rem+1.1vw,1.875rem)] font-medium leading-snug tracking-normal text-ink/50">
                  O cargo pode mudar de um dia para o outro.
                </span>
                <span className="mt-5 block text-balance text-[clamp(2.125rem,1.3rem+3.6vw,4.25rem)] leading-[1.12]">
                  <Marker>O preparo para liderar precisa ser construído.</Marker>
                </span>
              </h2>
            </div>
          </Reveal>

          <div className="mx-auto mt-14 grid max-w-5xl gap-10 md:mt-20 md:grid-cols-12 md:gap-14">
            <Reveal className="md:col-span-5">
              <div className="md:sticky md:top-28">
                <Quote className="h-12 w-12 text-gold" />
                <p className="mt-4 text-2xl font-semibold leading-snug text-ink md:text-[1.75rem]">
                  Você se dedica, entrega resultados e quer crescer, mas como conquistar a confiança de uma equipe,
                  cobrar alguém com quem tem amizade ou tomar uma decisão que nem todos vão aceitar?
                </p>
              </div>
            </Reveal>

            <div className="space-y-6 text-base leading-[1.8] text-muted md:col-span-7 md:text-lg">
              <Reveal>
                <p>
                  Talvez você queira assumir essa responsabilidade. Talvez já a tenha assumido e ainda procure essas
                  respostas.
                </p>
              </Reveal>
              <Reveal>
                <p>
                  Eu também precisei aprender que saber executar um trabalho não me preparava, automaticamente, para
                  conduzir outras pessoas. E vi profissionais competentes enfrentarem essa mesma dificuldade, com a
                  cobrança chegando antes do preparo.
                </p>
              </Reveal>
              <Reveal>
                <p className="rounded-r-2xl border-l-4 border-gold bg-ink py-6 pl-6 pr-6 text-lg font-medium leading-relaxed text-white md:text-xl">
                  Você pode começar esse aprendizado antes da promoção e continuar se desenvolvendo depois dela.{" "}
                  <span className="text-gold">Liderar exige preparo, e ninguém deveria depender apenas do improviso para aprender.</span>
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* DOBRA 03 — O QUE VOCÊ VAI APRENDER */}
      <section
        id="conteudo"
        className="grain bg-night-2 relative isolate -mt-16 overflow-hidden rounded-t-[4rem] pb-32 pt-24 text-white md:pb-40 md:pt-32"
      >
        <div className="relative mx-auto max-w-6xl px-6">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="type-section font-bold">
                Aprenda a transformar os desafios da liderança em{" "}
                <span className="gold-text">ações concretas.</span>
              </h2>
              <div className="mx-auto my-7 h-px w-24 bg-gradient-to-r from-transparent via-gold to-transparent" />
              <p className="text-base leading-[1.75] text-white/75 md:text-lg">
                Em <strong className="font-semibold text-white">O Preço da Liderança</strong>, reuni experiências,
                conceitos e ferramentas para ajudar você a entender cada situação, avaliar suas escolhas e agir com mais
                preparo.
              </p>
              <p className="mt-4 text-base leading-[1.75] text-white/75 md:text-lg">
                Ao longo de <strong className="font-semibold text-gold">14 capítulos</strong>, conecto situações da vida
                profissional a perguntas, exercícios e orientações que você pode aplicar na sua rotina.
              </p>
            </div>
          </Reveal>

          {/* bento: cartão principal (texto + vídeo) e três cartões iguais embaixo */}
          <div className="mt-16 space-y-4 sm:space-y-5">
            <Reveal y={40}>
              <div className="grid overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] lg:grid-cols-[1.1fr_1fr]">
                <div className="flex flex-col justify-center gap-6 p-8 sm:p-10 lg:p-14">
                  <LearnIcon icon={learn[0].icon} />
                  <h3 className="text-[1.75rem] font-bold leading-snug text-white sm:text-[2rem]">{learn[0].title}</h3>
                  <p className="text-base leading-[1.8] text-white/75">{learn[0].text}</p>
                </div>
                {/* vídeo: no celular fica em cima do bloco; no desktop, à direita */}
                <div className="relative order-first aspect-video overflow-hidden border-b border-white/10 lg:order-none lg:aspect-auto lg:min-h-[16rem] lg:border-b-0 lg:border-l">
                  <LoopVideo
                    src="/livro-folheando.mp4"
                    poster="/livro-folheando-poster.webp"
                    label="Folheando o sumário do livro O Preço da Liderança"
                    className="absolute inset-0 size-full object-cover"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-ink/30 via-transparent to-ink/20" />
                </div>
              </div>
            </Reveal>

            <div className="grid gap-4 sm:gap-5 md:grid-cols-3">
              {learn.slice(1).map((item, i) => (
                <Reveal key={item.title} delay={i * 0.1} className="h-full">
                  <article className="flex h-full flex-col gap-6 rounded-2xl border border-white/10 bg-white/[0.03] p-8 transition-colors duration-300 hover:border-gold/30">
                    <LearnIcon icon={item.icon} />
                    <h3 className="text-[1.35rem] font-bold leading-snug text-white sm:text-2xl">{item.title}</h3>
                    <p className="text-base leading-[1.8] text-white/75">{item.text}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal>
            <div className="mx-auto mt-16 max-w-3xl text-center">
              <p className="text-base leading-[1.75] text-white/75 md:text-lg">
                Você encontrará roteiros de conversa, ferramentas de diagnóstico e quadros de consulta para voltar ao
                conteúdo quando precisar. Minha proposta é que a leitura ajude você a escolher o que mudar e colocar
                esse aprendizado em prática.
              </p>
              <div className="mt-9">
                <CTAButton size="lg" />
              </div>
            </div>
          </Reveal>
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
                      <p className="mt-5 text-lg text-white/55">
                        De <span className="line-through decoration-gold/70 decoration-2">{PRICE_FROM}</span>
                      </p>
                      <p className="flex items-start gap-3 text-white">
                        <span className="pt-3 text-xl font-medium text-white/70 md:pt-5">Por</span>
                        <span className="gold-text text-[5.5rem] font-bold leading-[0.95] tracking-tight sm:text-[7rem] md:text-[8.5rem]">
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

      {/* DOBRA 07 — CHAMADA FINAL */}
      <section
        id="contato"
        className="grain bg-night relative isolate -mt-16 overflow-hidden rounded-t-[4rem] pb-12 pt-24 text-white md:pt-32"
      >
        {/* retângulo amarelo atrás do livro, com a altura total da seção (mesma grade do conteúdo) */}
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 hidden md:block">
          <div className="mx-auto grid h-full max-w-6xl grid-cols-12 gap-10 px-6">
            <div className="col-span-5 col-start-8 flex justify-center">
              <div className="h-full w-[12rem] bg-gradient-to-b from-gold-soft via-gold to-gold-deep shadow-[0_40px_90px_-30px_rgba(240,178,33,0.45)]" />
            </div>
          </div>
        </div>

        <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-6 md:grid-cols-12 md:gap-10">
          <div className="order-2 text-center md:order-1 md:col-span-7 md:text-left">
            <Reveal>
              <h2 className="type-section font-bold">
                Não adie o seu <span className="gold-text">próximo nível.</span>
              </h2>
              <div className="mx-auto my-7 h-px w-24 bg-gradient-to-r from-gold to-transparent md:mx-0" />
              <p className="max-w-sm text-base leading-[1.75] text-white/80 md:text-lg">
                Garanta seu livro físico por <strong className="font-semibold text-gold">{PRICE_FAQ}</strong>, com frete
                grátis e o Workshop “Próximo Nível”.
              </p>
              <div className="mt-9">
                <CTAButton size="lg" label="Quero garantir meu exemplar" href={CHECKOUT_URL} />
              </div>
            </Reveal>
          </div>

          <div className="relative order-1 flex justify-center md:order-2 md:col-span-5">
            {/* retângulo amarelo no celular: do topo da seção até o fim da área do livro */}
            <div
              aria-hidden
              className="pointer-events-none absolute -bottom-6 -top-24 left-1/2 -z-10 w-[9rem] -translate-x-1/2 bg-gradient-to-b from-gold-soft via-gold to-gold-deep shadow-[0_40px_90px_-30px_rgba(240,178,33,0.45)] md:hidden"
            />
            <Reveal y={40} className="relative">
              <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[120%] w-[150%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(240,178,33,0.28),transparent)]" />
              <BookMockup width="clamp(11rem, 46vw, 17rem)" />
            </Reveal>
          </div>
        </div>

        <footer className="relative mx-auto mt-24 flex max-w-6xl flex-col items-center gap-2 border-t border-white/10 px-6 pt-8 text-center text-sm text-white/50 md:mt-28">
          <span className="font-bold text-white/80">
            O Preço da <span className="text-gold">Liderança</span>
          </span>
          <span>© 2026 {AUTHOR}. Todos os direitos reservados.</span>
        </footer>
      </section>
    </main>
  );
}
