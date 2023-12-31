import { Input } from 'styles/Element.styled';

export const SearchInput = () => (
  <Input
    type="text"
    name="city"
    pattern="^[А-Яа-яЇїІіЄєҐґ]+$"
    title="May contain only letters"
    required
    autoComplete="off"
    autoFocus
    placeholder="Введіть назву міста..."
  />
);
