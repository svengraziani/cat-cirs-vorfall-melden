import React from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select"

const PatientHarmSelect: React.FC = () => {
  return (
    <div>
      <label htmlFor="patientHarm" className="block mb-2 font-medium">Kam der Patient zu Schaden? (falls bereits bekannt)</label>
      <Select name="patientHarm">
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Bitte auswählen" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="nicht anwendbar">nicht anwendbar (kein Patient beteiligt)</SelectItem>
          <SelectItem value="nein">nein</SelectItem>
          <SelectItem value="minimal">Minimaler Schaden / Verunsicherung des Patienten</SelectItem>
          <SelectItem value="passager_leicht">Passagerer Schaden leicht - mittel</SelectItem>
          <SelectItem value="passager_schwer">Passagerer Schaden schwer</SelectItem>
          <SelectItem value="dauer_leicht">Dauerschaden leicht - mittel</SelectItem>
          <SelectItem value="dauer_schwer">Dauerschaden schwer</SelectItem>
          <SelectItem value="tod">Tod</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default PatientHarmSelect;