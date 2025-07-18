/**
 * Paleta de colores de Nueva Casa
 * Este archivo contiene todas las constantes de colores del proyecto
 * Puedes modificar estos valores para cambiar la paleta de colores
 */

// ===== COLORES PRIMARIOS (AZUL) =====
export const PRIMARY_COLORS = {
  50: '#eff6ff',
  100: '#dbeafe',
  200: '#bfdbfe',
  300: '#93c5fd',
  400: '#60a5fa',
  500: '#3b82f6',
  600: '#2563eb',
  700: '#1d4ed8',
  800: '#1e40af',
  900: '#1e3a8a',
  950: '#172554',
} as const;

// ===== COLORES SECUNDARIOS (ROJO) =====
export const SECONDARY_COLORS = {
  50: '#fef2f2',
  100: '#fee2e2',
  200: '#fecaca',
  300: '#fca5a5',
  400: '#f87171',
  500: '#ef4444',
  600: '#dc2626',
  700: '#b91c1c',
  800: '#991b1b',
  900: '#7f1d1d',
  950: '#450a0a',
} as const;

// ===== COLORES DE ACENTO (VERDE) =====
export const ACCENT_COLORS = {
  50: '#f0fdf4',
  100: '#dcfce7',
  200: '#bbf7d0',
  300: '#86efac',
  400: '#4ade80',
  500: '#22c55e',
  600: '#16a34a',
  700: '#15803d',
  800: '#166534',
  900: '#14532d',
  950: '#052e16',
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
    50: '#f0fdf4',
    500: '#22c55e',
    600: '#16a34a',
    700: '#15803d',
  },
  warning: {
    50: '#fffbeb',
    500: '#f59e0b',
    600: '#d97706',
    700: '#b45309',
  },
  error: {
    50: '#fef2f2',
    500: '#ef4444',
    600: '#dc2626',
    700: '#b91c1c',
  },
  info: {
    50: '#f0f9ff',
    500: '#06b6d4',
    600: '#0891b2',
    700: '#0e7490',
  },
} as const;

// ===== COLORES ESPECIALES DE LA IGLESIA =====
export const CHURCH_COLORS = {
  divineGold: {
    50: '#fffdf7',
    100: '#fffaeb',
    200: '#fff3c4',
    300: '#ffe999',
    400: '#ffd966',
    500: '#ffc233',
    600: '#f59e0b',
    700: '#d97706',
    800: '#b45309',
    900: '#92400e',
  },
  sacredPurple: {
    50: '#faf5ff',
    100: '#f3e8ff',
    200: '#e9d5ff',
    300: '#d8b4fe',
    400: '#c084fc',
    500: '#a855f7',
    600: '#9333ea',
    700: '#7c3aed',
    800: '#6b21a8',
    900: '#581c87',
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
    primary: NEUTRAL_COLORS[900],
    secondary: NEUTRAL_COLORS[700],
    tertiary: NEUTRAL_COLORS[500],
    inverse: '#ffffff',
  },
  border: {
    light: NEUTRAL_COLORS[200],
    medium: NEUTRAL_COLORS[300],
    dark: NEUTRAL_COLORS[400],
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
    primary: PRIMARY_COLORS[600],
    primaryHover: PRIMARY_COLORS[700],
    secondary: SECONDARY_COLORS[600],
    secondaryHover: SECONDARY_COLORS[700],
    accent: ACCENT_COLORS[600],
    accentHover: ACCENT_COLORS[700],
  },
  // Links
  link: {
    default: PRIMARY_COLORS[600],
    hover: PRIMARY_COLORS[700],
    visited: PRIMARY_COLORS[800],
  },
  // Estados
  state: {
    success: FUNCTIONAL_COLORS.success[500],
    warning: FUNCTIONAL_COLORS.warning[500],
    error: FUNCTIONAL_COLORS.error[500],
    info: FUNCTIONAL_COLORS.info[500],
  },
} as const;

// ===== TIPO PARA TYPESCRIPT =====
export type ColorPalette = typeof COLOR_PALETTE;
export type PrimaryColor = keyof typeof PRIMARY_COLORS;
export type SecondaryColor = keyof typeof SECONDARY_COLORS;
export type AccentColor = keyof typeof ACCENT_COLORS;
export type NeutralColor = keyof typeof NEUTRAL_COLORS;
