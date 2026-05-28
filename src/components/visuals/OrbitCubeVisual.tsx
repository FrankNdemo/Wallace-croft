type OrbitCubeVisualProps = {
  compact?: boolean;
  open?: boolean;
  label?: string;
  className?: string;
  variant?: "cube";
};

export function OrbitCubeVisual({ compact = false, open = false, label = "Animated 3D orbit visual", className = "" }: OrbitCubeVisualProps) {
  return (
    <div
      role="img"
      aria-label={label}
      className={`orbit-cube-visual ${compact ? "orbit-cube-visual--compact" : ""} ${open ? "orbit-cube-visual--open" : ""} ${className}`}
    >
      <div className="orbit-cube-visual__grid" />
      <div className="orbit-cube-visual__glow" />
      <div className="orbit-cube-visual__scene" aria-hidden>
        <span className="orbit-cube-visual__ring orbit-cube-visual__ring--blue" />
        <span className="orbit-cube-visual__ring orbit-cube-visual__ring--orange" />
        <span className="orbit-cube-visual__ring orbit-cube-visual__ring--white" />
        <span className="orbit-cube-visual__core" />
      </div>
      <div className="orbit-cube-visual__floor" aria-hidden>
        {Array.from({ length: 7 }).map((_, index) => (
          <span key={index} style={{ ["--floor-ring" as "--floor-ring"]: index }} />
        ))}
      </div>
    </div>
  );
}
