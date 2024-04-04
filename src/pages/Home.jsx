import PropTypes from "prop-types";

const Home = ({ filteredTasks }) => {
  return (
    <div>
      <div>
        <ul>
          {filteredTasks.map((task) => (
            <li key={task.id}>{task.text}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

Home.propTypes = {
  filteredTasks: PropTypes.array.isRequired,
};

export default Home;
