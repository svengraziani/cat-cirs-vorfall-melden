import React from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select"

const AltersgruppeSelect: React.FC = () => {
  return (
    <div>
      <label htmlFor="altersgruppe" className="block mb-2 font-medium">Altersgruppe des Patienten (falls betroffen)</label>
      <Select name="altersgruppe">
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Bitte auswählen" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="0-1">0-1</SelectItem>
          <SelectItem value="2-5">2-5</SelectItem>
          <SelectItem value="6-10">6-10</SelectItem>
          <SelectItem value="11-15">11-15</SelectItem>
          <SelectItem value="16-20">16-20</SelectItem>
          <SelectItem value="21-30">21-30</SelectItem>
          <SelectItem value="31-40">31-40</SelectItem>
          <SelectItem value="41-50">41-50</SelectItem>
          <SelectItem value="51-60">51-60</SelectItem>
          <SelectItem value="61-70">61-70</SelectItem>
          <SelectItem value="71-80">71-80</SelectItem>
          <SelectItem value="81-90">81-90</SelectItem>
          <SelectItem value="&gt;90">&gt;90</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default AltersgruppeSelect;