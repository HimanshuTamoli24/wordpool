// components/Sidebar.tsx

import { Cog, Container, History, Infinity, LogOut, SunMoon } from 'lucide-react';
import Link from 'next/link';

export default function Sidebar() {
  const sidebarData = [
    {
      icon: <Cog size={20} />,
      text: 'Settings',
      href: '/settings',
    },
    // {
    //   icon: <Container size={20} />,
    //   text: 'Envs',
    //   href: '/envs',
    // },
    // {
    //   icon: <SunMoon size={20} />,
    //   text: 'Themes',
    //   href: '/themes',
    // },
  ];

  return (
    <aside className="col-span-1 border-r border-gray-700 text-gray-200 p-6 flex flex-col justify-between min-h-screen">
      {/* Logo & Title */}
      <div>
        <div className="flex items-center space-x-3 mb-10 select-none p-1 rounded-sm">
          <div className="text-indigo-400 ">
            <Infinity size={32} />
          </div>
          <div>
            <h1 className="text-3xl font-extrabold tracking-wide">Infinity</h1>
            <p className="text-xs text-gray-400 font-medium uppercase tracking-widest">Admin Dashboard</p>
          </div>
        </div>

        {/* Scrollable items */}
        <div className="overflow-y-auto border-b border-t py-2.5  border-white/10  max-h-80 mb-6 pr-2 scrollbar-thin scrollbar-thumb-indigo-600 scrollbar-track-gray-800">
          <h4>History <History /></h4>
          {[1, 2, 3, 4, 23, 3, 3, 3, 5].map((item, idx) => (
            <div
              key={`${item}-${idx}`}
              className="flex items-center space-x-3 p-3 mb-2 rounded-md cursor-pointer hover:bg-indigo-700 transition-colors duration-250"
            >
              <span className="text-xl">📄</span>
              <span className="font-semibold text-sm">Item {item}</span>
            </div>
          ))}
        </div>

        {/* Navigation */}
        <nav>
          <ul className="space-y-3">
            {sidebarData.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="flex items-center space-x-4 p-3 rounded-md text-gray-300 hover:bg-indigo-700 hover:text-white transition-all duration-200"
                >
                  <span>{item.icon}</span>
                  <span className="font-medium">{item.text}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Logout button */}
      <div className=" pt-4 border-t border-gray-700">
        <Link
          href="#"
          className="flex items-center space-x-3 p-3 rounded-md text-red-400 hover:bg-red-600 hover:text-white transition-colors duration-200 shadow-sm hover:shadow-lg"
        >
          <LogOut size={20} />
          <span className="font-semibold">Logout</span>
        </Link>
      </div>
    </aside>
  );
}
