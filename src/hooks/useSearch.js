import { useEffect, useState } from 'react';
import { filter, includes, reduce, toString, upperCase } from 'lodash';

const useSearch = (items) => {
  const [search, setSearch] = useState({});
  const [filteredData, setFilteredData] = useState(items);

  const onSearch = (e) => {
    setSearch({
      ...search,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    const filtered = filter(items, (item) => {
      return reduce(
        search,
        (acc, value, key) => {
          const strValue = toString(item[key]);
          const upperCaseValue = upperCase(strValue);
          return acc ? includes(upperCaseValue, upperCase(value)) : acc;
        },
        true
      );
    });
    setFilteredData(filtered);
  }, [search, items]);

  return { onSearch, filteredData };
};

export default useSearch;
