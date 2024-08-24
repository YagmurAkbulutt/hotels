import Container from "../Container"
import {Link} from "react-router-dom"


const Header = () => {
  return (
   <header className="">
    <Container designs="flex justify-between p-5">
      <div className="flex gap-10">
        <h1 className="font-bold text-xl underline underline-offset-8 decoration-blue-500">OdaNet</h1>
        <nav className="flex gap-5 items-center  ">
          <Link className="max-md:hidden hover:underline underline-offset-8 decoration-blue-500" to="/">Oteller</Link>
          <Link  to="/" className="hover:underline underline-offset-8 decoration-blue-500">Popüler</Link>
          <Link to="/admin/create" className="hover:underline underline-offset-8 decoration-blue-500">Oluştur</Link>
        </nav>
      </div>

      <div className="flex items-center gap-3">
        <button className="border border-blue-500 rounded-full py-1 px-5 max-md:hidden">Kayıt Ol</button>
        <button className="text-white bg-blue-500 rounded-full py-1 px-5">Giriş Yap</button>
      </div>
    </Container>
   </header>
  )
}

export default Header
