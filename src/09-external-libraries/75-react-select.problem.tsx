<<<<<<< HEAD
import ReactSelect, {Props} from "react-select";
=======
import ReactSelect from "react-select";
>>>>>>> upstream/main
import { Equal, Expect } from "../helpers/type-utils";

/**
 * 1. Try to figure out the types the props of the Select component should have,
 * including the generic types!
 *
 * Here's a clue: ReactSelect exports a type called 'Props'...
 */
<<<<<<< HEAD
export const Select = <
  Option = unknown,
  isMulti = false,
  Group extends GroupBase<Option> = GroupBase<Option>
> (props: Props<Option, isMulti, Group>) => {
=======
export const Select = (props) => {
>>>>>>> upstream/main
  return <ReactSelect {...props} />;
};

interface Option {
  id: number;
  label: string;
}

const guitarists: Option[] = [
  {
    id: 1,
    label: "Jimi Hendrix",
  },
  {
    id: 2,
    label: "Stevie Ray Vaughan",
  },
];

<>
  <Select
    options={guitarists}
    onChange={(option) => {
      // It should infer the type of option!
      // If isMulti is false, it should NOT be an array
      type test = Expect<Equal<typeof option, Option | null>>;
    }}
  />

  <Select
    options={guitarists}
    isMulti
    onChange={(option) => {
      // If isMulti is true, it should be an array
      type test = Expect<Equal<typeof option, readonly Option[]>>;
    }}
  />
</>;
