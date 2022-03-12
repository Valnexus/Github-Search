import Aux from "../auxiliary";
import Header from "../header";

const Layout = (props: { children: any }) => (
  <Aux>
    <Header />
    {props.children}
  </Aux>
);

export default Layout;
