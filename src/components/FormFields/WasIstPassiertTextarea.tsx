import React from 'react';
import { Textarea } from "../ui/textarea";
import { Label } from "../ui/label";

const WasIstPassiertTextarea: React.FC = () => {
  return (
    <div className="space-y-2">
      <Label htmlFor="wasIstPassiert" className="font-medium">
        Was ist passiert?
      </Label>
      <Textarea
        id="wasIstPassiert"
        name="wasIstPassiert"
        placeholder="Bitte beschreiben Sie den Vorfall detailliert..."
        className="min-h-[100px]"
        required
      />
    </div>
  );
};

export default WasIstPassiertTextarea;