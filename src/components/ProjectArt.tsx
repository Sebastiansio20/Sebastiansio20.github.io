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
        <linearGradient id="pa-data-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#0d1b36" />
          <stop offset="55%" stopColor="#12264a" />
          <stop offset="100%" stopColor="#1a3a6b" />
        </linearGradient>
        <radialGradient id="pa-data-core" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="var(--ice)" stopOpacity="0.95" />
          <stop offset="35%" stopColor="var(--accent)" stopOpacity="0.7" />
          <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="pa-data-stream" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="var(--ocean)" stopOpacity="0" />
          <stop offset="40%" stopColor="var(--ice)" stopOpacity="0.8" />
          <stop offset="100%" stopColor="var(--accent)" stopOpacity="0.2" />
        </linearGradient>
        <filter id="pa-data-blur" x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="14" />
        </filter>
        <filter id="pa-data-glow" x="-120%" y="-120%" width="340%" height="340%">
          <feGaussianBlur stdDeviation="5" />
        </filter>
      </defs>

      <rect width="800" height="600" fill="url(#pa-data-bg)" />

      <circle cx="400" cy="290" r="210" fill="url(#pa-data-core)" opacity="0.55" />
      <circle
        cx="400"
        cy="290"
        r="150"
        fill="none"
        stroke="var(--accent)"
        strokeOpacity="0.35"
        strokeWidth="1"
        filter="url(#pa-data-glow)"
      />
      <circle
        cx="400"
        cy="290"
        r="95"
        fill="none"
        stroke="var(--ice)"
        strokeOpacity="0.5"
        strokeWidth="1.2"
      />

      <g filter="url(#pa-data-blur)" opacity="0.9">
        <circle cx="400" cy="290" r="46" fill="var(--ice)" />
      </g>

      <g strokeWidth="1.4" fill="none">
        <path d="M 90 150 C 220 90, 320 180, 400 150 S 560 240, 700 130" stroke="url(#pa-data-stream)" opacity="0.8" />
        <path d="M 70 320 C 200 240, 300 380, 400 330 S 560 420, 720 300" stroke="url(#pa-data-stream)" opacity="0.7" />
        <path d="M 110 470 C 240 420, 360 500, 470 450 S 640 540, 760 420" stroke="url(#pa-data-stream)" opacity="0.6" />
        <path d="M 150 90 C 300 160, 260 260, 400 290" stroke="var(--accent)" strokeOpacity="0.5" />
        <path d="M 660 90 C 520 150, 540 260, 400 290" stroke="var(--ice)" strokeOpacity="0.4" />
        <path d="M 90 520 C 220 440, 340 500, 400 290" stroke="var(--accent)" strokeOpacity="0.45" />
        <path d="M 720 520 C 560 460, 480 500, 400 290" stroke="var(--ice)" strokeOpacity="0.4" />
      </g>

      <g filter="url(#pa-data-glow)">
        <circle cx="90" cy="150" r="7" fill="var(--accent)" opacity="0.95" />
        <circle cx="700" cy="130" r="6" fill="var(--accent)" opacity="0.9" />
        <circle cx="110" cy="470" r="6" fill="var(--accent)" opacity="0.9" />
        <circle cx="760" cy="420" r="7" fill="var(--accent)" opacity="0.95" />
        <circle cx="400" cy="150" r="5" fill="var(--ice)" opacity="0.9" />
        <circle cx="400" cy="330" r="5" fill="var(--ice)" opacity="0.9" />
        <circle cx="470" cy="450" r="5" fill="var(--ice)" opacity="0.9" />
      </g>

      <g fill="var(--ice)">
        <circle cx="240" cy="120" r="3" opacity="0.8" />
        <circle cx="520" cy="210" r="3" opacity="0.8" />
        <circle cx="640" cy="300" r="3" opacity="0.7" />
        <circle cx="200" cy="360" r="3" opacity="0.7" />
        <circle cx="580" cy="480" r="3" opacity="0.7" />
        <circle cx="320" cy="520" r="3" opacity="0.8" />
        <circle cx="330" cy="200" r="2.5" opacity="0.6" />
        <circle cx="660" cy="200" r="2.5" opacity="0.6" />
      </g>

      <g stroke="var(--ice)" strokeWidth="1" fill="none" opacity="0.35">
        <circle cx="90" cy="150" r="20" />
        <circle cx="760" cy="420" r="20" />
        <circle cx="700" cy="130" r="16" />
        <circle cx="110" cy="470" r="16" />
      </g>
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
        <linearGradient id="pa-auto-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0c1933" />
          <stop offset="55%" stopColor="#13294e" />
          <stop offset="100%" stopColor="#1c3e6e" />
        </linearGradient>
        <linearGradient id="pa-auto-ribbon" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.05" />
          <stop offset="45%" stopColor="var(--accent)" stopOpacity="0.85" />
          <stop offset="100%" stopColor="var(--ice)" stopOpacity="0.35" />
        </linearGradient>
        <linearGradient id="pa-auto-fill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--ice)" stopOpacity="0.35" />
          <stop offset="100%" stopColor="var(--accent)" stopOpacity="0.05" />
        </linearGradient>
        <filter id="pa-auto-blur" x="-80%" y="-80%" width="260%" height="260%">
          <feGaussianBlur stdDeviation="12" />
        </filter>
        <filter id="pa-auto-glow" x="-120%" y="-120%" width="340%" height="340%">
          <feGaussianBlur stdDeviation="5" />
        </filter>
      </defs>

      <rect width="800" height="600" fill="url(#pa-auto-bg)" />

      <ellipse
        cx="400"
        cy="300"
        rx="330"
        ry="220"
        fill="none"
        stroke="var(--accent)"
        strokeOpacity="0.25"
        strokeWidth="1"
        filter="url(#pa-auto-blur)"
      />

      <g>
        <path
          d="M 40 140 C 260 90, 540 190, 760 120 L 760 172 C 540 240, 260 140, 40 192 Z"
          fill="url(#pa-auto-fill)"
          stroke="url(#pa-auto-ribbon)"
          strokeWidth="1.6"
        />
        <path
          d="M 40 270 C 260 220, 540 320, 760 250 L 760 302 C 540 372, 260 272, 40 322 Z"
          fill="url(#pa-auto-fill)"
          stroke="url(#pa-auto-ribbon)"
          strokeWidth="1.6"
        />
        <path
          d="M 40 400 C 260 350, 540 450, 760 380 L 760 432 C 540 502, 260 402, 40 452 Z"
          fill="url(#pa-auto-fill)"
          stroke="url(#pa-auto-ribbon)"
          strokeWidth="1.6"
        />
        <path
          d="M 40 520 C 260 470, 540 570, 760 500 L 760 548 C 540 618, 260 518, 40 568 Z"
          fill="none"
          stroke="var(--ocean)"
          strokeOpacity="0.9"
          strokeWidth="2"
        />
      </g>

      <g stroke="var(--accent)" strokeWidth="1" strokeDasharray="3 7" opacity="0.6">
        <line x1="420" y1="100" x2="420" y2="560" />
        <line x1="300" y1="100" x2="300" y2="560" opacity="0.4" />
        <line x1="560" y1="100" x2="560" y2="560" opacity="0.4" />
      </g>

      <g filter="url(#pa-auto-glow)">
        <circle cx="150" cy="166" r="10" fill="var(--accent)" opacity="0.95" />
        <circle cx="480" cy="286" r="10" fill="var(--accent)" opacity="0.95" />
        <circle cx="640" cy="416" r="10" fill="var(--accent)" opacity="0.95" />
        <circle cx="320" cy="534" r="9" fill="var(--ice)" opacity="0.9" />
      </g>

      <g fill="none" stroke="var(--ice)" strokeWidth="1.2" opacity="0.55">
        <circle cx="150" cy="166" r="18" />
        <circle cx="480" cy="286" r="18" />
        <circle cx="640" cy="416" r="18" />
        <circle cx="320" cy="534" r="16" />
      </g>

      <g stroke="var(--ice)" strokeWidth="1.4" fill="none" opacity="0.8">
        <path d="M 150 166 l 26 0 M 150 166 l -26 0 M 150 166 l 0 26 M 150 166 l 0 -26" />
        <path d="M 480 286 l 26 0 M 480 286 l -26 0 M 480 286 l 0 26 M 480 286 l 0 -26" />
        <path d="M 640 416 l 26 0 M 640 416 l -26 0 M 640 416 l 0 26 M 640 416 l 0 -26" />
        <path d="M 320 534 l 22 0 M 320 534 l -22 0 M 320 534 l 0 22 M 320 534 l 0 -22" />
      </g>

      <g fill="var(--accent)" opacity="0.85">
        <circle cx="250" cy="166" r="4" />
        <circle cx="600" cy="286" r="4" />
        <circle cx="210" cy="416" r="4" />
        <circle cx="540" cy="534" r="4" />
        <circle cx="680" cy="534" r="4" />
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
        <linearGradient id="pa-trans-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0b1a33" />
          <stop offset="60%" stopColor="#142b52" />
          <stop offset="100%" stopColor="#21477f" />
        </linearGradient>
        <radialGradient id="pa-trans-horizon" cx="50%" cy="100%" r="80%">
          <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.5" />
          <stop offset="60%" stopColor="var(--accent)" stopOpacity="0.12" />
          <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="pa-trans-beam" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--ice)" stopOpacity="0" />
          <stop offset="70%" stopColor="var(--ice)" stopOpacity="0.7" />
          <stop offset="100%" stopColor="var(--ice)" stopOpacity="0.15" />
        </linearGradient>
        <filter id="pa-trans-blur" x="-80%" y="-80%" width="260%" height="260%">
          <feGaussianBlur stdDeviation="16" />
        </filter>
        <filter id="pa-trans-glow" x="-120%" y="-120%" width="340%" height="340%">
          <feGaussianBlur stdDeviation="5" />
        </filter>
      </defs>

      <rect width="800" height="600" fill="url(#pa-trans-bg)" />
      <rect width="800" height="600" fill="url(#pa-trans-horizon)" />

      <g fill="var(--steel)" opacity="0.5">
        <polygon points="400,620 180,620 400,140 620,620" />
        <polygon points="400,620 260,620 400,140 540,620" opacity="0.75" />
        <polygon points="400,620 340,620 400,140 460,620" opacity="0.9" />
        <polygon points="400,620 40,620 400,140 760,620" opacity="0.35" />
        <polygon points="400,620 120,620 400,140 680,620" opacity="0.5" />
      </g>

      <g stroke="var(--ice)" strokeWidth="1.2" fill="none" opacity="0.7">
        <path d="M -40 500 Q 400 360 840 500" />
        <path d="M -40 380 Q 400 200 840 380" />
        <path d="M -40 260 Q 400 120 840 260" />
        <path d="M -40 160 Q 400 40 840 160" />
      </g>

      <g stroke="var(--accent)" strokeWidth="1" fill="none" opacity="0.7">
        <path d="M -40 540 Q 400 420 840 540" strokeDasharray="2 8" />
        <path d="M -40 320 Q 400 160 840 320" strokeDasharray="2 8" />
      </g>

      <g filter="url(#pa-trans-blur)">
        <circle cx="400" cy="620" r="120" fill="var(--accent)" opacity="0.5" />
      </g>

      <g>
        <path d="M 130 620 L 400 90 L 670 620 Z" stroke="url(#pa-trans-beam)" strokeWidth="0" fill="none" />
        <line x1="180" y1="620" x2="400" y2="90" stroke="url(#pa-trans-beam)" strokeWidth="1.5" />
        <line x1="260" y1="620" x2="400" y2="90" stroke="url(#pa-trans-beam)" strokeWidth="1.5" opacity="0.8" />
        <line x1="340" y1="620" x2="400" y2="90" stroke="url(#pa-trans-beam)" strokeWidth="1.5" opacity="0.9" />
        <line x1="460" y1="620" x2="400" y2="90" stroke="url(#pa-trans-beam)" strokeWidth="1.5" opacity="0.9" />
        <line x1="540" y1="620" x2="400" y2="90" stroke="url(#pa-trans-beam)" strokeWidth="1.5" opacity="0.8" />
        <line x1="620" y1="620" x2="400" y2="90" stroke="url(#pa-trans-beam)" strokeWidth="1.5" />
      </g>

      <g filter="url(#pa-trans-glow)">
        <circle cx="400" cy="90" r="8" fill="var(--ice)" opacity="0.95" />
        <circle cx="200" cy="340" r="5" fill="var(--accent)" opacity="0.9" />
        <circle cx="600" cy="340" r="5" fill="var(--accent)" opacity="0.9" />
        <circle cx="300" cy="500" r="5" fill="var(--accent)" opacity="0.9" />
        <circle cx="500" cy="500" r="5" fill="var(--accent)" opacity="0.9" />
      </g>

      <g fill="var(--ice)">
        <circle cx="400" cy="340" r="3" opacity="0.8" />
        <circle cx="250" cy="500" r="3" opacity="0.7" />
        <circle cx="550" cy="500" r="3" opacity="0.7" />
        <circle cx="320" cy="170" r="3" opacity="0.8" />
        <circle cx="480" cy="170" r="3" opacity="0.8" />
        <circle cx="400" cy="540" r="3" opacity="0.6" />
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
