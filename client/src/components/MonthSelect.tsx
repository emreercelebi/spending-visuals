import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { MONTH_FULL_NAMES } from '../common/constants';
import { ReactNode } from 'react';

interface MonthSelectProps {
  months: string[];
  currentMonth: string;
  setCurrentMonth: React.Dispatch<React.SetStateAction<string>>
}

export function MonthSelect({ months, currentMonth, setCurrentMonth }: MonthSelectProps) {
  
  return (
    <div className="MonthSelect">
      <FormControl>
        <InputLabel id="select-label">Month</InputLabel>
        <Select
          labelId="select-label"
          id="simple-select"
          value={currentMonth}
          label="Month"
          onChange={e => setCurrentMonth(e.target.value)}
        >
          {months.map(month => <MenuItem value={month}>{MONTH_FULL_NAMES.get(month)}</MenuItem>)}
        </Select>
      </FormControl>
    </div>
  );
}