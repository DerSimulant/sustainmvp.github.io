// Punktespeicherung für die Gesamtpunkte
let totalEnvironmentPoints = 0;
let totalSocialPoints = 0;
let totalFinancePoints = 0;

const levels = [
    {
        title: "Level 1: Energieeffizienz",
        scenario: "Dein Unternehmen betreibt eine Produktionsanlage mit Maschinen, die vor 10 Jahren installiert wurden. Diese Maschinen sind mittlerweile veraltet und haben einen hohen Energieverbrauch. Eine aktuelle Analyse zeigt, dass diese Maschinen im Vergleich zu moderneren Alternativen jährlich 25 % mehr Energie verbrauchen, was zu zusätzlichen Energiekosten von etwa 100.000 € pro Jahr führt. Die Kosten für neue, energieeffiziente Maschinen betragen 500.000 €, während gebrauchte Maschinen etwa 300.000 € kosten würden. Es gibt auch die Möglichkeit, die aktuellen Maschinen zu warten und zu optimieren, was jährliche Wartungskosten von 50.000 € und eine Reduktion des Energieverbrauchs um 10 % bedeuten würde.",
        options: [
            {
                text: "Sofortige Investition in die neueste energieeffiziente Maschine",
                impact: { environment: [2, 4, 5], social: [1, 3, 4], finance: [-5, 1, 4] }
            },
            {
                text: "Maschinen erst in 2 Jahren ersetzen, wenn mehr Kapital verfügbar ist",
                impact: { environment: [-1, -2, 3], social: [0, -1, 2], finance: [2, 0, -1] }
            },
            {
                text: "Aktuelle Maschinen behalten und jährliche Wartung verbessern",
                impact: { environment: [0, 1, 1], social: [1, 1, 1], finance: [1, 1, -1] }
            },
            {
                text: "Gebrauchte, aber energieeffizientere Maschinen kaufen",
                impact: { environment: [1, 3, 4], social: [1, 2, 2], finance: [-2, 1, 2] }
            },
            {
                text: "Leasing von energieeffizienten Maschinen anstelle von Kauf",
                impact: { environment: [1, 4, 5], social: [1, 3, 4], finance: [-1, -1, 2] }
            }
        ]
    },
    {
        title: "Level 2: Abfallmanagement",
        scenario: "Dein Unternehmen produziert eine erhebliche Menge an Abfallmaterialien durch seine Produktionsprozesse. Es gibt verschiedene Möglichkeiten, den Abfall zu reduzieren, zu verwalten und möglicherweise zu nutzen. Aktuell entstehen deinem Unternehmen jährliche Kosten von 200.000 € für die Entsorgung des Abfalls. Verschiedene Optionen stehen zur Verfügung, um die Abfallmenge zu reduzieren und die Abfallbewirtschaftung effizienter zu gestalten.",
        options: [
            {
                text: "Einführung eines umfassenden Recyclingsystems im gesamten Unternehmen",
                impact: { environment: [2, 4, 5], social: [1, 3, 4], finance: [-2, 2, 4] }
            },
            {
                text: "Verkauf von Abfallmaterialien an Recyclingunternehmen",
                impact: { environment: [1, 2, 3], social: [0, 1, 2], finance: [1, 2, 3] }
            },
            {
                text: "Entwicklung eines internen Programms zur Wiederverwendung von Materialien",
                impact: { environment: [2, 3, 5], social: [1, 3, 4], finance: [-3, 1, 4] }
            },
            {
                text: "Outsourcing des Abfallmanagements an ein spezialisiertes Unternehmen",
                impact: { environment: [1, 2, 3], social: [0, 1, 2], finance: [1, 2, 2] }
            },
            {
                text: "Implementierung eines Null-Abfall-Programms zur vollständigen Vermeidung von Abfall",
                impact: { environment: [3, 5, 6], social: [2, 4, 5], finance: [-4, 0, 5] }
            }
        ]
    },
    // Level 3: CO2-Reduktion hinzufügen
{
    title: "Level 3: CO2-Reduktion",
    scenario: "Dein Unternehmen hat eine jährliche CO2-Emission von 10.000 Tonnen. Aufgrund neuer regulatorischer Anforderungen und Unternehmensziele müssen diese Emissionen in den nächsten fünf Jahren um mindestens 30 % reduziert werden. Verschiedene Optionen stehen zur Verfügung, um dieses Ziel zu erreichen, von direkten Investitionen in CO2-reduzierende Technologien bis hin zu Verhaltensänderungen im Unternehmen.",
    options: [
        {
            text: "Komplette Umstellung auf erneuerbare Energien",
            impact: { environment: [3, 5, 6], social: [1, 3, 4], finance: [-5, -2, 4] }
        },
        {
            text: "Installation eines CO2-Ausgleichssystems durch Kauf von Emissionszertifikaten",
            impact: { environment: [1, 2, 3], social: [0, 1, 2], finance: [-2, -2, -2] }
        },
        {
            text: "Einführung eines Home-Office-Programms zur Reduzierung des Pendlerverkehrs",
            impact: { environment: [1, 3, 4], social: [2, 3, 4], finance: [-1, 2, 3] }
        },
        {
            text: "Investition in CO2-arme Technologien für die Produktion",
            impact: { environment: [2, 4, 5], social: [1, 2, 3], finance: [-4, 0, 4] }
        },
        {
            text: "Kompensation der Emissionen durch Aufforstungsprojekte",
            impact: { environment: [2, 3, 4], social: [1, 2, 3], finance: [-1, -1, -1] }
        }
    ]
},

// Level 4: Nachhaltige Lieferketten hinzufügen
{
    title: "Level 4: Nachhaltige Lieferketten",
    scenario: "Dein Unternehmen bezieht Rohstoffe und Produkte von verschiedenen Lieferanten weltweit. Bei einer Analyse wurde festgestellt, dass einige Lieferanten nicht den nachhaltigen Standards entsprechen, die das Unternehmen anstrebt. Dies könnte das Unternehmensimage schädigen und langfristig zu regulatorischen und finanziellen Risiken führen. Es gibt verschiedene Optionen, um die Lieferkette nachhaltiger zu gestalten.",
    options: [
        {
            text: "Einführung von Nachhaltigkeitskriterien für alle Lieferanten",
            impact: { environment: [1, 3, 5], social: [0, 2, 4], finance: [-2, -1, 3] }
        },
        {
            text: "Zusammenarbeit mit Lieferanten zur Verbesserung ihrer Umwelt- und Sozialpraktiken",
            impact: { environment: [2, 4, 5], social: [1, 3, 5], finance: [-3, -1, 2] }
        },
        {
            text: "Wechsel zu lokalen Lieferanten, um den CO2-Fußabdruck zu reduzieren",
            impact: { environment: [3, 4, 5], social: [1, 2, 3], finance: [-2, 0, 1] }
        },
        {
            text: "Etablierung eines Auditsystems für die Lieferkette, um Nachhaltigkeit zu überprüfen",
            impact: { environment: [2, 3, 4], social: [1, 2, 4], finance: [-3, -1, 2] }
        },
        {
            text: "Nutzung von nachhaltigen Materialien, auch wenn diese teurer sind",
            impact: { environment: [3, 5, 6], social: [1, 2, 4], finance: [-3, -2, 1] }
        }
    ]
},
// Level 5: Wasserverbrauch und -management hinzufügen
{
    title: "Level 5: Wasserverbrauch und -management",
    scenario: "Dein Unternehmen nutzt jährlich 500.000 Kubikmeter Wasser für Produktionsprozesse und allgemeine betriebliche Zwecke. Angesichts zunehmender Wasserknappheit und steigender Wasserkosten hat dein Unternehmen beschlossen, den Wasserverbrauch um mindestens 30 % zu reduzieren. Verschiedene Strategien stehen zur Verfügung, um dieses Ziel zu erreichen.",
    options: [
        {
            text: "Installation von Wasserspartechnologien in allen Unternehmensstandorten",
            impact: { environment: [2, 4, 5], social: [1, 2, 3], finance: [-4, 1, 4] }
        },
        {
            text: "Nutzung von Regenwassernutzungssystemen zur Reduktion des Frischwasserverbrauchs",
            impact: { environment: [2, 3, 4], social: [1, 2, 3], finance: [-2, 1, 3] }
        },
        {
            text: "Einführung eines Wassermanagementsystems zur Überwachung und Reduzierung des Wasserverbrauchs",
            impact: { environment: [1, 2, 3], social: [0, 1, 2], finance: [-1, 1, 2] }
        },
        {
            text: "Partnerschaften mit lokalen Gemeinschaften zur Verbesserung der Wasserversorgung und -qualität",
            impact: { environment: [1, 2, 3], social: [2, 3, 4], finance: [-3, -1, 2] }
        },
        {
            text: "Einsatz von recyceltem Wasser für nicht-trinkbare Zwecke",
            impact: { environment: [2, 3, 4], social: [1, 2, 3], finance: [-2, 1, 3] }
        }
    ]
},
// Level 6: Kreislaufwirtschaft hinzufügen
{
    title: "Level 6: Kreislaufwirtschaft",
    scenario: "Dein Unternehmen produziert verschiedene Produkte, die nach ihrer Lebensdauer oft auf Deponien landen oder verbrannt werden. Dies führt zu einer erheblichen Menge an Abfall und hohen Entsorgungskosten. Dein Unternehmen möchte auf ein kreislauforientiertes Geschäftsmodell umstellen, um die Lebensdauer der Produkte zu verlängern, Abfall zu minimieren und Rohstoffe effizienter zu nutzen.",
    options: [
        {
            text: "Einführung eines Rücknahmeprogramms für alte Produkte zur Wiederverwendung",
            impact: { environment: [2, 4, 5], social: [1, 2, 4], finance: [-3, 0, 3] }
        },
        {
            text: "Redesign der Produkte, um sie recyclingfähiger zu machen",
            impact: { environment: [3, 5, 6], social: [1, 3, 4], finance: [-4, -1, 4] }
        },
        {
            text: "Aufbau einer Plattform für den Verkauf gebrauchter und aufbereiteter Produkte",
            impact: { environment: [2, 3, 4], social: [2, 3, 3], finance: [-2, 1, 3] }
        },
        {
            text: "Investition in Technologie zur Wiederaufbereitung von Materialien",
            impact: { environment: [3, 5, 6], social: [1, 3, 4], finance: [-5, -2, 5] }
        },
        {
            text: "Keine Maßnahmen ergreifen und die derzeitige lineare Wirtschaft fortsetzen",
            impact: { environment: [0, -2, -4], social: [0, -1, -2], finance: [1, -1, -3] }
        }
    ]
},
// Level 7: Soziale Verantwortung und Menschenrechte hinzufügen
{
    title: "Level 7: Soziale Verantwortung und Menschenrechte",
    scenario: "Dein Unternehmen hat eine komplexe Lieferkette, die viele Länder und verschiedene soziale und regulatorische Umgebungen umfasst. Es gibt Bedenken hinsichtlich der Einhaltung von Menschenrechten bei einigen Lieferanten, insbesondere in Regionen mit weniger strengen Arbeitsgesetzen. Dein Unternehmen möchte sicherstellen, dass alle Lieferanten die internationalen Standards für Menschenrechte und Arbeitsbedingungen erfüllen.",
    options: [
        {
            text: "Einführung eines Verhaltenskodex für Lieferanten, der Menschenrechtsstandards beinhaltet",
            impact: { environment: [0, 1, 2], social: [2, 4, 5], finance: [-2, -1, 2] }
        },
        {
            text: "Durchführung regelmäßiger Audits zur Einhaltung der Menschenrechte in der Lieferkette",
            impact: { environment: [0, 1, 2], social: [3, 4, 5], finance: [-3, -2, 1] }
        },
        {
            text: "Zusammenarbeit mit NGOs zur Verbesserung der Arbeitsbedingungen in der Lieferkette",
            impact: { environment: [1, 2, 3], social: [3, 5, 6], finance: [-4, -2, 2] }
        },
        {
            text: "Implementierung eines Meldesystems für Menschenrechtsverletzungen",
            impact: { environment: [0, 1, 2], social: [2, 3, 4], finance: [-2, -1, 1] }
        },
        {
            text: "Keine Maßnahmen ergreifen und die Verantwortung den Lieferanten überlassen",
            impact: { environment: [0, -1, -3], social: [-2, -4, -5], finance: [1, -2, -4] }
        }
    ]
}
,



// Level 8: Umweltfreundliche Produktentwicklung hinzufügen
{
    title: "Level 8: Umweltfreundliche Produktentwicklung",
    scenario: "Dein Unternehmen entwickelt und produziert eine Vielzahl von Produkten, die derzeit konventionelle Materialien und Produktionsmethoden verwenden. Angesichts der zunehmenden Nachfrage nach nachhaltigen Produkten und der regulatorischen Anforderungen möchte dein Unternehmen umweltfreundlichere Produkte entwickeln und einführen.",
    options: [
        {
            text: "Nutzung von vollständig recycelbaren Materialien für das Produkt",
            impact: { environment: [3, 5, 6], social: [1, 2, 4], finance: [-4, -1, 3] }
        },
        {
            text: "Entwicklung eines Produkts, das leicht reparierbar und modular aufgebaut ist",
            impact: { environment: [2, 4, 5], social: [1, 3, 4], finance: [-3, 1, 3] }
        },
        {
            text: "Einsatz umweltfreundlicher Verpackungen, auch wenn diese teurer sind",
            impact: { environment: [2, 3, 4], social: [1, 2, 3], finance: [-2, -2, 0] }
        },
        {
            text: "Einführung eines Produkts mit geringerem Energieverbrauch in der Nutzung",
            impact: { environment: [3, 5, 6], social: [1, 2, 3], finance: [-4, 1, 3] }
        },
        {
            text: "Testen neuer Materialien in begrenzten Pilotprojekten, um das Risiko zu minimieren",
            impact: { environment: [1, 2, 4], social: [1, 2, 3], finance: [-1, 0, 2] }
        }
    ]
},
// Level 9: Biodiversität und Naturschutz hinzufügen
{
    title: "Level 9: Biodiversität und Naturschutz",
    scenario: "Dein Unternehmen hat erkannt, dass seine Geschäftstätigkeiten, insbesondere die Beschaffung von Rohstoffen und die Nutzung von Landflächen, negative Auswirkungen auf die lokale Biodiversität haben könnten. Um diesen negativen Einfluss zu verringern und einen Beitrag zum Naturschutz zu leisten, erwägt das Unternehmen verschiedene Strategien zur Förderung der Biodiversität und zum Schutz natürlicher Lebensräume.",
    options: [
        {
            text: "Teilnahme an einem Programm zur Wiederherstellung von Lebensräumen und Biodiversität",
            impact: { environment: [3, 5, 6], social: [2, 3, 4], finance: [-4, -2, 1] }
        },
        {
            text: "Einführung von Maßnahmen zur Reduktion des Einsatzes schädlicher Chemikalien",
            impact: { environment: [2, 4, 5], social: [1, 2, 3], finance: [-2, 1, 3] }
        },
        {
            text: "Durchführung von Umweltverträglichkeitsprüfungen vor jeder neuen Geschäftstätigkeit",
            impact: { environment: [2, 3, 4], social: [1, 2, 3], finance: [-3, -1, 2] }
        },
        {
            text: "Förderung von Biodiversitätsinitiativen in den Gemeinschaften, in denen das Unternehmen tätig ist",
            impact: { environment: [1, 3, 4], social: [2, 3, 4], finance: [-2, -2, 0] }
        },
        {
            text: "Kompensation von Biodiversitätsverlusten durch finanzielle Unterstützung von Naturschutzprojekten",
            impact: { environment: [2, 3, 5], social: [1, 2, 3], finance: [-1, -2, 0] }
        }
    ]
},
// Level 10: Governance und Transparenz hinzufügen
{
    title: "Level 10: Governance und Transparenz",
    scenario: "Dein Unternehmen hat erkannt, dass es die Governance- und Transparenzstrukturen verbessern muss, um die Nachhaltigkeitsziele zu erreichen und die Erwartungen der Stakeholder zu erfüllen. Dazu gehören Maßnahmen wie die Einführung eines Nachhaltigkeitskomitees, die regelmäßige Berichterstattung über Nachhaltigkeitsziele und die Implementierung von Kontrollsystemen zur Einhaltung von Nachhaltigkeitsstandards.",
    options: [
        {
            text: "Einführung eines Nachhaltigkeitskomitees im Vorstand",
            impact: { environment: [1, 2, 3], social: [2, 3, 4], finance: [-2, -1, 2] }
        },
        {
            text: "Veröffentlichung eines detaillierten jährlichen Nachhaltigkeitsberichts",
            impact: { environment: [1, 2, 3], social: [1, 2, 3], finance: [-1, -1, 1] }
        },
        {
            text: "Implementierung eines umfassenden internen Kontrollsystems für Nachhaltigkeit",
            impact: { environment: [2, 3, 4], social: [1, 2, 4], finance: [-3, 0, 2] }
        },
        {
            text: "Durchführung regelmäßiger externer Audits zur Bewertung der Nachhaltigkeitsleistung",
            impact: { environment: [1, 3, 4], social: [1, 3, 4], finance: [-2, -1, 1] }
        },
        {
            text: "Einführung eines Anreizsystems für Führungskräfte basierend auf Nachhaltigkeitszielen",
            impact: { environment: [2, 4, 5], social: [1, 3, 4], finance: [-2, -1, 2] }
        }
    ]
}









];

