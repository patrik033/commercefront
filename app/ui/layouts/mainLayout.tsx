import SideNav from "../navigation/sidenav";

const MainLayout = ({ children }) => {
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
        <div className="w-full flex-none md:w-64">
            <SideNav />
        </div>

        <div className="flex-grow p-6 md:overflow-y-auto md:p-12 mb-3 pb-3">
            <main>
                {children}
            </main>

        </div>
    </div>
};

export default MainLayout;