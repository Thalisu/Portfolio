import ClickableContainer from "./components/ClickableContainer";
import { inter, poppins } from "./ui/fonts";

export default function NotFound() {
  return (
    <main className="flex h-[calc(100svh-176px)] w-svw flex-col items-center justify-center gap-4">
      <h2
        className={`${poppins.className} text-5xl font-bold uppercase text-primary`}
      >
        Ops... aconteceu algo de errado
      </h2>
      <p className={`${inter.className} text-xl text-primary`}>
        Parece que a pagina que você quer acessar ainda não foi adicionada ou
        não existe
      </p>
      <ClickableContainer
        href="/"
        className="cursor-none border border-primary p-2 text-primary"
        link={true}
      >
        voltar
      </ClickableContainer>
    </main>
  );
}
