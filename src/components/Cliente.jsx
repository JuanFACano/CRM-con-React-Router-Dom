import PropTypes from 'prop-types';
const Cliente = ({ cliente }) => {
  const { nombre, empresa, email, telefono, id } = cliente;

  return (
    <tr className="border-b">
      <td className="p-6 space-y-2">
        <p className="text-2xl text-gray-900">{nombre}</p>
        <p>{empresa}</p>
      </td>
      <td className="p-6">
        <p className="text gray 600">
          <span className="text-gray-800 uppercase font-bold">Email: </span>{' '}
          {email}
          <span className="text-gray-800 uppercase font-bold">TEL: </span>{' '}
          {telefono}
        </p>
      </td>
      <td className="p-6 flex gap-3">
        <button
          type="button"
          className="text-blue-600 font-bold hover:text-blue-700 uppercase text-xs"
        >
          Editar
        </button>
        <button
          type="button"
          className="text-red-600 font-bold hover:text-red-700 uppercase text-xs"
        >
          Eliminar
        </button>
      </td>
    </tr>
  );
};

Cliente.propTypes = {
  cliente: PropTypes.object,
};

export default Cliente;
