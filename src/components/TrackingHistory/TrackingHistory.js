import {
  ContentBox,
  Text,
  ButtonDelete,
  List,
  ListItem,
} from 'styles/Element.styled';
import { AiFillDelete } from 'react-icons/ai';

const TrackHistory = ({ items, onClick }) => {
  console.log(items);
  console.log(items.length);

  // const reversed = items.reverse();

  return (
    <ContentBox>
      <Text>Історія пошуку...</Text>
      <ButtonDelete type="button" onClick={onClick} aria-label="search button">
        <AiFillDelete />
      </ButtonDelete>
      {items.length > 0 && (
        <List>
          {items.map(item => {
            return <ListItem key={item}>{item}</ListItem>;
          })}
        </List>
      )}
    </ContentBox>
  );
};

export default TrackHistory;
