import Link from 'next/link'
import ThemeToggleButton from './ThemeToggleButton'
import { Counter } from '@/features/counter/Counter';
export default function NavBar() {
  return (
    <nav>
          <Link href="/"> Home </Link> | 
          <Link href="/theme-context"> Theme Context Page </Link> | &nbsp;
          <Link href="/counter-redux"> Counter Page </Link> | &nbsp;
          <ThemeToggleButton />
    </nav>
  );
}