import React from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select"

interface FachgebietSelectProps {
  onValueChange: (value: string) => void;
}

const FachgebietSelect: React.FC<FachgebietSelectProps> = ({ onValueChange }) => {
  return (
    <div>
      <label htmlFor="fachgebiet" className="block mb-2 font-medium">Zuständiges Fachgebiet</label>
      <Select name="fachgebiet" onValueChange={onValueChange}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Bitte auswählen" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="Allgemeinmedizin">Allgemeinmedizin</SelectItem>
          <SelectItem value="Anästhesiologie">Anästhesiologie</SelectItem>
          <SelectItem value="Augenheilkunde">Augenheilkunde</SelectItem>
          <SelectItem value="Chirurgie">Chirurgie</SelectItem>
          <SelectItem value="Frauenheilkunde / Geburtshilfe">Frauenheilkunde / Geburtshilfe</SelectItem>
          <SelectItem value="Geriatrie">Geriatrie</SelectItem>
          <SelectItem value="Haut- und Geschlechtskrankheiten">Haut- und Geschlechtskrankheiten</SelectItem>
          <SelectItem value="HNO-Heilkunde">HNO-Heilkunde</SelectItem>
          <SelectItem value="Innere Medizin">Innere Medizin</SelectItem>
          <SelectItem value="Kinder- und Jugendmedizin">Kinder- und Jugendmedizin</SelectItem>
          <SelectItem value="Neurologie, Orthopädie">Neurologie, Orthopädie</SelectItem>
          <SelectItem value="Palliativversorgung">Palliativversorgung</SelectItem>
          <SelectItem value="Pharmazie">Pharmazie</SelectItem>
          <SelectItem value="Psychiatrie">Psychiatrie</SelectItem>
          <SelectItem value="Psychotherapie">Psychotherapie</SelectItem>
          <SelectItem value="Radiologie">Radiologie</SelectItem>
          <SelectItem value="Urologie">Urologie</SelectItem>
          <SelectItem value="anderes Fachgebiet">anderes Fachgebiet</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default FachgebietSelect;