import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

function BasicPagination({ count, page, handleChange }) {
  return (
    <div className="flex justify-center my-4">
      <Stack spacing={2}>
        <Pagination count={count} page={page} onChange={handleChange} color="gray" />
      </Stack>
    </div>
  );
}

export default BasicPagination;