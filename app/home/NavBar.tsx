// // "use client"

// // import * as React from "react"
// // import Link from "next/link"
// // import Image from "next/image"
// // import {
// //     NavigationMenu,
// //     NavigationMenuContent,
// //     NavigationMenuItem,
// //     NavigationMenuLink,
// //     NavigationMenuList,
// //     NavigationMenuTrigger,
// //     navigationMenuTriggerStyle,
// // } from "@/components/ui/navigation-menu"
// // import { useIsMobile } from "@/app/hooks/use-mobile"
// // import { usePathname } from "next/navigation"

// // const Services = [
// //     {
// //         title: "Website Development",
// //         href: "/services/web",
// //         description:
// //             "Building responsive and functional websites to enhance your online presence.",
// //     },
// //     {
// //         title: "Mobile App Development",
// //         href: "/services/mobile",
// //         description:
// //             "Creating user-friendly mobile applications for both iOS and Android platforms.",
// //     },
// //     {
// //         title: "UI/UX Design",
// //         href: "/services/uiux",
// //         description:
// //             "Designing intuitive and engaging user experiences.",
// //     },
// //     {
// //         title: "Digital Marketing",
// //         href: "/services/marketing",
// //         description: "Promoting products or services through digital channels.",
// //     },
// // ]

// // export default function NavBar() {
// //     const isMobile = useIsMobile()
// //     const pathname = usePathname()

// //     return (
// //         <div className="z-50 relative flex items-center justify-evenly w-full px-4 bg-white shadow-md">
// //             {/* Logo */}
// //             <Link href="/" className="flex items-center">
// //                 <div className="border border-(--primary-color) rounded-md p-4 my-4 mr-2">
// //                     <Image
// //                         src="/comfavorLog.png"
// //                         alt="Logo"
// //                         width={120}
// //                         height={40}
// //                     />
// //                 </div>
// //                 <div>
// //                     <span className="text-(--primary-color) text-xs">
// //                         Information Technology
// //                     </span>
// //                     <h1 className="text-xs">+880-1910336341</h1>
// //                 </div>
// //             </Link>

// //             {/* Menu */}
// //             <NavigationMenu key={pathname} viewport={isMobile}>
// //                 <NavigationMenuList className="flex-wrap">
// //                     <NavigationMenuItem>
// //                         <NavigationMenuLink asChild>
// //                             <Link
// //                                 href="/"
// //                                 className={`${navigationMenuTriggerStyle()} ${pathname === "/" ? "bg-gray-100" : "hover:text-(--primary-color)"}`}
// //                                 style={{ color: pathname === "/" ? "var(--primary-color)" : undefined }}
// //                             >
// //                                 Home
// //                             </Link>
// //                         </NavigationMenuLink>
// //                     </NavigationMenuItem>



// //                     <NavigationMenuItem>
// //                         <NavigationMenuLink asChild>
// //                             <Link
// //                                 href="/aboutus"
// //                                 className={`${navigationMenuTriggerStyle()} ${pathname === "/aboutus" ? "bg-gray-100" : "hover:text-(--primary-color)"}`}
// //                                 style={{ color: pathname === "/aboutus" ? "var(--primary-color)" : undefined }}
// //                             >
// //                                 About Us
// //                             </Link>
// //                         </NavigationMenuLink>
// //                     </NavigationMenuItem>

// //                     <NavigationMenuItem>
// //                         <NavigationMenuLink asChild>
// //                             <Link
// //                                 href="/products"
// //                                 className={`${navigationMenuTriggerStyle()} ${pathname === "/products"
// //                                     ? "text-(--primary-color) bg-gray-100"
// //                                     : "hover:text-(--primary-color)"
// //                                     }`}
// //                                 style={{ color: pathname === "/products" ? "var(--primary-color)" : undefined }}
// //                             >
// //                                 Products
// //                             </Link>
// //                         </NavigationMenuLink>
// //                     </NavigationMenuItem>


// //                     <NavigationMenuItem>
// //                         <NavigationMenuTrigger
// //                             className={`
// //       inline-flex h-10 w-max items-center justify-center px-4 py-2 text-sm font-medium relative transition-colors
// //       text-gray-700
// //       ${pathname.startsWith("/services") ? "text-(--primary-color) bg-gray-100" : "hover:text-(--primary-color)"}
// //     `}
// //        style={{ color: pathname === "/services" ? "var(--primary-color)" : undefined }}
// //                         >
// //                             Services
// //                         </NavigationMenuTrigger>

