export default function Menu({ title, index, btnClass, onHandleMenu }) {
  return (
    <>
      <li>
        <button className={btnClass} onClick={() => onHandleMenu(index)}>
          {title}
        </button>
      </li>
    </>
  );
}
