/// <reference types="@cloudflare/workers-types" />

import { serve } from "bknd/adapter/cloudflare";

export default serve({
   d1: {
      session: true,
   },
});