// //                         <NavigationMenuContent className="border-none">
// //                             <ul className="grid gap-3 p-4 sm:w-[400px] md:w-[500px] md:grid-cols-2
// //                    border-none rounded-lg">
// //                                 {Services.map((service) => (
// //                                     <ListItem
// //                                         key={service.title}
// //                                         title={service.title}
// //                                         href={service.href}

// //                                     >
// //                                         {service.description}
// //                                     </ListItem>
// //                                 ))}
// //                             </ul>
// //                         </NavigationMenuContent>
// //                     </NavigationMenuItem>


// //                     <NavigationMenuItem>
// //                         <NavigationMenuLink asChild>
// //                             <Link
// //                                 href="/blogs"
// //                                 className={`${navigationMenuTriggerStyle()} ${pathname === "/blogs"
// //                                     ? "text-(--primary-color) bg-gray-100"
// //                                     : "hover:text-(--primary-color)"
// //                                     }`}
// //                                        style={{ color: pathname === "/blogs" ? "var(--primary-color)" : undefined }}
// //                             >
// //                                 Blogs
// //                             </Link>
// //                         </NavigationMenuLink>
// //                     </NavigationMenuItem>

// //                     <NavigationMenuItem>
// //                         <NavigationMenuLink asChild>
// //                             <Link
// //                                 href="/careers"
// //                                 className={`${navigationMenuTriggerStyle()} ${pathname === "/careers"
// //                                     ? "text-(--primary-color) bg-gray-100"
// //                                     : "hover:text-(--primary-color)"
// //                                     }`}
// //                                        style={{ color: pathname === "/careers" ? "var(--primary-color)" : undefined }}
// //                             >
// //                                 Careers
// //                             </Link>
// //                         </NavigationMenuLink>
// //                     </NavigationMenuItem>

// //                     <NavigationMenuItem>
// //                         <NavigationMenuLink asChild >
// //                             <Link
// //                                 href="/contact"
// //                                 className={`${navigationMenuTriggerStyle()} ${pathname === "/contact"
// //                                     ? "text-(--primary-color) bg-gray-100"
// //                                     : "hover:text-(--primary-color)"
// //                                     }`}
// //                                        style={{ color: pathname === "/contact" ? "var(--primary-color)" : undefined }}
// //                             >
// //                                 Contact
// //                             </Link>
// //                         </NavigationMenuLink>
// //                     </NavigationMenuItem>
// //                 </NavigationMenuList>
// //             </NavigationMenu>
// //         </div>
// //     )
// // }

// // function ListItem({
// //     title,
// //     children,
// //     href,
// // }: {
// //     title: string
// //     children: React.ReactNode
// //     href: string
// // }) {
// //     return (
// //         <li>
// //             <NavigationMenuLink asChild>
// //                 <Link
// //                     href={href}
// //                     className="block rounded-md p-3 hover:bg-green-50"
// //                 >
// //                     <div className="text-sm font-medium text-green-700">
// //                         {title}
// //                     </div>
// //                     <p className="text-sm text-gray-500">{children}</p>
// //                 </Link>
// //             </NavigationMenuLink>
// //         </li>
// //     )
// // }


// "use client"

// import * as React from "react"
// import Link from "next/link"
// import Image from "next/image"
// import { usePathname } from "next/navigation"
// import { Menu } from "lucide-react"

// import {
//   NavigationMenu,
//   NavigationMenuContent,
//   NavigationMenuItem,
//   NavigationMenuLink,
//   NavigationMenuList,
//   NavigationMenuTrigger,
//   navigationMenuTriggerStyle,
// } from "@/components/ui/navigation-menu"

// import {
//   Sheet,
//   SheetTitle,
//   SheetDescription, 
//   SheetContent,
//   SheetTrigger,
// } from "@/components/ui/sheet"

// const Services = [
//   {
//     title: "Website Development",
//     href: "/services/web",
//     description: "Responsive and modern websites",
//   },
//   {
//     title: "Mobile App Development",
//     href: "/services/mobile",
//     description: "iOS & Android apps",
//   },
//   {
//     title: "UI/UX Design",
//     href: "/services/uiux",
//     description: "User-focused design",
//   },
//   {
//     title: "Digital Marketing",
//     href: "/services/marketing",
//     description: "Grow your business online",
//   },
// ]

// export default function NavBar() {
//   const pathname = usePathname()

//   const linkClass = (path: string) =>
//     `${navigationMenuTriggerStyle()} ${
//       pathname === path
//         ? "bg-gray-100 text-[var(--primary-color)]"
//         : "hover:text-[var(--primary-color)]"
//     }`

