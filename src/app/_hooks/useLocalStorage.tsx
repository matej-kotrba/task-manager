export default function useLocalStorage<T>(key: string) {
  const isClient = typeof window !== "undefined";

  return {
    get: () => {
      if (!isClient) return null;
      try {
        JSON.parse(localStorage.getItem(key)!);
        return JSON.parse(localStorage.getItem(key)!) as T;
      } catch {
        return localStorage.getItem(key) as T | null;
      }
    },
    set: (value: T) => localStorage.setItem(key, JSON.stringify(value)),
    remove: () => localStorage.removeItem(key),
  };
}
