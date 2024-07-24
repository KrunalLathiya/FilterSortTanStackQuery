// src/components/FilterSort.jsx


import { TextField, InputLabel, Select, MenuItem, Typography } from '@mui/material';
import { StyledBox, StyledFormControl } from './styledComponents';

const FilterSort = ({ filter, setFilter, sort, setSort }) => (
    <StyledBox>
        <Typography variant="h6" component="h2" sx={{ mb: 2, flexGrow: 1 }}>
            Filter & Sort
        </Typography>
        <TextField
            label="Filter"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            variant="outlined"
            sx={{ flexGrow: 1 }}
        />
        <StyledFormControl variant="outlined">
            <InputLabel id="sort-label">Sort</InputLabel>
            <Select
                labelId="sort-label"
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                label="Sort"
            >
                <MenuItem value="asc">Ascending</MenuItem>
                <MenuItem value="desc">Descending</MenuItem>
            </Select>
        </StyledFormControl>
    </StyledBox>
);

export default FilterSort;
