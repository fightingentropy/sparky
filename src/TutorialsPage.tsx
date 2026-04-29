import { TUTORIALS } from "./tutorials";

type Props = {
  isActive: boolean;
};

export function TutorialsPage({ isActive }: Props) {
  return (
    <section className={`page page-tutorials ${isActive ? "is-active" : ""}`}>
      <header className="page-header tutorials-header">
        <div>
          <h2>Workplace Tutorials</h2>
          <p className="page-copy">
            Practical videos for containment, conduit, tray bends, and support installs.
          </p>
        </div>
        <span className="tutorial-count">{TUTORIALS.length} videos</span>
      </header>

      <div className="tutorial-grid">
        {TUTORIALS.map((tutorial) => (
          <article key={tutorial.id} id={tutorial.id} className="tutorial-card">
            <TutorialEmbed videoId={tutorial.videoId} title={tutorial.title} />
            <div className="tutorial-card-body">
              <div className="tutorial-card-kicker">
                <span className="tutorial-category">{tutorial.category}</span>
                <span>{tutorial.channel}</span>
              </div>
              <h3>{tutorial.title}</h3>
              <p>{tutorial.workplaceUse}</p>
              <ul>
                {tutorial.practiceFocus.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <a className="ghost-button tutorial-source-link" href={tutorial.sourceUrl} target="_blank" rel="noreferrer">
                Open on YouTube
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function TutorialEmbed({ videoId, title }: { videoId: string; title: string }) {
  return (
    <div className="tutorial-embed">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        title={title}
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
    </div>
  );
}
