export type MediaQueryListListener = (event: MediaQueryListEvent) => void;

export interface BreakpointQuery {
  query: string;
  breakpoint: ScreenSize;
}

export interface OrientationQuery {
  query: string;
  orientation: Orientation;
}

export enum ScreenSize {
  XSmall,
  Small,
  Medium,
  Large
}

export enum Orientation {
  Portrait,
  Landscape,
}
