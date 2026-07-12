export default function TacticsHero() {
  return (
    <div className="hero-board" role="img" aria-label="Tactics board diagram showing a football team's shape being reorganised into a stronger formation">
      <svg viewBox="0 0 420 320" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Pitch outline */}
        <rect x="10" y="10" width="400" height="300" stroke="rgba(255,255,255,0.18)" strokeWidth="1" />
        <circle cx="210" cy="160" r="58" stroke="rgba(255,255,255,0.14)" strokeWidth="1" />
        <line x1="10" y1="160" x2="410" y2="160" stroke="rgba(255,255,255,0.14)" strokeWidth="1" />
        <rect x="10" y="90" width="70" height="140" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
        <rect x="340" y="90" width="70" height="140" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />

        {/* Before: a loose, disorganised cluster (faint) */}
        <g>
          <circle className="board-node" cx="70" cy="70" r="5" fill="#8FA79B" style={{ animationDelay: "0.1s" }} />
          <circle className="board-node" cx="95" cy="255" r="5" fill="#8FA79B" style={{ animationDelay: "0.2s" }} />
          <circle className="board-node" cx="55" cy="160" r="5" fill="#8FA79B" style={{ animationDelay: "0.3s" }} />
          <text className="board-label" x="40" y="290" fill="rgba(255,255,255,0.45)" fontFamily="var(--font-mono)" fontSize="9" letterSpacing="1" style={{ animationDelay: "0.4s" }}>
            BEFORE — UNSTRUCTURED
          </text>
        </g>

        {/* Connecting trajectory */}
        <path
          className="board-line"
          d="M95 160 C 160 120, 220 200, 280 150"
          stroke="#C69A2B"
          strokeWidth="1"
          strokeDasharray="4 5"
          style={{ animationDelay: "0.5s" }}
        />

        {/* After: an organised shape (gold) */}
        <g>
          <path
            className="board-line"
            d="M300 90 L 355 130 M355 130 L 340 190 M340 190 L 300 230 M300 230 L 260 190 M260 190 L 245 130 M245 130 L 300 90 M260 190 L 340 190"
            stroke="#E6BC4A"
            strokeWidth="1.2"
            style={{ animationDelay: "0.7s" }}
          />
          <circle className="board-node gold" cx="300" cy="90" r="6" fill="#E6BC4A" style={{ animationDelay: "0.9s" }} />
          <circle className="board-node gold" cx="355" cy="130" r="6" fill="#E6BC4A" style={{ animationDelay: "1s" }} />
          <circle className="board-node gold" cx="340" cy="190" r="6" fill="#E6BC4A" style={{ animationDelay: "1.1s" }} />
          <circle className="board-node gold" cx="300" cy="230" r="6" fill="#E6BC4A" style={{ animationDelay: "1.2s" }} />
          <circle className="board-node gold" cx="260" cy="190" r="6" fill="#E6BC4A" style={{ animationDelay: "1.3s" }} />
          <circle className="board-node gold" cx="245" cy="130" r="6" fill="#E6BC4A" style={{ animationDelay: "1.4s" }} />
          <text className="board-label" x="255" y="260" fill="#E6BC4A" fontFamily="var(--font-mono)" fontSize="9" letterSpacing="1" style={{ animationDelay: "1.5s" }}>
            AFTER — ORGANISED
          </text>
        </g>

        <text className="board-label" x="20" y="30" fill="rgba(255,255,255,0.5)" fontFamily="var(--font-mono)" fontSize="9" letterSpacing="1.5" style={{ animationDelay: "1.6s" }}>
          WFG / MATCH DOSSIER / 01
        </text>
      </svg>
    </div>
  );
}
