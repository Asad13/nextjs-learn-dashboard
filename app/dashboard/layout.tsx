import SideNav from '@/app/ui/dashboard/sidenav';
import { Metadata } from 'next';

// export const experimental_ppr = true;

export const metadata: Metadata = {
  title: {
    template: '%s | Admin',
    default: 'Dashboard | Admin',
  },
  description:
    "The official Next.js Course Dashboard's Admin Section, built with App Router.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}
