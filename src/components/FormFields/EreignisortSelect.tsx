import React from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select"

interface EreignisortSelectProps {
  onValueChange: (value: string) => void;
}

const EreignisortSelect: React.FC<EreignisortSelectProps> = ({ onValueChange }) => {
  return (
    <div>
      <label htmlFor="ereignisort" className="block mb-2 font-medium">Wo ist das Ereignis passiert?</label>
      <Select name="ereignisort" onValueChange={onValueChange}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Bitte auswählen" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="Krankenhaus">Krankenhaus</SelectItem>
          <SelectItem value="Praxis">Praxis</SelectItem>
          <SelectItem value="Notfalldienst / Rettungswesen">Notfalldienst / Rettungswesen</SelectItem>
          <SelectItem value="Hausbesuch">Hausbesuch</SelectItem>
          <SelectItem value="Pflege / Altenheim">Pflege / Altenheim</SelectItem>
          <SelectItem value="Apotheke">Apotheke</SelectItem>
          <SelectItem value="anderer Ort">anderer Ort</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default EreignisortSelect;