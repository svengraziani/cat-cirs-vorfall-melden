import React, { useState } from 'react';
import { Checkbox } from "../ui/checkbox";
import { Label } from "../ui/label";

const factors = [
  { id: "kommunikation", label: "Kommunikation (im Team, mit Patienten, mit anderen Ärzten etc.)" },
  { id: "ausbildung", label: "Ausbildung und Training, Persönliche Faktoren des Mitarbeiters (Müdigkeit, Gesundheit, Motivation etc.)" },
  { id: "teamfaktoren", label: "Teamfaktoren (Zusammenarbeit, Vertrauen, Kultur, Führung etc.)" },
  { id: "organisation", label: "Organisation (zu wenig Personal, Standards, Arbeitsbelastung, Abläufe etc.)" },
  { id: "patientenfaktoren", label: "Patientenfaktoren (Sprache, Einschränkungen, med. Zustand etc.)" },
  { id: "technischeGeraete", label: "Technische Geräte (Funktionsfähigkeit, Bedienbarkeit etc.)" },
  { id: "kontextInstitution", label: "Kontext der Institution (Organisation des Gesundheitswesens etc.)" },
  { id: "medikation", label: "Medikation (Medikamente beteiligt?)" },
];

const ContributingFactorsSelect: React.FC = () => {
  const [selectedFactors, setSelectedFactors] = useState<string[]>([]);

  const handleFactorChange = (factorId: string, checked: boolean) => {
    setSelectedFactors(prev => 
      checked
        ? [...prev, factorId]
        : prev.filter(id => id !== factorId)
    );
  };

  return (
    <div className="space-y-4">
      <Label className="font-medium text-white">Welche Faktoren trugen zu dem Ereignis bei? (Mehrfachnennungen möglich)</Label>
      <div className="space-y-2">
        {factors.map((factor) => (
          <div key={factor.id} className="flex items-center space-x-3 bg-white p-2 rounded-md">
            <Checkbox
              id={factor.id}
              checked={selectedFactors.includes(factor.id)}
              onCheckedChange={(checked) => handleFactorChange(factor.id, checked as boolean)}
            />
            <Label
              htmlFor={factor.id}
              className="text-sm font-normal leading-tight cursor-pointer select-none flex-1 text-gray-900"
            >
              {factor.label}
            </Label>
          </div>
        ))}
      </div>
      <input
        type="hidden"
        name="contributingFactors"
        value={selectedFactors.join(',')}
      />
    </div>
  );
};

export default ContributingFactorsSelect;