// import original module declarations
import "styled-components";
import { Theme } from "./components/theme";

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}
