#!/usr/bin/env node
/**
 * Übersetzungsscript für Condo Message Templates
 * 
 * Verwendung:
 *   node translate-messages.js [directory-name]
 * 
 * Beispiele:
 *   node translate-messages.js TICKET_CREATED
 *   node translate-messages.js BILLING_RECEIPT_ADDED
 */

const fs = require('fs')
const path = require('path')

const MESSAGES_DIR = path.join(__dirname, 'apps/condo/lang/de/messages')

// Einfaches Übersetzungs-Mapping für häufige Begriffe
const commonTranslations = {
  'Payment': 'Zahlung',
  'Ticket': 'Ticket',
  'Invoice': 'Rechnung',
  'Receipt': 'Beleg',
  'Meter': 'Zähler',
  'Reading': 'Ablesung',
  'Message': 'Nachricht',
  'Notification': 'Benachrichtigung',
  'Reminder': 'Erinnerung',
  'Warning': 'Warnung',
  'Error': 'Fehler',
  'Success': 'Erfolg',
  'Verify': 'Verifizieren',
  'Confirm': 'Bestätigen',
  'Cancel': 'Abbrechen',
  'Submit': 'Absenden',
  'Create': 'Erstellen',
  'Update': 'Aktualisieren',
  'Delete': 'Löschen',
  'Click': 'Klicken',
  'Link': 'Link',
  'Code': 'Code',
  'Password': 'Passwort',
  'Email': 'E-Mail',
  'Phone': 'Telefon',
  'App': 'App',
  'Account': 'Konto',
  'Organization': 'Organisation',
  'Property': 'Objekt',
  'Unit': 'Einheit',
  'Resident': 'Bewohner',
  'Employee': 'Mitarbeiter',
  'Invite': 'Einladung',
  'Check': 'Prüfen',
  'View': 'Anzeigen',
  'Details': 'Details',
}

function translateText(text) {
  // Einfache Ersetzung für häufige Begriffe
  let translated = text
  for (const [en, de] of Object.entries(commonTranslations)) {
    const regex = new RegExp(`\\b${en}\\b`, 'gi')
    translated = translated.replace(regex, de)
  }
  return translated
}

function processFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8')
  
  // Übersetze nur reinen Text (nicht Template-Variablen)
  const translated = content.replace(/([^{}]|[{][{][^}]+[}][{]|[{][^%][^}]*[}])+/g, (match) => {
    // Übersetze nur wenn es kein Template-Ausdruck ist
    if (match.includes('{{') || match.includes('{%')) {
      return match // Template-Code unverändert lassen
    }
    return translateText(match)
  })
  
  fs.writeFileSync(filePath, translated, 'utf8')
  console.log(`✅ ${path.basename(filePath)}`)
}

function processDirectory(dirName) {
  const dirPath = path.join(MESSAGES_DIR, dirName)
  
  if (!fs.existsSync(dirPath)) {
    console.error(`❌ Verzeichnis nicht gefunden: ${dirName}`)
    process.exit(1)
  }
  
  const files = fs.readdirSync(dirPath)
  
  for (const file of files) {
    if (file.endsWith('.njk')) {
      processFile(path.join(dirPath, file))
    }
  }
}

function listUntranslated() {
  const dirs = fs.readdirSync(MESSAGES_DIR)
  
  console.log('\n📋 Verzeichnisse mit .njk-Dateien:\n')
  
  for (const dir of dirs.sort()) {
    const dirPath = path.join(MESSAGES_DIR, dir)
    const stat = fs.statSync(dirPath)
    
    if (stat.isDirectory()) {
      const files = fs.readdirSync(dirPath).filter(f => f.endsWith('.njk'))
      if (files.length > 0) {
        console.log(`${dir} (${files.length} Dateien)`)
      }
    }
  }
  
  console.log('\n💡 Verwendung: node translate-messages.js [Verzeichnisname]')
}

// Hauptprogramm
const target = process.argv[2]

if (!target) {
  listUntranslated()
} else {
  processDirectory(target)
}
