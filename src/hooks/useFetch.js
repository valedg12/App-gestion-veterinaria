import { useEffect, useState } from "react";

export function useFetch(fn, deps = []) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let alive = true;
    (async () => {
      try {
        setLoading(true);
        const result = await fn();
        if (!alive) return;
        setData(result);
      } catch (err) {
        if (!alive) return;
        setError(err);
      } finally {
        if (alive) setLoading(false);
      }
    })();
    return () => {
      alive = false;
    };
  }, deps);

  return { data, loading, error, setData };
}
