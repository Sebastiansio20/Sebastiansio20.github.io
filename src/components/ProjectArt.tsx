export type ProjectArtVariant = "data" | "automation" | "transformation";

type ProjectArtProps = {
  variant: ProjectArtVariant;
};

function DataArt() {
  return (
    <svg
      viewBox="0 0 800 600"
      preserveAspectRatio="xMidYMid slice"
      className="absolute inset-0 h-full w-full"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="pa-data-glow" cx="50%" cy="45%" r="60%">
          <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.16" />
          <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="pa-data-node" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="var(--ice)" stopOpacity="0.9" />
          <stop offset="100%" stopColor="var(--ice)" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="800" height="600" fill="url(#pa-data-glow)" />
      <g strokeWidth="1">
        <line x1="120" y1="180" x2="260" y2="120" stroke="var(--steel)" opacity="0.55" />
        <line x1="260" y1="120" x2="420" y2="210" stroke="var(--steel)" opacity="0.55" />
        <line x1="420" y1="210" x2="560" y2="150" stroke="var(--steel)" opacity="0.55" />
        <line x1="560" y1="150" x2="700" y2="240" stroke="var(--steel)" opacity="0.55" />
        <line x1="120" y1="180" x2="180" y2="420" stroke="var(--steel)" opacity="0.4" />
        <line x1="180" y1="420" x2="300" y2="360" stroke="var(--steel)" opacity="0.4" />
        <line x1="300" y1="360" x2="480" y2="420" stroke="var(--steel)" opacity="0.4" />
        <line x1="480" y1="420" x2="640" y2="380" stroke="var(--steel)" opacity="0.4" />
        <line x1="700" y1="240" x2="640" y2="380" stroke="var(--steel)" opacity="0.5" />
        <line x1="300" y1="360" x2="420" y2="210" stroke="var(--steel)" opacity="0.35" />
        <line x1="560" y1="150" x2="480" y2="420" stroke="var(--steel)" opacity="0.35" />
        <line x1="300" y1="360" x2="360" y2="520" stroke="var(--steel)" opacity="0.4" />
        <line x1="360" y1="520" x2="540" y2="520" stroke="var(--steel)" opacity="0.4" />
        <line x1="540" y1="520" x2="640" y2="380" stroke="var(--steel)" opacity="0.35" />
        <line x1="640" y1="380" x2="720" y2="460" stroke="var(--steel)" opacity="0.4" />
        <line x1="700" y1="240" x2="720" y2="460" stroke="var(--steel)" opacity="0.3" />
        <line x1="120" y1="180" x2="560" y2="150" stroke="var(--accent)" opacity="0.22" />
      </g>
      <g>
        <circle cx="120" cy="180" r="5" fill="var(--ice)" opacity="0.9" />
        <circle cx="260" cy="120" r="3" fill="var(--ice)" opacity="0.7" />
        <circle cx="420" cy="210" r="4" fill="var(--accent)" opacity="0.85" />
        <circle cx="560" cy="150" r="3" fill="var(--ice)" opacity="0.7" />
        <circle cx="700" cy="240" r="6" fill="var(--accent)" opacity="0.9" />
        <circle cx="180" cy="420" r="4" fill="var(--ice)" opacity="0.6" />
        <circle cx="300" cy="360" r="3" fill="var(--ocean)" opacity="0.9" />
        <circle cx="480" cy="420" r="5" fill="var(--ice)" opacity="0.75" />
        <circle cx="640" cy="380" r="3" fill="var(--accent)" opacity="0.8" />
        <circle cx="360" cy="520" r="4" fill="var(--ice)" opacity="0.6" />
        <circle cx="540" cy="520" r="3" fill="var(--ocean)" opacity="0.9" />
        <circle cx="720" cy="460" r="7" fill="var(--accent)" opacity="0.9" />
      </g>
      <circle cx="700" cy="240" r="16" fill="url(#pa-data-node)" />
      <circle cx="120" cy="180" r="13" fill="url(#pa-data-node)" />
    </svg>
  );
}

