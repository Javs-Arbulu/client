/**
 * Paleta de colores de Nueva Casa - Cyan y Azul Vibrante
 * Este archivo contiene todas las constantes de colores del proyecto
 * Colores principales: Cyan (turquesa) y Azul, con Slate como acento
 */

// ===== COLORES PRIMARIOS (CYAN/TURQUESA) =====
export const PRIMARY_COLORS = {
  50: '#ecfeff',
  100: '#cffafe',
  200: '#a5f3fc',
  300: '#67e8f9', // cyan-300 principal
  400: '#22d3ee', // cyan-400
  500: '#06b6d4', // cyan-500
  600: '#0891b2', // cyan-600
  700: '#0e7490', // cyan-700
  800: '#155e75', // cyan-800
  900: '#164e63', // cyan-900
  950: '#083344',
} as const;

// ===== COLORES SECUNDARIOS (AZUL VIBRANTE) =====
export const SECONDARY_COLORS = {
  50: '#eff6ff',
  100: '#dbeafe',
  200: '#bfdbfe',
  300: '#93c5fd', // blue-300
  400: '#60a5fa', // blue-400 principal
  500: '#3b82f6', // blue-500
  600: '#2563eb', // blue-600
  700: '#1d4ed8', // blue-700
  800: '#1e40af', // blue-800
  900: '#1e3a8a', // blue-900
  950: '#172554',
} as const;

// ===== COLORES DE ACENTO (SLATE ELEGANTE) =====
export const ACCENT_COLORS = {
  50: '#f8fafc',
  100: '#f1f5f9',
  200: '#e2e8f0',
  300: '#cbd5e1',
  400: '#94a3b8',
  500: '#64748b',
  600: '#475569',
  700: '#334155', // slate-700
  800: '#1e293b', // slate-800 principal
  900: '#0f172a', // slate-900
  950: '#020617',
} as const;

// ===== COLORES NEUTROS =====
export const NEUTRAL_COLORS = {
  50: '#fafafa',
  100: '#f5f5f5',
  200: '#e5e5e5',
  300: '#d4d4d4',
  400: '#a3a3a3',
  500: '#737373',
  600: '#525252',
  700: '#404040',
  800: '#262626',
  900: '#171717',
  950: '#0a0a0a',
} as const;

// ===== COLORES FUNCIONALES =====
export const FUNCTIONAL_COLORS = {
  success: {
    50: '#ecfdf5',
    500: '#10b981', // emerald-500
    600: '#059669',
    700: '#047857',
  },
  warning: {
    50: '#fffbeb',
    500: '#f59e0b', // amber-500
    600: '#d97706',
    700: '#b45309',
  },
  error: {
    50: '#fef2f2',
    500: '#ef4444', // red-500
    600: '#dc2626',
    700: '#b91c1c',
  },
  info: {
    50: '#ecfeff',
    500: '#06b6d4', // cyan-500
    600: '#0891b2',
    700: '#0e7490',
  },
} as const;

// ===== COLORES ESPECIALES DE LA IGLESIA =====
export const CHURCH_COLORS = {
  divineCyan: {
    50: '#ecfeff',
    100: '#cffafe',
    200: '#a5f3fc',
    300: '#67e8f9',
    400: '#22d3ee', // cyan-400 principal
    500: '#06b6d4',
    600: '#0891b2',
    700: '#0e7490',
    800: '#155e75',
    900: '#164e63',
  },
  sacredBlue: {
    50: '#eff6ff',
    100: '#dbeafe',
    200: '#bfdbfe',
    300: '#93c5fd',
    400: '#60a5fa', // blue-400 principal
    500: '#3b82f6',
    600: '#2563eb',
    700: '#1d4ed8',
    800: '#1e40af',
    900: '#1e3a8a',
  },
} as const;

// ===== COLORES SEMÁNTICOS =====
export const SEMANTIC_COLORS = {
  background: {
    primary: NEUTRAL_COLORS[50],
    secondary: NEUTRAL_COLORS[100],
    tertiary: NEUTRAL_COLORS[200],
  },
  surface: {
    primary: '#ffffff',
    secondary: NEUTRAL_COLORS[50],
    tertiary: NEUTRAL_COLORS[100],
  },
  text: {
    primary: ACCENT_COLORS[900], // slate-900 para mejor contraste
    secondary: ACCENT_COLORS[700], // slate-700
    tertiary: ACCENT_COLORS[500], // slate-500
    inverse: '#ffffff',
  },
  border: {
    light: NEUTRAL_COLORS[200],
    medium: NEUTRAL_COLORS[300],
    dark: ACCENT_COLORS[300], // slate-300 para mejor contraste
  },
} as const;

// ===== PALETA COMPLETA =====
export const COLOR_PALETTE = {
  primary: PRIMARY_COLORS,
  secondary: SECONDARY_COLORS,
  accent: ACCENT_COLORS,
  neutral: NEUTRAL_COLORS,
  functional: FUNCTIONAL_COLORS,
  church: CHURCH_COLORS,
  semantic: SEMANTIC_COLORS,
} as const;

// ===== COLORES POR DEFECTO PARA COMPONENTES =====
export const DEFAULT_COLORS = {
  // Botones
  button: {
    primary: PRIMARY_COLORS[500], // cyan-500
    primaryHover: PRIMARY_COLORS[600], // cyan-600
    secondary: SECONDARY_COLORS[500], // blue-500
    secondaryHover: SECONDARY_COLORS[600], // blue-600
    accent: ACCENT_COLORS[800], // slate-800
    accentHover: ACCENT_COLORS[900], // slate-900
  },
  // Links
  link: {
    default: PRIMARY_COLORS[500], // cyan-500
    hover: PRIMARY_COLORS[600], // cyan-600
    visited: PRIMARY_COLORS[700], // cyan-700
  },
  // Estados
  state: {
    success: FUNCTIONAL_COLORS.success[500],
    warning: FUNCTIONAL_COLORS.warning[500],
    error: FUNCTIONAL_COLORS.error[500],
    info: FUNCTIONAL_COLORS.info[500],
  },
  // Gradientes principales
  gradients: {
    primary: `linear-gradient(135deg, ${PRIMARY_COLORS[300]}, ${SECONDARY_COLORS[400]})`, // cyan-300 to blue-400
    secondary: `linear-gradient(135deg, ${ACCENT_COLORS[800]}, ${ACCENT_COLORS[900]})`, // slate-800 to slate-900
    accent: `linear-gradient(135deg, ${PRIMARY_COLORS[400]}, ${SECONDARY_COLORS[500]})`, // cyan-400 to blue-500
  },
} as const;

// ===== TIPO PARA TYPESCRIPT =====
export type ColorPalette = typeof COLOR_PALETTE;
export type PrimaryColor = keyof typeof PRIMARY_COLORS;
export type SecondaryColor = keyof typeof SECONDARY_COLORS;
export type AccentColor = keyof typeof ACCENT_COLORS;
export type NeutralColor = keyof typeof NEUTRAL_COLORS;
