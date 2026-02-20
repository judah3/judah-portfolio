const shadowLoftBase = {
  slate: '#19191f',
  charcoal: '#0f0f13',
  stone: '#464243',
  silverMist: '#C5C2BE',
  shadowGray: '#918D8A',
  frost: '#E8E8E6',
  ash: '#636261'
};

export const colorSchemes = {
  shadowLoft: {
    name: 'Shadow Loft',
    base: shadowLoftBase,
    tokens: {
      'color-page-bg': shadowLoftBase.charcoal,
      'color-page-bg-soft': shadowLoftBase.slate,
      'color-text': shadowLoftBase.frost,
      'color-text-muted': shadowLoftBase.frost,
      'color-text-dim': shadowLoftBase.silverMist,
      'color-accent': shadowLoftBase.shadowGray,
      'color-accent-soft': shadowLoftBase.silverMist,
      'color-button-bg': shadowLoftBase.silverMist,
      'color-button-text': shadowLoftBase.charcoal,
      'color-ghost-bg': 'rgba(255, 255, 255, 0.1)',
      'color-ghost-border': 'rgba(255, 255, 255, 0.2)',
      'color-panel-bg': 'rgba(25, 25, 31, 0.7)',
      'color-card-bg': 'rgba(25, 25, 31, 0.85)',
      'color-card-border': 'rgba(255, 255, 255, 0.15)',
      'color-card-border-strong': 'rgba(255, 255, 255, 0.35)',
      'color-border': 'rgba(255, 255, 255, 0.08)',
      'color-border-strong': 'rgba(255, 255, 255, 0.25)',
      'color-hero-gradient': 'linear-gradient(145deg, #19191f 0%, #464243 40%, rgba(25, 25, 31, 0.2) 100%)',
      'color-button-gradient':
        'linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(197, 194, 190, 0.8), rgba(70, 66, 67, 0.9))',
      'color-background-glow': 'radial-gradient(circle at 20% 20%, rgba(230, 232, 233, 0.45), transparent 45%)',
      'color-gradient-beam': 'radial-gradient(circle at 80% 25%, rgba(145, 141, 138, 0.4), transparent 55%)',
      'shadow-elevated': '0 25px 55px rgba(0, 0, 0, 0.7)',
      'shadow-nav': '0 18px 40px rgba(0, 0, 0, 0.85)',
      'shadow-button': '0 14px 30px rgba(18, 18, 24, 0.8)'
    }
  }
};

export const activeColorScheme = colorSchemes.shadowLoft;

export function applyColorScheme(scheme = activeColorScheme) {
  if (typeof document === 'undefined') return;

  const root = document.documentElement;
  Object.entries(scheme.tokens).forEach(([token, value]) => {
    root.style.setProperty(`--${token}`, value);
  });
}
