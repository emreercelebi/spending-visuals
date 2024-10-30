import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { ReactNode } from 'react';

interface MonthSelectProps {
  months: string[];
  currentMonth: string;
  setCurrentMonth: React.Dispatch<React.SetStateAction<string>>
}

export function MonthSelect({ months, currentMonth, setCurrentMonth }: MonthSelectProps) {
  const monthFullNames = new Map<String, String>([
    ['Jan', 'January'],
    ['Feb', 'February'],
    ['Mar', 'March'],
    ['Apr', 'April'],
    ['May', 'May'],
    ['Jun', 'June'],
    ['Jul', 'July'],
    ['Aug', 'August'],
    ['Sep', 'September'],
    ['Oct', 'October'],
    ['Nov', 'November'],
    ['Dec', 'December']
  ]);
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
          {months.map(month => <MenuItem value={month}>{monthFullNames.get(month)}</MenuItem>)}
        </Select>
      </FormControl>
    </div>
  );
}