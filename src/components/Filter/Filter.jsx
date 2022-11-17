import { LabelName } from 'components/ContactForm/ContactFormFormik.styled';
import PropTypes from 'prop-types';
import { FilterLabel, InputFilterField } from './Filter.styled';
export const Filter = ({ value, onChange }) => {
  return (
    <FilterLabel>
      <LabelName>Finds contacts by name</LabelName>
      <InputFilterField
        type="text"
        name="filter"
        value={value}
        onChange={onChange}
      />
    </FilterLabel>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
