// app/ClientProvider.tsx (or in your components folder)
'use client'; // Client Component

import { Provider } from 'react-redux';
import { store } from '../features/store';

export default function ClientProvider({ children }: { children: React.ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
}
