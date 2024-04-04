import PropTypes from "prop-types";

const Navbar = ({ filterTasks, addTask }) => {
  return (
    <div className="flex justify-around items-center h-16 bg-primary text-secondary">
      <svg
        className="w-6 h-6 text-secondary cursor-pointer"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="currentColor"
        viewBox="0 0 24 24"
        onClick={() => filterTasks()}
      >
        <path d="M5.05 3C3.291 3 2.352 5.024 3.51 6.317l5.422 6.059v4.874c0 .472.227.917.613 1.2l3.069 2.25c1.01.742 2.454.036 2.454-1.2v-7.124l5.422-6.059C21.647 5.024 20.708 3 18.95 3H5.05Z" />
      </svg>

      <div className="font-black text-2xl">List</div>
      <svg
        className="w-6 h-6 text-secondary cursor-pointer"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="currentColor"
        viewBox="0 0 24 24"
        onClick={() => addTask()}
      >
        <path
          fillRule="evenodd"
          d="M18 5.05h1a2 2 0 0 1 2 2v2H3v-2a2 2 0 0 1 2-2h1v-1a1 1 0 1 1 2 0v1h3v-1a1 1 0 1 1 2 0v1h3v-1a1 1 0 1 1 2 0v1Zm-15 6v8a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-8H3ZM11 18a1 1 0 1 0 2 0v-1h1a1 1 0 1 0 0-2h-1v-1a1 1 0 1 0-2 0v1h-1a1 1 0 1 0 0 2h1v1Z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  );
};

Navbar.propTypes = {
  filterTasks: PropTypes.func.isRequired,
  addTask: PropTypes.func.isRequired,
};

export default Navbar;
