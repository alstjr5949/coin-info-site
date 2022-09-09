import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    bgColor: string;
    tickerColor: string;
    nameColor: string;
    boardColor: string;
    accentColor?: string;
  }
}
