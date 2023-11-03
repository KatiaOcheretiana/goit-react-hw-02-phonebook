export const ContactList = ({ contacts, deleteCard }) => {
  return (
    <ul>
      {contacts.map(item => (
        <li key={item.id}>
          <p>
            {item.name} : {item.number}
          </p>
          <button onClick={() => deleteCard(item.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};
