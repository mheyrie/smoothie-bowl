export default function Header() {
  return (
    <nav className="flex justify-between w-full p-8">
      <div className="">
        <img
          src="/images/logo/logo.png"
          alt="header-logo"
          className="w-10 h-10 hover:cursor-pointer"
        />
      </div>
      <div className="">
        <ul className="flex justify-between gap-8">
          <li className="cursor-pointer font-semibold">All Recipes</li>
          <li className="cursor-pointer font-semibold">Vegan</li>
          <li className="cursor-pointer font-semibold">Gluten-Free</li>
          <li className="cursor-pointer font-semibold">Shop</li>
        </ul>
      </div>
    </nav>
  );
}
