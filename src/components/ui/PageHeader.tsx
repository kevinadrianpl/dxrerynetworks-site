interface PageHeaderProps {
  title: string;
  subtitle?: string;
  icon?: string;
}

export function PageHeader({ title, subtitle, icon }: PageHeaderProps) {
  return (
    <div className="relative pt-28 pb-12 sm:pt-32 sm:pb-16 text-center">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal-800/50 via-charcoal-900/80 to-charcoal-900 pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-4">
        {icon && (
          <span className="text-4xl sm:text-5xl mb-4 block animate-float">
            {icon}
          </span>
        )}
        <h1 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl lg:text-5xl font-bold text-parchment-50 glow-text mb-3 tracking-wide">
          {title}
        </h1>
        {subtitle && (
          <p className="text-parchment-300/70 text-base sm:text-lg max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
        {/* Ornamental divider below */}
        <div className="ornament-divider mt-8 max-w-md mx-auto" />
      </div>
    </div>
  );
}
