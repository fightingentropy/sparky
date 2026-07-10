import { useMemo, useState } from "react";
import { TUTORIALS } from "./tutorials";

type Props = {
  isActive: boolean;
};

export function TutorialsPage({ isActive }: Props) {
  const [category, setCategory] = useState("All");
  const categories = useMemo(
    () => ["All", ...Array.from(new Set(TUTORIALS.map((tutorial) => tutorial.category)))],
    []
  );
  const filteredTutorials = useMemo(
    () => TUTORIALS.filter((tutorial) => category === "All" || tutorial.category === category),
    [category]
  );

  return (
    <section className={`page page-tutorials ${isActive ? "is-active" : ""}`}>
      <header className="page-header tutorials-header">
        <div>
          <h1>Workplace Tutorials</h1>
          <p className="page-copy">
            Practical videos for containment, conduit, tray bends, and support installs.
          </p>
        </div>
        <span className="tutorial-count">{filteredTutorials.length} videos</span>
      </header>

      <div className="tutorial-filters" role="group" aria-label="Tutorial categories">
        {categories.map((item) => (
          <button
            key={item}
            type="button"
            className={`tutorial-filter${item === category ? " is-active" : ""}`}
            aria-pressed={item === category}
            onClick={() => setCategory(item)}
          >
            {item}
          </button>
        ))}
      </div>

      <aside className="content-notice" role="note">
        <strong>Videos load only when you choose one.</strong>
        <span>This keeps the page faster and avoids connecting to YouTube before you press play.</span>
      </aside>

      <div className="tutorial-grid">
        {filteredTutorials.map((tutorial) => (
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
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="tutorial-embed">
      {loaded ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1`}
          title={title}
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          className="tutorial-load-btn"
          onClick={() => setLoaded(true)}
          aria-label={`Play ${title}`}
        >
          <img src={`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`} alt="" loading="lazy" />
          <span className="tutorial-play-icon" aria-hidden="true">▶</span>
          <span className="tutorial-load-label">Play video</span>
        </button>
      )}
    </div>
  );
}
