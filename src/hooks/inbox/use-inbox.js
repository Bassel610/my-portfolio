'use client';
import { useCallback, useEffect, useState } from 'react';
import {
  readMessages,
  isUnlocked,
  unlock as unlockStore,
  lock as lockStore,
  deleteMessage as deleteFromStore,
  clearMessages as clearStore,
} from '@/lib/inbox';

export function useInbox() {
  const [unlocked, setUnlocked] = useState(false);
  const [messages, setMessages] = useState([]);

  const refresh = useCallback(() => {
    setMessages(readMessages());
  }, []);

  useEffect(() => {
    setUnlocked(isUnlocked());
    refresh();
  }, [refresh]);

  const tryUnlock = useCallback(
    (passcode) => {
      const ok = unlockStore(passcode);
      if (ok) {
        setUnlocked(true);
        refresh();
      }
      return ok;
    },
    [refresh]
  );

  const lock = useCallback(() => {
    lockStore();
    setUnlocked(false);
  }, []);

  const remove = useCallback(
    (id) => {
      deleteFromStore(id);
      refresh();
    },
    [refresh]
  );

  const clear = useCallback(() => {
    clearStore();
    refresh();
  }, [refresh]);

  return { unlocked, messages, tryUnlock, lock, remove, clear, refresh };
}
