import React from 'react';
import { Textarea } from "../ui/textarea";
import { Label } from "../ui/label";

const GruendeUndVermeidungTextarea: React.FC = () => {
  return (
    <div className="space-y-2">
      <Label htmlFor="gruendeUndVermeidung" className="font-medium">
        Wo sehen Sie Gründe für dieses Ereignis und wie hätte es vermieden werden können?
      </Label>
      <Textarea
        id="gruendeUndVermeidung"
        name="gruendeUndVermeidung"
        placeholder="Bitte beschreiben Sie mögliche Gründe und Vermeidungsstrategien..."
        className="min-h-[100px]"
      />
    </div>
  );
};

export default GruendeUndVermeidungTextarea;