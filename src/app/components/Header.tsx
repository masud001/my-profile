"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Header = () => {
    const NavLinks = [
        { name: 'about', path: '/about' },
        { name: 'blog', path: '/blog' },
        { name: 'works', path: '/works' },
    ]
    const pathName = usePathname();
    
    return (
        <>
            <header className="bg-gray-800 p-4 text-white flex items-center justify-between">
                <div className="">
                    <Link href="/"><h1 className="text-4xl font-bold">Masud Karim</h1></Link>
                    <p className="text-lg">Frontend Developer</p>
                </div>
                <nav className="navigation">
                    <ul className="flex items-center justify-center gap-3">
                        {NavLinks.map((navLinks) => {
                            const isActive = pathName.startsWith(navLinks.path);
                            
                            return (
                                <li key={navLinks.name}>
                                    <Link className={` capitalize ${isActive ? 'text-lg font-bold text-red-400': 'text-lg font-bold text-white'}` } href={navLinks.path}>
                                        {navLinks.name}
                                    </Link>
                                </li>
                            );
                        }
                        )}
                    </ul>
                </nav>
                
            </header>
        </>
    );
}

export default Header;