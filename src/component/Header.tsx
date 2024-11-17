export default function Header() {
  return (
    <nav className="flex justify-between w-full p-8">
      <div className="">
        <img src="/images/logo/logo.png" alt="header-logo" className="w-10 h-10" />
      </div>
      <div className="">
        <ul className="flex justify-between gap-6">
          <li className="">All Recipes</li>
          <li className="">Vegan</li>
          <li className="">Gluten-Free</li>
          <li className="">Shop</li>
        </ul>
      </div>
    </nav>
  );
}
