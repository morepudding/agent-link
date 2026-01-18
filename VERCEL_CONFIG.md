# Configuration Vercel avec Supabase

## Variables d'environnement

Votre projet est maintenant configuré pour utiliser les variables d'environnement Supabase.

### Variables disponibles dans `.env` :

```bash
SUPABASE_URL=https://pvjfmczdnlkrefrowrbj.supabase.co
SUPABASE_ANON_KEY=eyJhbGc...
SUPABASE_PUBLISHABLE_KEY=sb_publishable_...
DATABASE_URL=postgresql://postgres:...
SUPABASE_PROJECT_ID=pvjfmczdnlkrefrowrbj
SUPABASE_REGION=eu-west-1
```

### Pour déployer sur Vercel :

#### Option 1 : Via la CLI Vercel

```bash
# Installer Vercel CLI
npm i -g vercel

# Se connecter
vercel login

# Déployer et configurer les variables d'environnement
vercel --prod
```

Puis dans le dashboard Vercel :
1. Allez dans **Settings** > **Environment Variables**
2. Ajoutez toutes les variables du fichier `.env` :
   - `SUPABASE_URL`
   - `SUPABASE_ANON_KEY`
   - `SUPABASE_PUBLISHABLE_KEY`
   - `DATABASE_URL` (optionnel si vous utilisez uniquement l'API Supabase)
   - `SUPABASE_PROJECT_ID`
   - `SUPABASE_REGION`

#### Option 2 : Via le Dashboard Vercel

1. Connectez votre repository GitHub à Vercel
2. Dans **Project Settings** > **Environment Variables**, ajoutez toutes les variables
3. Cliquez sur **Deploy**

### Base de données

La table `map_config` a été créée avec succès dans votre projet Supabase :

```sql
CREATE TABLE map_config (
  id bigint primary key generated always as identity,
  districts jsonb not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);
```

### Scripts npm disponibles :

- `npm run init-db` : Initialise la base de données (si connexion directe)
- `npm start` : Lance l'application

### Informations du projet Supabase :

- **Nom** : agentlink
- **Projet ID** : pvjfmczdnlkrefrowrbj
- **Région** : eu-west-1
- **Statut** : ACTIVE_HEALTHY
- **URL API** : https://pvjfmczdnlkrefrowrbj.supabase.co

### Sécurité

- ⚠️ Le fichier `.env` est dans `.gitignore` et ne sera **jamais** commité
- 🔒 Utilisez `.env.example` comme template pour partager la structure
- 🔑 Les clés API sont sensibles - ne les partagez jamais publiquement

### Utilisation dans le code

```javascript
require('dotenv').config();

// Accéder aux variables
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_ANON_KEY;
const databaseUrl = process.env.DATABASE_URL;
```

### Prochaines étapes

1. Si vous n'avez pas encore un projet Vercel, créez-en un
2. Configurez les variables d'environnement sur Vercel
3. Déployez votre application
4. Testez que la connexion Supabase fonctionne en production