let currentLevelIndex = 0;

function displayLevel() {
    const levelContainer = document.getElementById('level-container');
    levelContainer.innerHTML = '';

    const level = levels[currentLevelIndex];
    const title = document.createElement('h2');
    title.textContent = level.title;
    levelContainer.appendChild(title);

    const scenario = document.createElement('p');
    scenario.textContent = level.scenario;
    levelContainer.appendChild(scenario);

    level.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.textContent = option.text;
        button.className = 'btn';
        button.onclick = () => selectOption(index);
        levelContainer.appendChild(button);
    });
}

function selectOption(optionIndex) {
    const selectedOption = levels[currentLevelIndex].options[optionIndex];

    // Punkte zur Gesamtsumme hinzufügen
    totalEnvironmentPoints += selectedOption.impact.environment.reduce((a, b) => a + b, 0);
    totalSocialPoints += selectedOption.impact.social.reduce((a, b) => a + b, 0);
    totalFinancePoints += selectedOption.impact.finance.reduce((a, b) => a + b, 0);

    const feedbackContainer = document.getElementById('feedback-container');
    feedbackContainer.innerHTML = `
        <p>Umweltpunkte: ${selectedOption.impact.environment.join(', ')}</p>
        <p>Sozialpunkte: ${selectedOption.impact.social.join(', ')}</p>
        <p>Finanzpunkte: ${selectedOption.impact.finance.join(', ')}</p>
    `;
}

function nextLevel() {
    currentLevelIndex++;
    if (currentLevelIndex < levels.length) {
        displayLevel();
        document.getElementById('feedback-container').innerHTML = '';
    } else {
        displayFinalResults();
    }
}

function displayFinalResults() {
    const levelContainer = document.getElementById('level-container');
    levelContainer.innerHTML = `
        <h2>Quiz abgeschlossen!</h2>
        <p>Gesamte Umweltpunkte: ${totalEnvironmentPoints}</p>
        <p>Gesamte Sozialpunkte: ${totalSocialPoints}</p>
        <p>Gesamte Finanzpunkte: ${totalFinancePoints}</p>
    `;
    document.getElementById('next-button').style.display = 'none';
}

document.addEventListener('DOMContentLoaded', displayLevel);