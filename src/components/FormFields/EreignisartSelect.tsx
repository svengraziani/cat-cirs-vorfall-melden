import React from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select"

interface EreignisartSelectProps {
  onValueChange: (value: string) => void;
}

const EreignisartSelect: React.FC<EreignisartSelectProps> = ({ onValueChange }) => {
  return (
    <div>
      <label htmlFor="ereignisart" className="block mb-2 font-medium">In welchem Kontext fand das Ereignis statt?</label>
      <Select name="ereignisart" onValueChange={onValueChange}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Bitte auswählen" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="Prävention">Prävention</SelectItem>
          <SelectItem value="Diagnosestellung">Diagnosestellung</SelectItem>
          <SelectItem value="Nichtinvasive Massnahmen">Nichtinvasive Massnahmen (Diagnostik / Therapie)</SelectItem>
          <SelectItem value="Invasive Massnahmen">Invasive Massnahmen (Diagnostik / Therapie)</SelectItem>
          <SelectItem value="Organisation">Organisation (Schnittstellen / Kommunikation)</SelectItem>
          <SelectItem value="anderer Kontext">anderer Kontext</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default EreignisartSelect;