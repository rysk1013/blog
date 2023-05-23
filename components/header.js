import { Logo } from 'components/Logo';
import { Nav } from 'components/Nav';

export const Header = () => {
  return (
    <header>
      <Logo boxOn />
      <Nav />
    </header>
  );
}
