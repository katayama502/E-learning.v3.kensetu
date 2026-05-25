'use client';
// Stub: dnd-kit removed.
import React from 'react';

interface AdminSortableListProps<T> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
  keyExtractor: (item: T) => string;
  onReorder: (newItems: T[]) => void;
}

export function SortableItem({ children }: { id: string; children: React.ReactNode; index: number }) {
  return <div className="mb-3">{children}</div>;
}

export default function AdminSortableList<T>({ items, renderItem, keyExtractor }: AdminSortableListProps<T>) {
  return (
    <div>
      {items.map((item) => (
        <div key={keyExtractor(item)} className="mb-3">
          {renderItem(item)}
        </div>
      ))}
    </div>
  );
}