//   return (
//     <header className="sticky top-0 z-50 w-full bg-white shadow">
//       <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">

//         {/* Logo */}
//         <Link href="/" className="flex items-center gap-2">
//           <Image
//             src="/comfavorLog.png"
//             alt="Logo"
//             width={120}
//             height={40}
//             priority
//           />
//         </Link>

//         {/* Desktop Menu */}
//         <nav className="hidden md:flex">
//           <NavigationMenu>
//             <NavigationMenuList>
//               <NavigationMenuItem>
//                 <Link href="/" className={linkClass("/")}>
//                   Home
//                 </Link>
//               </NavigationMenuItem>

//               <NavigationMenuItem>
//                 <Link href="/aboutus" className={linkClass("/aboutus")}>
//                   About Us
//                 </Link>
//               </NavigationMenuItem>

//               <NavigationMenuItem>
//                 <Link href="/products" className={linkClass("/products")}>
//                   Products
//                 </Link>
//               </NavigationMenuItem>

//               {/* Services Dropdown */}
//               <NavigationMenuItem>
//                 <NavigationMenuTrigger
//                   className={
//                     pathname.startsWith("/services")
//                       ? "bg-gray-100 text-(--primary-color)"
//                       : "hover:text-(--primary-color)"
//                   }
//                 >
//                   Services
//                 </NavigationMenuTrigger>

//                 <NavigationMenuContent>
//                   <ul className="grid w-[500px] grid-cols-2 gap-3 p-4">
//                     {Services.map((s) => (
//                       <li key={s.title}>
//                         <Link
//                           href={s.href}
//                           className="block rounded-md p-3 hover:bg-green-50"
//                         >
//                           <p className="font-medium text-green-700">
//                             {s.title}
//                           </p>
//                           <p className="text-sm text-gray-500">
//                             {s.description}
//                           </p>
//                         </Link>
//                       </li>
//                     ))}
//                   </ul>
//                 </NavigationMenuContent>
//               </NavigationMenuItem>

//               <NavigationMenuItem>
//                 <Link href="/blogs" className={linkClass("/blogs")}>
//                   Blogs
//                 </Link>
//               </NavigationMenuItem>

//               <NavigationMenuItem>
//                 <Link href="/careers" className={linkClass("/careers")}>
//                   Careers
//                 </Link>
//               </NavigationMenuItem>

//               <NavigationMenuItem>
//                 <Link href="/contact" className={linkClass("/contact")}>
//                   Contact
//                 </Link>
//               </NavigationMenuItem>
//             </NavigationMenuList>
//           </NavigationMenu>
//         </nav>

//         {/* Mobile Menu */}
//         <div className="md:hidden">
//           <Sheet>
//             <SheetTrigger>
//               <Menu className="h-6 w-6" />
//             </SheetTrigger>

//             <SheetContent side="right" className="w-72">
//               <nav className="flex flex-col gap-4 mt-6">
//                 <MobileLink href="/" pathname={pathname}>Home</MobileLink>
//                 <MobileLink href="/aboutus" pathname={pathname}>About Us</MobileLink>
//                 <MobileLink href="/products" pathname={pathname}>Products</MobileLink>

//                 <div className="border-t pt-4">
//                   <p className="mb-2 font-semibold">Services</p>
//                   {Services.map((s) => (
//                     <MobileLink
//                       key={s.title}
//                       href={s.href}
//                       pathname={pathname}
//                     >
//                       {s.title}
//                     </MobileLink>
//                   ))}
//                 </div>

//                 <MobileLink href="/blogs" pathname={pathname}>Blogs</MobileLink>
//                 <MobileLink href="/careers" pathname={pathname}>Careers</MobileLink>
//                 <MobileLink href="/contact" pathname={pathname}>Contact</MobileLink>
//               </nav>

//             </SheetContent>
//           </Sheet>
//         </div>
//       </div>
//     </header>
//   )
// }

// /* ---------------- Mobile Link ---------------- */

// function MobileLink({
//   href,
//   pathname,
//   children,
// }: {
//   href: string
//   pathname: string
//   children: React.ReactNode
// }) {
//   const active = pathname === href
//   return (
//     <Link
//       href={href}
//       className={`rounded px-2 py-2 ${
//         active
//           ? "bg-green-100 text-green-700"
//           : "hover:bg-gray-100"
//       }`}
//     >
//       {children}
//     </Link>
//   )
// }


"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu } from "lucide-react"
import { VisuallyHidden } from "@radix-ui/react-visually-hidden"

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

