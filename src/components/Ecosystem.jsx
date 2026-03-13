import { useState } from 'react';

const pillars = [
  {
    name: 'Academics',
    description:
      'Math, science, reading, writing, and geography — taught through hands-on projects and real-world application, not worksheets.',
  },
  {
    name: 'Outdoor Learning',
    description:
      'The beach is our classroom. Tide pools, shoreline ecology, gardening, and weather become living lessons.',
  },
  {
    name: 'Creative Arts',
    description:
      'Painting, drawing, music, building, and creative expression — because imagination is a skill, not a luxury.',
  },
  {
    name: 'Social-Emotional Growth',
    description:
      'Relationship-centered support helping children develop emotional intelligence, empathy, and healthy connections.',
  },
  {
    name: 'Entrepreneurship',
    description:
      'Business basics, problem-solving, and creative thinking. From lemonade stands to real projects, kids learn to build something from nothing.',
  },
  {
    name: 'Trade Skills',
    description:
      'Gardening, cooking, knitting, woodworking — practical skills that connect learning to daily life.',
  },
  {
    name: 'Financial Literacy',
    description:
      'Saving, spending, budgeting, and understanding value. Real money skills introduced at an age-appropriate level.',
  },
  {
    name: 'Life Skills & Independence',
    description:
      'Personal responsibility, time management, collaboration, and the confidence to navigate the real world.',
  },
];

export default function Ecosystem() {
  const [active, setActive] = useState(null);

  const handleToggle = (index) => {
    setActive(active === index ? null : index);
  };

  const activePillar = active !== null ? pillars[active] : null;

  return (
    <div className="ecosystem-root">
      {/* Desktop: circular layout */}
      <div className="ecosystem-orbital">
        <svg
          className="ecosystem-lines"
          viewBox="0 0 700 700"
          xmlns="http://www.w3.org/2000/svg"
        >
          {pillars.map((_, i) => {
            const angle = (i * 360) / 8 - 90;
            const rad = (angle * Math.PI) / 180;
            const x = 350 + 250 * Math.cos(rad);
            const y = 350 + 250 * Math.sin(rad);
            return (
              <line
                key={i}
                x1="350"
                y1="350"
                x2={x}
                y2={y}
                className={`ecosystem-line ${active === i ? 'ecosystem-line--active' : ''}`}
              />
            );
          })}
        </svg>

        {/* Center hub — shows description on hover, default label otherwise */}
        <div className="ecosystem-center">
          <div
            className={`ecosystem-center-default ${activePillar ? 'ecosystem-center-default--hidden' : ''}`}
          >
            <span className="ecosystem-center-text">
              Shoreline
              <br />
              Scholars
            </span>
          </div>
          <div
            className={`ecosystem-center-detail ${activePillar ? 'ecosystem-center-detail--visible' : ''}`}
            aria-live="polite"
          >
            {activePillar && (
              <>
                <span className="ecosystem-center-detail-title">{activePillar.name}</span>
                <span className="ecosystem-center-detail-desc">{activePillar.description}</span>
              </>
            )}
          </div>
        </div>

        {/* Pillar circles */}
        {pillars.map((pillar, i) => {
          const angle = (i * 360) / 8 - 90;
          const rad = (angle * Math.PI) / 180;
          const xPct = 50 + 35.7 * Math.cos(rad);
          const yPct = 50 + 35.7 * Math.sin(rad);
          return (
            <button
              key={i}
              className={`ecosystem-pillar ${active === i ? 'ecosystem-pillar--active' : ''}`}
              style={{ left: `${xPct}%`, top: `${yPct}%` }}
              onClick={() => handleToggle(i)}
              onMouseEnter={() => setActive(i)}
              onMouseLeave={() => setActive(null)}
              aria-label={`${pillar.name}: ${pillar.description}`}
            >
              <span className="ecosystem-pillar-name">{pillar.name}</span>
            </button>
          );
        })}
      </div>

      {/* Mobile: grid layout */}
      <div className="ecosystem-grid">
        {pillars.map((pillar, i) => (
          <button
            key={i}
            className={`ecosystem-grid-item ${active === i ? 'ecosystem-grid-item--active' : ''}`}
            onClick={() => handleToggle(i)}
          >
            <span className="ecosystem-grid-name">{pillar.name}</span>
            <div
              className={`ecosystem-grid-desc ${active === i ? 'ecosystem-grid-desc--visible' : ''}`}
            >
              {pillar.description}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
