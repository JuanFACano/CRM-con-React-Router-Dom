import PropTypes from 'prop-types';
const Error = ({ children }) => {
  console.log(children);
  return (
    <div className="text-center text-white my-4 bg-red-600 font-bold p-3 uppercase">
      {children}
    </div>
  );
};

Error.propTypes = {
  children: PropTypes.string,
};

export default Error;
