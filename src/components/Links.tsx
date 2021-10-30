import { Link, useLocation } from 'react-router-dom';

const getLiClasses = (isActive: boolean) => [
  'mx-1',
  'first:ml-0',
  'px-2',
  'py-1',
  'font-semibold',
  'duration-300',
  'cursor-pointer',
  'rounded',
  'hover:bg-blue-100',
  'hover:text-blue-600',
  ...(isActive ? ['bg-blue-100', 'text-blue-400'] : []),
].reduce((a, b) => `${a} ${b}`, '');

const Links = (): JSX.Element => {
  const ROUTES = [{ path: '/', text: 'Home' }, { path: '/react', text: 'React' }];

  const location = useLocation();

  return (
    <div className="links py-5">
      <nav>
        <ul className="flex">
          {ROUTES.map(({ path, text }) => (
            <li key={path} className={getLiClasses(path === location.pathname)}>
              <Link to={path}>
                {text}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Links;
