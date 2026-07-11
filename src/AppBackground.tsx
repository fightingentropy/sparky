// App-wide decorative backdrop: a fixed, non-interactive square grid that sits
// behind every page (paired with the warm top-glow on <body>). One 50px cell
// outlined on all four edges, tiled to fill the viewport. Rendered once at the
// app root so the look is identical on every page.
export function AppBackground() {
  return (
    <div className="app-bg" aria-hidden="true">
      <svg className="app-bg-mesh" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="app-mesh" width="50" height="50" patternUnits="userSpaceOnUse">
            <path
              d="M0 0H50V50H0Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#app-mesh)" />
      </svg>
    </div>
  );
}
