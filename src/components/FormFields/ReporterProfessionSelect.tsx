import React from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select"

const ReporterProfessionSelect: React.FC = () => {
  return (
    <div>
      <label htmlFor="reporterProfession" className="block mb-2 font-medium">Wer berichtet? (Berufsgruppe)</label>
      <Select name="reporterProfession">
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Bitte auswählen" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="Pflege-, Praxispersonal">Pflege-, Praxispersonal</SelectItem>
          <SelectItem value="Arzt / Ärztin, Psychotherapeut/in">Arzt / Ärztin, Psychotherapeut/in</SelectItem>
          <SelectItem value="Apotheker / Apothekerin">Apotheker / Apothekerin</SelectItem>
          <SelectItem value="andere Berufsgruppe">andere Berufsgruppe</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default ReporterProfessionSelect;