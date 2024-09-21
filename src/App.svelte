<script>
  import { Router, Route } from "svelte-routing";
  import { Toaster } from "@/components/ui/sonner";
  import { TooltipProvider } from "@/components/ui/tooltip";
  import { QueryClient, QueryClientProvider } from "@tanstack/svelte-query";
  import { navItems } from "./nav-items";

  const queryClient = new QueryClient();
</script>

<QueryClientProvider client={queryClient}>
  <TooltipProvider>
    <Toaster />
    <Router>
      {#each navItems as { to, component }}
        <Route path={to} component={component} />
      {/each}
    </Router>
  </TooltipProvider>
</QueryClientProvider>