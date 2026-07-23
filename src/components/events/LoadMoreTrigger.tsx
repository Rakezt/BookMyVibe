'use client';

import { useEffect, useRef } from 'react';

interface Props {
  hasNextPage?: boolean;
  isFetchingNextPage: boolean;
  fetchNextPage: () => Promise<unknown>;
}

export default function LoadMoreTrigger({
  hasNextPage,
  isFetchingNextPage,
  fetchNextPage,
}: Props) {
  const triggerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!triggerRef.current) return;

    const observer = new IntersectionObserver(
      async ([entry]) => {
        if (!entry.isIntersecting) return;

        if (!hasNextPage) return;

        if (isFetchingNextPage) return;

        // Prevent duplicate triggers while fetching
        observer.unobserve(entry.target);

        try {
          await fetchNextPage();
        } finally {
          observer.observe(entry.target);
        }
      },
      {
        threshold: 1,
      },
    );

    observer.observe(triggerRef.current);

    return () => observer.disconnect();
  }, [fetchNextPage, hasNextPage, isFetchingNextPage]);

  return (
    <div
      ref={triggerRef}
      style={{
        height: 1,
      }}
    />
  );
}
