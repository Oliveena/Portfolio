import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export function useActiveNav() {
  const pathname = usePathname(); 
  const [activePath, setActivePath] = useState('');

  useEffect(() => {
    const pathSegment = pathname.split('/').filter(Boolean).pop() || '';
    setActivePath(pathSegment);
  }, [pathname]);

  return activePath;
}
