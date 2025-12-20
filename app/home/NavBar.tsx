"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { useIsMobile } from "@/app/hooks/use-mobile"
import { usePathname } from "next/navigation"

const Services = [
    {
        title: "Website Development",
        href: "/services/web",
        description:
            "Building responsive and functional websites to enhance your online presence.",
    },
    {
        title: "Mobile App Development",
        href: "/services/mobile",
        description:
            "Creating user-friendly mobile applications for both iOS and Android platforms.",
    },
    {
        title: "UI/UX Design",
        href: "/services/uiux",
        description:
            "Designing intuitive and engaging user experiences.",
    },
    {
        title: "Digital Marketing",
        href: "/services/marketing",
        description: "Promoting products or services through digital channels.",
    },
]

export default function NavBar() {
    const isMobile = useIsMobile()
    const pathname = usePathname()

    return (
        <div className="z-50 relative flex items-center justify-evenly w-full px-4 bg-white shadow-md">
            {/* Logo */}
            <Link href="/" className="flex items-center">
                <div className="border border-(--primary-color) rounded-md p-4 my-4 mr-2">
                    <Image
                        src="/comfavorLog.png"
                        alt="Logo"
                        width={120}
                        height={40}
                    />
                </div>
                <div>
                    <span className="text-(--primary-color) text-xs">
                        Information Technology
                    </span>
                    <h1 className="text-xs">+880-1910336341</h1>
                </div>
            </Link>

            {/* Menu */}
            <NavigationMenu key={pathname} viewport={isMobile}>
                <NavigationMenuList className="flex-wrap">
                    <NavigationMenuItem>
                        <NavigationMenuLink asChild>
                            <Link
                                href="/"
                                className={`${navigationMenuTriggerStyle()} ${pathname === "/" ? "bg-gray-100" : "hover:text-(--primary-color)"}`}
                                style={{ color: pathname === "/" ? "var(--primary-color)" : undefined }}
                            >
                                Home
                            </Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>



                    <NavigationMenuItem>
                        <NavigationMenuLink asChild>
                            <Link
                                href="/aboutus"
                                className={`${navigationMenuTriggerStyle()} ${pathname === "/aboutus" ? "bg-gray-100" : "hover:text-(--primary-color)"}`}
                                style={{ color: pathname === "/aboutus" ? "var(--primary-color)" : undefined }}
                            >
                                About Us
                            </Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                        <NavigationMenuLink asChild>
                            <Link
                                href="/products"
                                className={`${navigationMenuTriggerStyle()} ${pathname === "/products"
                                    ? "text-(--primary-color) bg-gray-100"
                                    : "hover:text-(--primary-color)"
                                    }`}
                                style={{ color: pathname === "/products" ? "var(--primary-color)" : undefined }}
                            >
                                Products
                            </Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>

                    {/* <NavigationMenuItem>
                        <NavigationMenuTrigger
                            className={`
      ${navigationMenuTriggerStyle()}
      ${pathname.startsWith("/services")
                                    ? "text-(--primary-color) bg-gray-100"
                                    : "hover:text-(--primary-color)"
                                }
    `}
                        >
                            Services
                        </NavigationMenuTrigger>

                        <NavigationMenuContent>
                            <ul className="grid gap-3 p-4 sm:w-[400px] md:w-[500px] md:grid-cols-2">
                                {Services.map((service) => (
                                    <ListItem
                                        key={service.title}
                                        title={service.title}
                                        href={service.href}
                                    >
                                        {service.description}
                                    </ListItem>
                                ))}
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem> */}
                    <NavigationMenuItem>
                        <NavigationMenuTrigger
                            className={`
      inline-flex h-10 w-max items-center justify-center px-4 py-2 text-sm font-medium relative transition-colors
      text-gray-700
      ${pathname.startsWith("/services") ? "text-(--primary-color) bg-gray-100" : "hover:text-(--primary-color)"}
    `}
       style={{ color: pathname === "/services" ? "var(--primary-color)" : undefined }}
                        >
                            Services
                        </NavigationMenuTrigger>

                        <NavigationMenuContent className="border-none">
                            <ul className="grid gap-3 p-4 sm:w-[400px] md:w-[500px] md:grid-cols-2
                   border-none rounded-lg">
                                {Services.map((service) => (
                                    <ListItem
                                        key={service.title}
                                        title={service.title}
                                        href={service.href}
                                        
                                    >
                                        {service.description}
                                    </ListItem>
                                ))}
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>


                    <NavigationMenuItem>
                        <NavigationMenuLink asChild>
                            <Link
                                href="/blogs"
                                className={`${navigationMenuTriggerStyle()} ${pathname === "/blogs"
                                    ? "text-(--primary-color) bg-gray-100"
                                    : "hover:text-(--primary-color)"
                                    }`}
                                       style={{ color: pathname === "/blogs" ? "var(--primary-color)" : undefined }}
                            >
                                Blogs
                            </Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                        <NavigationMenuLink asChild>
                            <Link
                                href="/careers"
                                className={`${navigationMenuTriggerStyle()} ${pathname === "/careers"
                                    ? "text-(--primary-color) bg-gray-100"
                                    : "hover:text-(--primary-color)"
                                    }`}
                                       style={{ color: pathname === "/careers" ? "var(--primary-color)" : undefined }}
                            >
                                Careers
                            </Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                        <NavigationMenuLink asChild >
                            <Link
                                href="/contact"
                                className={`${navigationMenuTriggerStyle()} ${pathname === "/contact"
                                    ? "text-(--primary-color) bg-gray-100"
                                    : "hover:text-(--primary-color)"
                                    }`}
                                       style={{ color: pathname === "/contact" ? "var(--primary-color)" : undefined }}
                            >
                                Contact
                            </Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        </div>
    )
}

function ListItem({
    title,
    children,
    href,
}: {
    title: string
    children: React.ReactNode
    href: string
}) {
    return (
        <li>
            <NavigationMenuLink asChild>
                <Link
                    href={href}
                    className="block rounded-md p-3 hover:bg-green-50"
                >
                    <div className="text-sm font-medium text-green-700">
                        {title}
                    </div>
                    <p className="text-sm text-gray-500">{children}</p>
                </Link>
            </NavigationMenuLink>
        </li>
    )
}
