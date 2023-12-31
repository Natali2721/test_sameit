import { Input } from 'styles/Element.styled';

export const TrackInput = () => (
  <Input
    id="TTN"
    type="text"
    name="TTN"
    pattern="^[0-9]{14}$"
    title="May contain only numbers at least 14"
    required
    autoComplete="off"
    autoFocus
    placeholder="Введіть номер ТТН..."
  />
);
