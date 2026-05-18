import Container from '../components/Container'

function MainLayout({ children }) {
  return <div className="overflow-x-clip bg-base text-white">{children}</div>
}

export default MainLayout
