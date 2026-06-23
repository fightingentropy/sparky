// App-wide decorative backdrop: a fixed, non-interactive triangle mesh that
// sits behind every page (paired with the warm top-glow on <body>). One 100px
// square cell drawn with its 4 edges plus both diagonals, tiled to fill the
// viewport. Rendered once at the app root so the look is identical on every
// page.
export function AppBackground() {
  return (
    <div className="app-bg" aria-hidden="true">
      <svg className="app-bg-mesh" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="app-mesh" width="100" height="100" patternUnits="userSpaceOnUse">
            <path
              d="M0 0H100V100H0Z M0 0L100 100 M100 0L0 100"
              fill="none"
              stroke="rgba(255,255,255,0.05)"
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#app-mesh)" />
      </svg>
    </div>
  );
}
