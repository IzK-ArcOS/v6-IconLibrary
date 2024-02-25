import { SafeMode } from "$state/Desktop/ts/store";
import { IconLibraryIcon } from "$ts/images/apps";
import { App } from "$types/app";
import AppSvelte from "../App.svelte";
import { Runtime } from "./runtime";

export const IconLibrary: App = {
  metadata: {
    name: "Icon Library",
    description: "View the icons used in ArcOS",
    author: "Izaak Kuipers",
    version: "1.0.1",
    icon: IconLibraryIcon,
    hidden: true,
    appGroup: "utilities",
  },
  runtime: Runtime,
  content: AppSvelte,
  id: "IconLibrary",
  size: { w: 595, h: NaN },
  minSize: { w: 500, h: 470 },
  maxSize: { w: NaN, h: NaN },
  pos: { x: 30, y: 40 },
  state: {
    minimized: false,
    maximized: false,
    headless: false,
    fullscreen: false,
    resizable: true,
  },
  controls: {
    minimize: true,
    maximize: true,
    close: true,
  },
  loadCondition: () => !SafeMode.get(),
};
