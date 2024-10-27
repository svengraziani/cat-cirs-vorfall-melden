import React from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select"

const GeschlechtSelect: React.FC = () => {
  return (
    <div>
      <label htmlFor="geschlecht" className="block mb-2 font-medium">Geschlecht des Patienten (falls betroffen)</label>
      <Select name="geschlecht">
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Bitte auswählen" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="weiblich">weiblich</SelectItem>
          <SelectItem value="männlich">männlich</SelectItem>
          <SelectItem value="unbekannt">unbekannt</SelectItem>
          <SelectItem value="divers">divers</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default GeschlechtSelect;