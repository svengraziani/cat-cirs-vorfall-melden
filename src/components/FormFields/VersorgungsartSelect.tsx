import React from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select"

const VersorgungsartSelect: React.FC = () => {
  return (
    <div>
      <label htmlFor="versorgungsart" className="block mb-2 font-medium">Welche Versorgungsart</label>
      <Select name="versorgungsart">
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Bitte auswählen" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="Routinebetrieb">Routinebetrieb</SelectItem>
          <SelectItem value="Notfall">Notfall</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default VersorgungsartSelect;