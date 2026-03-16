# Deutsche Übersetzung für Condo

## Status

Vollständig übersetzt und produktionsbereit.

### Hauptübersetzung (de.json)
Vollständig übersetzt (900+ Schlüssel)

### Message-Templates (/messages/)
Vollständig übersetzt (142/142 Dateien)

## Umfang

Die deutsche Übersetzung umfasst alle Nachrichtentypen:

**Authentifizierung & Zugang**
- E-Mail- und SMS-Verifizierung
- Passwort zurücksetzen
- Mitarbeiter-Einladungen
- Service-User-Erstellung

**Ticket-System**
- Ticket-Erstellung und Status-Updates
- Kommentare und Zuweisungen
- Verantwortliche und Ausführende
- Telegram-Benachrichtigungen

**Abrechnung**
- Rechnungen (verfügbar, hinzugefügt, mit/ohne Schulden)
- Kategorien und Dateien
- Wiederkehrende Zahlungen (Erfolg, Fehler, Limits)
- Zahlungserinnerungen

**Zählerstände**
- Ableseerinnerungen (Beginn/Ende Periode)
- Eichfrist-Warnungen
- Abgelaufene Eichungen

**System & App**
- App-Updates (Bewohner & Mitarbeiter)
- Tägliche Statistiken
- Benachrichtigungen
- Push-Nachrichten

**Pass-Tickets**
- Gäste und Fahrzeuge
- Kommentare

**Sonstiges**
- Marketplace-Rechnungen
- VoIP-Anrufe
- Custom Content Messages
- Nachrichten-Weiterleitung an Support
- Bankkonten-Anfragen

## Integration

1. Die Sprache ist automatisch verfügbar (wird aus dem `lang/` Verzeichnis geladen)
2. Standard-Locale kann in `.env` gesetzt werden:
   ```
   DEFAULT_LOCALE=de
   ```
3. Keine weiteren Konfigurationsschritte erforderlich

## Qualität

- Fachterminologie Hausverwaltung korrekt übersetzt
- Template-Variablen unverändert
- Formale Anrede ("Sie")
- Deutsche Datumsformate
- MJML-E-Mail-Vorlagen vollständig übersetzt

## Dateien

- **de.json**: Hauptübersetzungsdatei (955 Zeilen)
- **messages/**: 142 Nunjucks-Template-Dateien (.njk)
- **translate-messages.js**: Helper-Script für Bulk-Übersetzungen (im Root-Verzeichnis)
