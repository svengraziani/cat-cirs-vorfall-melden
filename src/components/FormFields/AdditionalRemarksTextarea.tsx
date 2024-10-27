import React from 'react';
import { Textarea } from "../ui/textarea";
import { Label } from "../ui/label";

const AdditionalRemarksTextarea: React.FC = () => {
  return (
    <div className="space-y-2">
      <Label htmlFor="additionalRemarks" className="font-medium">
        Zusätzliche Bemerkungen
      </Label>
      <Textarea
        id="additionalRemarks"
        name="additionalRemarks"
        placeholder="Hier können Sie zusätzliche Informationen oder Bemerkungen eintragen..."
        className="min-h-[100px]"
      />
    </div>
  );
};

export default AdditionalRemarksTextarea;