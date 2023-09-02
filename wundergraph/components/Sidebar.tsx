type SidebarProps = {
  activeTab: 'Product Catalog' | 'Orders'

  handleTabClick: (tab: 'Product Catalog' | 'Orders') => void
}

const Sidebar: React.FC<SidebarProps> = ({ activeTab, handleTabClick }) => {
  return (
    <aside className="lg:w-1/8 flex h-screen flex-col justify-between bg-gradient-to-b from-gray-700 via-gray-900 to-black p-8">
      <div>
        <h2 className="mb-4 font-mono text-xl font-bold tracking-wider text-slate-400">
          Navigation
        </h2>

        <nav>
          <ul className="tracking-tight text-zinc-200">
            <li
              className={`${
                activeTab === 'Product Catalog' ? 'font-bold text-white ' : ''
              } mb-4 cursor-pointer hover:underline`}
              onClick={() => handleTabClick('Product Catalog')}
            >
              Product Catalog
            </li>

            <li
              className={`${
                activeTab === 'Orders' ? 'font-bold text-white ' : ''
              } mb-4 cursor-pointer hover:underline`}
              onClick={() => handleTabClick('Orders')}
            >
              Orders
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  )
}

export default Sidebar
