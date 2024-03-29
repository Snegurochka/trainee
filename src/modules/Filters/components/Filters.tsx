import styled from "@emotion/styled";
import { Stack } from "@mui/material";
import { useSelector } from "react-redux";
import { selectCategories } from "../services/filters-selectors";

import { FiltersCategoryItem } from "./FiltersCategoryItem";

const FilterWrapper = styled.div`
  background-color: #fff;
  border-left: 1px solid #e0e0e0;
  height: 100%;
  padding: 16px;
`;

export const Filters = () => {
  const categories = useSelector(selectCategories);

  return (
    <FilterWrapper>
      <h3>Quiz Categories</h3>

      <Stack spacing={2}>
        {categories.map((category) => (
          <FiltersCategoryItem
            key={category.id}
            id={category.id}
            name={category.name}
          />
        ))}
      </Stack>
    </FilterWrapper>
  );
};
