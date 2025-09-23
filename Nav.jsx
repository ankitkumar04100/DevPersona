import Link from 'next/link';

export default function Nav() {
  return (
    <nav className="flex justify-between items-center p-6 bg-gray-800 text-white">
      <h1 className="text-2xl font-bold">DevPersona</h1>
      <ul className="flex space-x-6">
        <li><Link href="#projects">Projects</Link></li>
        <li><Link href="#skills">Skills</Link></li>
        <li><Link href="#contact">Contact</Link></li>
      </ul>
    </nav>
  );
}
