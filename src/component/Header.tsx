

export default function Header() {
  return (
    <nav className="flex justify-between">
        <div className="">
            <img src='/logo512.png' alt="header-logo" />
        </div>
        <div className="">
            <ul className="flex justify-around">
                <li className="">All Recipes</li>
                <li className="">Vegan</li>
                <li className="">Gluten-Free</li>
                <li className="">Shop</li>
                           </ul>
        </div>
    </nav>
  )
}