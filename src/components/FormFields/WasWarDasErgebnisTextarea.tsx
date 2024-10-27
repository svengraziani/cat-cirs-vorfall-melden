import React from 'react';
import { Textarea } from "../ui/textarea";
import { Label } from "../ui/label";

const WasWarDasErgebnisTextarea: React.FC = () => {
  return (
    <div className="space-y-2">
      <Label htmlFor="wasWarDasErgebnis" className="font-medium">
        Was war das Ergebnis?
      </Label>
      <Textarea
        id="wasWarDasErgebnis"
        name="wasWarDasErgebnis"
        placeholder="Bitte beschreiben Sie das Ergebnis des Vorfalls..."
        className="min-h-[100px]"
        required
      />
    </div>
  );
};

export default WasWarDasErgebnisTextarea;