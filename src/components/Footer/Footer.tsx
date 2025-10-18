const Footer = () => {
    const content = [
        {
          title: "Company",
          items: ["About Us", "Our Services", "Careers", "Contact Us"],
        },
        {
          title: "Product",
          items: ["Blog", "Portal"],
        },
        {
          title: "Support",
          items: ["Help Center", "FAQs", "Contact Us"],
        },
        {
          title: "Legal",
          items: ["Privacy Policy", "Terms Of Service"],
        },
      ]
    return(
        <footer 
            id="footer"
             className="flex flex-col gap-0 flex-wrap justify-between bg-[#e2e2e2] px-[5%] py-5 pb-[30px] sm:px-[10%] sm:pb-[50px] sm:flex-row"
        >
        {content.map((group) => (
            <div className="mb-8 sm:mb-0 sm:flex-auto sm:basis-auto">
                <h1 className="text-[1.25rem] sm:text-[1.5rem] uppercase font-semibold mb-4 sm:mb-6">{group.title}</h1>

                <div>
                {group.items.map((item) => (
                    <p key={item} className="mb-4 last:mb-0">
                        {item}
                    </p>
                ))}
                </div>
            </div>
        ))}
        </footer>
    )
}

export default Footer;