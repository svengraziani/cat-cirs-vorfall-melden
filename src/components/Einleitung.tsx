import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Zap, TrendingUp, Search, Users, Database, MessageSquare, BookOpen } from 'lucide-react';

const AccordionItem: React.FC<{ title: string; content: string; icon: React.ReactNode }> = ({ title, content, icon }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-teal-200">
      <button
        className="flex justify-between items-center w-full py-4 px-6 text-left hover:bg-teal-50 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-medium flex items-center">
          {icon}
          <span className="ml-2">{title}</span>
        </span>
        {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </button>
      {isOpen && <div className="p-6 bg-white bg-opacity-50">{content}</div>}
    </div>
  );
};

const Einleitung: React.FC = () => {
  return (
    <section id="ueber-uns" className="mb-12">
      <p className="mb-6 text-lg">
        Durch frühzeitige Identifizierung und gezielte Bewältigung von Risiken tragen wir dazu bei, dass die medizinische Versorgung stets höchsten Ansprüchen gerecht wird.
      </p>
      <h2 className="text-3xl font-bold mb-4 text-teal-700">
        Wie kann das CIRS Assistant Tool effektiv zur Optimierung der Patientensicherheit und zur kontinuierlichen Verbesserung der Versorgungsqualität beitragen
      </h2>
      <p className="mb-6 text-lg">
        Das CIRS Assistant Tool kann maßgeblich zur Verbesserung der Patientensicherheit beitragen, indem er mehrere zentrale Funktionen unterstützt, die auf Prävention, Fehleranalyse und systemische Verbesserungen abzielen. Hier sind konkrete Maßnahmen, wie das Tool die Patientensicherheit verbessern kann:
      </p>
      <div className="glass-effect rounded-lg">
        <AccordionItem
          title="Schnelle und präzise Fehlererfassung"
          content="Das CIRS Assistant Tool erleichtert die schnelle Erfassung von Zwischenfällen durch klare Formulare und benutzerfreundliche Schnittstellen. Dies sorgt dafür, dass mehr Vorfälle gemeldet werden und alle relevanten Informationen erfasst werden. Dabei können auch automatische Erinnerungen oder Checklisten eingebaut werden, um sicherzustellen, dass keine Informationen übersehen werden."
          icon={<Zap className="text-teal-500" size={20} />}
        />
        <AccordionItem
          title="Fehleranalyse und Trendermittlung"
          content="Das Tool ermöglicht eine strukturierte Analyse der gemeldeten Vorfälle. Durch die automatische Auswertung der Daten können häufige Fehlerquellen identifiziert und Trends aufgedeckt werden. Dies bietet die Grundlage für gezielte Interventionen, wie z. B. Schulungen oder Prozessänderungen, um wiederkehrende Probleme zu minimieren."
          icon={<TrendingUp className="text-teal-500" size={20} />}
        />
        <AccordionItem
          title="Unterstützung bei der Ursachenanalyse"
          content="Die strukturierte Ursachenanalyse ist ein zentraler Punkt im Risikomanagement. Das Tool kann mithilfe von standardisierten Modellen (wie der Ishikawa-Methode oder Root-Cause-Analysis) Fehlerursachen systematisch identifizieren und konkrete Verbesserungsvorschläge generieren."
          icon={<Search className="text-teal-500" size={20} />}
        />
        <AccordionItem
          title="Förderung einer positiven Fehlerkultur"
          content="Eine der wichtigsten Funktionen des CIRS Assistant Tools ist die Unterstützung einer fehlerfreundlichen Kultur. Durch die Möglichkeit der anonymen Berichterstattung und den Fokus auf lernende Prozesse statt Schuldzuweisungen werden Mitarbeiter ermutigt, Vorfälle offen zu melden. Dies erhöht die Meldebereitschaft und ermöglicht es, eine sichere und transparente Arbeitsumgebung zu schaffen."
          icon={<Users className="text-teal-500" size={20} />}
        />
        <AccordionItem
          title="Wissensmanagement und kontinuierliche Verbesserung"
          content="Das Tool kann eine Wissensdatenbank aufbauen, die vergangene Vorfälle, Lösungsvorschläge und Best-Practice-Beispiele sammelt. Dies ermöglicht es, bei neuen Vorfällen auf Erfahrungen aus der Vergangenheit zurückzugreifen und kontinuierlich die Patientenversorgung zu verbessern."
          icon={<Database className="text-teal-500" size={20} />}
        />
        <AccordionItem
          title="Erleichterte Kommunikation und Verteilung von Maßnahmen"
          content="Ein wesentlicher Aspekt ist die schnelle Kommunikation der Analyseergebnisse und die Verbreitung von Handlungsempfehlungen an das gesamte Team. Das Tool kann automatisch Berichte erstellen, die Ergebnisse und Verbesserungsvorschläge systematisch aufzeigen und an relevante Stellen kommunizieren. Regelmäßige Updates und Dashboard-Ansichten können sicherstellen, dass alle Mitarbeiter über aktuelle Maßnahmen zur Risikominderung informiert sind."
          icon={<MessageSquare className="text-teal-500" size={20} />}
        />
        <AccordionItem
          title="Schulung und Feedback"
          content="Das Tool kann genutzt werden, um Mitarbeiterschulungen gezielt auf die häufigsten Probleme auszurichten. Zudem ermöglicht es Feedback-Schleifen, bei denen das Personal regelmäßig Rückmeldungen zu den umgesetzten Verbesserungen und neuen Maßnahmen erhält."
          icon={<BookOpen className="text-teal-500" size={20} />}
        />
      </div>
    </section>
  );
};

export default Einleitung;