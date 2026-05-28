import type { CSSProperties } from "react";

const avatars = ["WC", "AI", "DX", "ML"];

type CloudLoopVisualProps = {
  compact?: boolean;
};

export function CloudLoopVisual({ compact = false }: CloudLoopVisualProps) {
  return (
    <div className={`cloud-loop-visual ${compact ? "cloud-loop-visual--compact" : ""}`} aria-hidden>
      <div className="cloud-loop-visual__rings">
        {Array.from({ length: 8 }).map((_, index) => (
          <span key={index} />
        ))}
      </div>
      <div className="cloud-loop-visual__cloud">
        <span className="cloud-loop-visual__lobe cloud-loop-visual__lobe--one" />
        <span className="cloud-loop-visual__lobe cloud-loop-visual__lobe--two" />
        <span className="cloud-loop-visual__lobe cloud-loop-visual__lobe--three" />
        <span className="cloud-loop-visual__loop cloud-loop-visual__loop--left" />
        <span className="cloud-loop-visual__loop cloud-loop-visual__loop--right" />
        <span className="cloud-loop-visual__loop cloud-loop-visual__loop--bridge" />
      </div>
      <div className="cloud-loop-visual__panel cloud-loop-visual__panel--one">
        <span>AI agents</span>
        <strong>42 live workflows</strong>
      </div>
      <div className="cloud-loop-visual__panel cloud-loop-visual__panel--two">
        <span>Data pulse</span>
        <strong>99.8% uptime</strong>
      </div>
      <div className="cloud-loop-visual__avatars">
        {avatars.map((avatar, index) => (
          <span key={avatar} style={{ "--avatar-index": index } as CSSProperties}>
            {avatar}
          </span>
        ))}
      </div>
    </div>
  );
}
