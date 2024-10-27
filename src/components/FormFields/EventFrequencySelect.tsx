import React from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select"

const EventFrequencySelect: React.FC = () => {
  return (
    <div>
      <label htmlFor="eventFrequency" className="block mb-2 font-medium">Wie häufig tritt dieses Ereignis ungefähr auf?</label>
      <Select name="eventFrequency">
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Bitte auswählen" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="nicht anwendbar">nicht anwendbar</SelectItem>
          <SelectItem value="täglich">täglich</SelectItem>
          <SelectItem value="monatlich">monatlich</SelectItem>
          <SelectItem value="jährlich">jährlich</SelectItem>
          <SelectItem value="erstmalig">erstmalig</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default EventFrequencySelect;