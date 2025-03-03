
function Slide5() {
  return (
    <article className="Slide">

      <header>
        <h2>ER Diagramma Bloga Projektam</h2>
      </header>
      <section>
        <p>
          Šī Entity-Relationship diagramma attēlo Bloga projekta struktūru. Diagramma sastāv no galvenajām
          entītijām, piemēram, <strong>Autors</strong> un <strong>Ieraksts</strong>, kā arī to atribūtiem un attiecībām.
          Autors var uzrakstīt vairākus ierakstus, un katram ierakstam ir tādi atribūti kā nosaukums, saturs un
          laika zīmogi. Diagramma arī parāda, kā autors ir saistīts ar katru ierakstu caur attiecību "raksta".
        </p>
        <p>
          Zemāk ir ER diagramma, kas parāda, kā entītijas ir saistītas un kā ir veidota bloga struktūra.
        </p>
      </section>
      <section className="diagram">
        <h3>ER Diagramma</h3>
        <img 
          src="path_to_your_diagram.png" 
          alt="Bloga ER Diagramma" 
          width="100%" 
        />
      </section>
    </article>
  );
}

export default Slide5;
