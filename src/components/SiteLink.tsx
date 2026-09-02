import type { ComponentPropsWithoutRef } from 'react';

type SiteLinkProps = ComponentPropsWithoutRef<'a'>;

/**
 * Uses a native document navigation intentionally. The deployed Vinext client
 * router can fail during RSC prefetching, while every route is independently
 * rendered and works correctly as a normal page request.
 */
export function SiteLink(props: SiteLinkProps) {
  return <a {...props} />;
}
