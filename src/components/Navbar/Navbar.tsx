const items: string[] = ["Home", "Blog", "Our Services", "About", "Contact Us"];

const Navbar = () => {
    return(
        <nav className="border border-gray-200">
        <ul className="flex flex-wrap gap-3 justify-center uppercase font-medium py-4 text-[0.75rem] sm:gap-4 sm:py-6 sm:text-[0.875rem] md:gap-8 md:py-8">
            {items.map((it) => (
                <li key={it} className="list-none cursor-pointer">
                    {it}
                </li>
            ))}
      </ul>
        </nav>
    )
}

export default Navbar;