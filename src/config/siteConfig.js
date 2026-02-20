const env = import.meta.env;

export const siteConfig = {
  brand: env.VITE_PORTFOLIO_BRAND || 'JudA',
  name: env.VITE_PORTFOLIO_NAME || 'Jude Agagad',
  role: env.VITE_PORTFOLIO_ROLE || 'Full Stack Developer',
  email: env.VITE_PORTFOLIO_EMAIL || 'judeagagad@gmail.com',
  location: env.VITE_PORTFOLIO_LOCATION || 'Legazpi City',
  summary:
    env.VITE_PORTFOLIO_SUMMARY ||
    'Accomplished Full Stack Developer with a proven track record of optimizing critical applications for reliability and performance.',
  copyrightName: env.VITE_PORTFOLIO_COPYRIGHT_NAME || 'Jude Agagad',
  cvUrl: env.VITE_PORTFOLIO_CV_URL || '#'
};
