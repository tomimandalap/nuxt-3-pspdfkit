import { defineNuxtModule } from "@nuxt/kit";
import fs from "fs-extra";

export default defineNuxtModule({
  setup(_, nuxt) {
    nuxt.hook("build:before", async () => {
      try {
        const source = "./node_modules/pspdfkit/dist/pspdfkit-lib";
        const desitination = "./public/pspdfkit-lib";

        await fs.copy(source, desitination);
        console.log("Files copied before build!");
      } catch (err) {
        console.error("Error copying files:", err);
      }
    });
  },
});
