import React, { useState } from 'react';
import { ClipboardList, Send } from 'lucide-react';
import FachgebietSelect from './FormFields/FachgebietSelect';
import AltersgruppeSelect from './FormFields/AltersgruppeSelect';
import GeschlechtSelect from './FormFields/GeschlechtSelect';
import EreignisortSelect from './FormFields/EreignisortSelect';
import VersorgungsartSelect from './FormFields/VersorgungsartSelect';
import EreignisartSelect from './FormFields/EreignisartSelect';
import PatientHarmSelect from './FormFields/PatientHarmSelect';
import ContributingFactorsSelect from './FormFields/ContributingFactorsSelect';
import WasIstPassiertTextarea from './FormFields/WasIstPassiertTextarea';
import WasWarDasErgebnisTextarea from './FormFields/WasWarDasErgebnisTextarea';
import GruendeUndVermeidungTextarea from './FormFields/GruendeUndVermeidungTextarea';
import EventFrequencySelect from './FormFields/EventFrequencySelect';
import ReporterProfessionSelect from './FormFields/ReporterProfessionSelect';
import AdditionalRemarksTextarea from './FormFields/AdditionalRemarksTextarea';

const CIRSAssistantTool: React.FC = () => {
  const [selectedFachgebiet, setSelectedFachgebiet] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedEreignisart, setSelectedEreignisart] = useState('');

  return (
    <div className="glass-effect p-6">
      <h2 className="text-2xl font-bold mb-4 flex items-center text-white">
        <ClipboardList className="mr-2" />
        Vorfallmeldung
      </h2>
      <form name="fall" method="POST" action="/.netlify/functions/hello-world" data-netlify="true" className="space-y-4">
        <input type="hidden" name="form-name" value="fall" />
        
        <ReporterProfessionSelect />
        <FachgebietSelect onValueChange={(value) => setSelectedFachgebiet(value)} />

        {selectedFachgebiet === 'anderes Fachgebiet' && (
          <div>
            <label htmlFor="anderesFachgebiet" className="block mb-2 font-medium text-white">Bitte geben Sie das andere Fachgebiet an</label>
            <input
              type="text"
              id="anderesFachgebiet"
              name="anderesFachgebiet"
              className="w-full p-2 border border-teal-300 rounded"
              required
            />
          </div>
        )}
        
        <AltersgruppeSelect />
        <GeschlechtSelect />
        <EreignisortSelect onValueChange={(value) => setSelectedLocation(value)} />

        {selectedLocation === 'anderer Ort' && (
          <div>
            <label htmlFor="andererOrt" className="block mb-2 font-medium text-white">Bitte geben Sie den anderen Ort an</label>
            <input
              type="text"
              id="andererOrt"
              name="andererOrt"
              className="w-full p-2 border border-teal-300 rounded"
              required
            />
          </div>
        )}

        <VersorgungsartSelect />
        <EreignisartSelect onValueChange={(value) => setSelectedEreignisart(value)} />

        {selectedEreignisart === 'anderer Kontext' && (
          <div>
            <label htmlFor="andererKontext" className="block mb-2 font-medium text-white">Bitte geben Sie den anderen Kontext an</label>
            <input
              type="text"
              id="andererKontext"
              name="andererKontext"
              className="w-full p-2 border border-teal-300 rounded"
              required
            />
          </div>
        )}

        <PatientHarmSelect />
        <ContributingFactorsSelect />
        <EventFrequencySelect />
        <WasIstPassiertTextarea />
        <WasWarDasErgebnisTextarea />
        <GruendeUndVermeidungTextarea />
        <AdditionalRemarksTextarea />

        <button type="submit" className="bg-white text-teal-700 px-6 py-2 rounded-full hover:bg-teal-50 transition-colors flex items-center justify-center w-full">
          <Send className="mr-2" size={18} />
          Meldung einreichen
        </button>
      </form>
    </div>
  );
};

export default CIRSAssistantTool;