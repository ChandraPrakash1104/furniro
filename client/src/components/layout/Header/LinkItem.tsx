import { NavLink } from 'react-router-dom';

const LinkItem = (props: { destination: string; label: string }) => {
  return (
    <NavLink
      to={props.destination}
      className={({ isActive }) =>
        (isActive
          ? 'underline transform scale-105 lg:no-underline lg:bg-gray-300'
          : 'lg:hover:bg-gray-200 lg:active:bg-gray-300  transition-all') +
        ' py-1 px-4 transition-transform text-base font-medium'
      }
    >
      {props.label}
    </NavLink>
  );
};

export default LinkItem;