import {
    Sheet,
    SheetTitle,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"
import { NavigationMenuLink } from "@radix-ui/react-navigation-menu"

const Services = [
    {
        title: "Website Development",
        href: "/services/web",
        description: "Responsive and modern websites",
    },
    {
        title: "Mobile App Development",
        href: "/services/mobile",
        description: "iOS & Android apps",
    },
    {
        title: "UI/UX Design",
        href: "/services/uiux",
        description: "User-focused design",
    },
    {
        title: "Digital Marketing",
        href: "/services/marketing",
        description: "Grow your business online",
    },
]

export default function NavBar() {
    const pathname = usePathname()

    const linkClass = (path: string) =>
        `${navigationMenuTriggerStyle()} ${pathname === path
            ? "bg-gray-100 text-[var(--primary-color)]"
            : "hover:text-[var(--primary-color)]"
        }`

    return (
        <header className="sticky top-0 z-50 w-full bg-white shadow">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">

                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                    <Image
                        src="/comfavorLog.png"
                        alt="Logo"
                        width={120}
                        height={40}
                        priority
                    />
                </Link>

                {/* Desktop Menu */}
                <nav className="hidden md:flex">
                    <NavigationMenu>
                        <NavigationMenuList>
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
                                <Link href="/aboutus" className={linkClass("/aboutus")}>About Us</Link>
                            </NavigationMenuItem>

                            <NavigationMenuItem>
                                <Link href="/products" className={linkClass("/products")}>Products</Link>
                            </NavigationMenuItem>

                            <NavigationMenuItem>
                                <NavigationMenuTrigger
                                    className={
                                        pathname.startsWith("/services")
                                            ? "bg-gray-100 text-(--primary-color)"
                                            : "hover:text-(--primary-color)"
                                    }
                                >
                                    Services
                                </NavigationMenuTrigger>

                                <NavigationMenuContent>
                                    <ul className="grid w-[500px] grid-cols-2 gap-3 p-4">
                                        {Services.map((s) => (
                                            <li key={s.title}>
                                                <Link
                                                    href={s.href}
                                                    className="block rounded-md p-3 hover:bg-green-50"
                                                >
                                                    <p className="font-medium text-green-700">{s.title}</p>
                                                    <p className="text-sm text-gray-500">{s.description}</p>
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>

                            <NavigationMenuItem>
                                <Link href="/blogs" className={linkClass("/blogs")}>Blogs</Link>
                            </NavigationMenuItem>

                            <NavigationMenuItem>
                                <Link href="/careers" className={linkClass("/careers")}>Careers</Link>
                            </NavigationMenuItem>

                            <NavigationMenuItem>
                                <Link href="/contact" className={linkClass("/contact")}>Contact</Link>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                </nav>

                {/* Mobile Menu */}
                <div className="md:hidden">
                    <Sheet>
                        <SheetTrigger aria-label="Open menu">
                            <Menu className="h-6 w-6" />
                        </SheetTrigger>

                        <SheetContent side="right" className="w-72">
                            {/* ✅ Accessibility title (hidden) */}
                            <VisuallyHidden>
                                <SheetTitle>Mobile Navigation</SheetTitle>
                            </VisuallyHidden>

                            <nav className="mt-6 flex flex-col gap-4">
                                <MobileLink href="/" pathname={pathname}>Home</MobileLink>
                                <MobileLink href="/aboutus" pathname={pathname}>About Us</MobileLink>
                                <MobileLink href="/products" pathname={pathname}>Products</MobileLink>

                                <div className="border-t pt-4">
                                    <p className="mb-2 font-semibold">Services</p>
                                    {Services.map((s) => (
                                        <MobileLink key={s.title} href={s.href} pathname={pathname}>
                                            {s.title}
                                        </MobileLink>
                                    ))}
                                </div>

                                <MobileLink href="/blogs" pathname={pathname}>Blogs</MobileLink>
                                <MobileLink href="/careers" pathname={pathname}>Careers</MobileLink>
                                <MobileLink href="/contact" pathname={pathname}>Contact</MobileLink>
                            </nav>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    )
}

/* ---------------- Mobile Link ---------------- */

function MobileLink({
    href,
    pathname,
    children,
}: {
    href: string
    pathname: string
    children: React.ReactNode
}) {
    const active = pathname === href
    return (
        <Link
            href={href}
            className={`rounded px-2 py-2 ${active
                    ? "bg-green-100 text-green-700"
                    : "hover:bg-gray-100"
                }`}
        >
            {children}
        </Link>
    )
}