function AutomationArt() {
  return (
    <svg
      viewBox="0 0 800 600"
      preserveAspectRatio="xMidYMid slice"
      className="absolute inset-0 h-full w-full"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="pa-auto-glow" cx="50%" cy="50%" r="65%">
          <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.14" />
          <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="pa-auto-lane" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="var(--ocean)" stopOpacity="0" />
          <stop offset="30%" stopColor="var(--steel)" stopOpacity="0.7" />
          <stop offset="70%" stopColor="var(--steel)" stopOpacity="0.7" />
          <stop offset="100%" stopColor="var(--ocean)" stopOpacity="0" />
        </linearGradient>
      </defs>
      <rect width="800" height="600" fill="url(#pa-auto-glow)" />
      <g stroke="url(#pa-auto-lane)" strokeWidth="1.5" fill="none">
        <line x1="60" y1="140" x2="740" y2="140" />
        <line x1="60" y1="235" x2="740" y2="235" />
        <line x1="60" y1="330" x2="740" y2="330" />
        <line x1="60" y1="425" x2="740" y2="425" />
      </g>
      <g stroke="var(--accent)" strokeWidth="1" opacity="0.35">
        <line x1="430" y1="140" x2="430" y2="425" strokeDasharray="3 6" />
        <line x1="310" y1="140" x2="310" y2="425" strokeDasharray="3 6" opacity="0.7" />
        <line x1="560" y1="140" x2="560" y2="425" strokeDasharray="3 6" opacity="0.7" />
      </g>
      <g fill="var(--accent)">
        <circle cx="190" cy="140" r="6" opacity="0.9" />
        <circle cx="500" cy="235" r="6" opacity="0.9" />
        <circle cx="330" cy="330" r="6" opacity="0.9" />
        <circle cx="640" cy="425" r="6" opacity="0.9" />
        <circle cx="120" cy="330" r="4" opacity="0.6" />
        <circle cx="700" cy="140" r="4" opacity="0.6" />
        <circle cx="250" cy="425" r="4" opacity="0.6" />
      </g>
      <g fill="none" stroke="var(--ice)" strokeWidth="1" opacity="0.4">
        <ellipse cx="500" cy="235" rx="16" ry="16" />
        <ellipse cx="330" cy="330" rx="16" ry="16" />
        <ellipse cx="190" cy="140" rx="16" ry="16" />
        <ellipse cx="640" cy="425" rx="16" ry="16" />
      </g>
      <g stroke="var(--ocean)" strokeWidth="1.5" opacity="0.6" fill="none">
        <polyline points="430,425 430,500 560,500 560,425" />
        <circle cx="560" cy="500" r="8" fill="var(--ocean)" stroke="none" opacity="0.8" />
      </g>
    </svg>
  );
}

function TransformationArt() {
  return (
    <svg
      viewBox="0 0 800 600"
      preserveAspectRatio="xMidYMid slice"
      className="absolute inset-0 h-full w-full"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="pa-trans-glow" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.15" />
          <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="800" height="600" fill="url(#pa-trans-glow)" />
      <g stroke="var(--steel)" strokeWidth="1" opacity="0.5" fill="none">
        <path d="M -40 620 L 400 40 L 840 620" />
        <path d="M 80 620 L 400 40 L 720 620" />
        <path d="M 200 620 L 400 40 L 600 620" />
        <path d="M 320 620 L 400 40 L 480 620" />
      </g>
      <g stroke="var(--steel)" strokeWidth="1" opacity="0.4" fill="none">
        <path d="M -40 520 Q 400 420 840 520" />
        <path d="M -40 380 Q 400 240 840 380" />
        <path d="M -40 240 Q 400 120 840 240" />
        <path d="M -40 100 Q 400 -20 840 100" />
      </g>
      <g stroke="var(--accent)" strokeWidth="1.2" opacity="0.5" fill="none">
        <line x1="120" y1="120" x2="700" y2="520" />
        <line x1="700" y1="120" x2="120" y2="520" />
      </g>
      <g fill="var(--ice)">
        <circle cx="120" cy="520" r="3" opacity="0.8" />
        <circle cx="400" cy="120" r="4" opacity="0.9" />
        <circle cx="700" cy="520" r="3" opacity="0.8" />
        <circle cx="280" cy="380" r="2.5" opacity="0.7" />
        <circle cx="520" cy="380" r="2.5" opacity="0.7" />
        <circle cx="400" cy="520" r="2.5" opacity="0.6" />
      </g>
      <g fill="var(--accent)">
        <circle cx="260" cy="220" r="4" opacity="0.9" />
        <circle cx="560" cy="220" r="4" opacity="0.9" />
        <circle cx="330" cy="460" r="4" opacity="0.85" />
        <circle cx="480" cy="460" r="4" opacity="0.85" />
      </g>
      <g stroke="var(--ice)" strokeWidth="1" opacity="0.5" fill="none">
        <circle cx="400" cy="320" r="70" />
        <circle cx="400" cy="320" r="110" opacity="0.4" />
      </g>
    </svg>
  );
}

export default function ProjectArt({ variant }: ProjectArtProps) {
  switch (variant) {
    case "data":
      return <DataArt />;
    case "automation":
      return <AutomationArt />;
    case "transformation":
      return <TransformationArt />;
  }
}
