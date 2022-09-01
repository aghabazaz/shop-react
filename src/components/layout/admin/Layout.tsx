import Sidebar from "./Sidebar"
import Header from "./Header"
import Footer from "./Footer"
import '../../../assets/css/sb-admin-2.min.css'
type Props = {
    children:JSX.Element|JSX.Element[]
   };
const Layout:React.FC<Props>= ({ children })=>{
    return (<>
     <div id="wrapper">
    <Sidebar/>
    <div id="content-wrapper" className="d-flex flex-column">
    
    <div id="content">
        <Header/>

        {children}

    </div>
  
    <Footer/>


</div>
</div>
    </>)
}
export default Layout