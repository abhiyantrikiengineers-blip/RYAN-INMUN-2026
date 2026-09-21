import { useEffect } from "react";

/**
 * No-op bridge for the Grok live preview host.
 * Outside the sandbox this component simply does nothing.
 */
export function PreviewHostBridge() {
  useEffect(() => {
    // Intentionally empty — only active inside Grok preview iframe
  }, []);
  return null;
}
