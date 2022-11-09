import { nanoid } from 'nanoid';

export default function HomeIndex(props) {
  var arr = props.data;
  var key = "'" + nanoid() + "'";

  return arr.map((element) => {
    return (
      <ul key={key + element.title}>
        <li>
          <h2>Title: {element.title}</h2>
        </li>
        <li>StudioId: {element.studioId}</li>
        <li>MainCharacterId: {element.mainCharacterId}</li>
      </ul>
    );
  });
}
