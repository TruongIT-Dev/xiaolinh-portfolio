import { Layout } from "antd"
import { Outlet } from "react-router-dom";
import Navbar from '../layouts/Navbar';
// import Footer from '../layouts/Footer';

const MainLayout = () => {

    const { Content } = Layout;

    return (
        <>
            <Layout className="">
                {/* Header */}
                <Navbar />

                {/* Content display */}
                <Content>
                    <div className="main-layout">
                        <Outlet></Outlet>
                    </div>
                </Content>

                {/* Footer */}
                {/* <Footer /> */}
            </Layout>
        </>
    )
}

export default MainLayout