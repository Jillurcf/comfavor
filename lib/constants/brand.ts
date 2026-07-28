export const BRAND = {
  green: '#22c55e',
  white: '#ffffff',
  dark: '#1f2937',
  gray: '#6b7280',
  lightGray: '#f3f4f6',
} as const;

export const SECTION_THEMES = {
  banner: {
    primary: '#22c55e',
    secondary: '#ffffff',
    bg: '#0f172a',
    particleCount: 80,
  },
  services: {
    primary: '#22c55e',
    secondary: '#1f2937',
    bg: '#f9fafb',
    particleCount: 40,
  },
  whyChooseUs: {
    primary: '#1f2937',
    secondary: '#22c55e',
    bg: '#ffffff',
    particleCount: 50,
  },
  cta: {
    primary: '#22c55e',
    secondary: '#ffffff',
    bg: '#166534',
    particleCount: 30,
  },
} as const;

export const SCENE = {
  hero: {
    meshCount: 3,
    particleCount: 100,
    autoRotateSpeed: 0.005,
    floatAmplitude: 0.1,
  },
  services: {
    particleCount: 50,
    hexagonCount: 6,
  },
  transition: {
    morphSpeed: 0.03,
    particleSize: 0.05,
    particleCount: 120,
  },
} as const;
