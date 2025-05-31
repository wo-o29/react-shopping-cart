import { useCallback, useEffect, useRef, useState } from "react";

const useSelectedItem = <T extends { id: number }>(items: T[] | null) => {
  const [selectedItemIds, setSelectedItemIds] = useState<Set<number>>(
    new Set()
  );
  const isFirstLoad = useRef(true);

  useEffect(() => {
    if (items && isFirstLoad.current) {
      const allIds = new Set(items.map((item) => item.id));
      setSelectedItemIds(allIds);
      isFirstLoad.current = false;
    }
  }, [items]);

  const isAllSelected =
    items?.every((item) => selectedItemIds.has(item.id)) ?? false;

  const toggleAllSelection = useCallback(() => {
    if (isAllSelected) {
      setSelectedItemIds(new Set());
      return;
    }

    const allIds = new Set(items?.map((item) => item.id));
    setSelectedItemIds(allIds);
  }, [items, isAllSelected]);

  const addSelectedItem = useCallback((id: number) => {
    setSelectedItemIds((prev) => new Set([...prev, id]));
  }, []);

  const removeSelectedItem = useCallback((id: number) => {
    setSelectedItemIds((prev) => {
      const newSet = new Set(prev);
      newSet.delete(id);
      return newSet;
    });
  }, []);

  const getIsSelected = useCallback(
    (id: number) => selectedItemIds.has(id),
    [selectedItemIds]
  );

  return {
    isAllSelected,
    toggleAllSelection,
    addSelectedItem,
    removeSelectedItem,
    getIsSelected,
  };
};

export default useSelectedItem;
