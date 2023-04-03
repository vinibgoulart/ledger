# Ledger

## How to run

### Clone the repository
```bash
git clone git@github.com:antoniolopesg/ledger.git
cd ledger
```

### Install the dependencies
```bash
pnpm install
```

### Create .env based on .env.example variables
```env
// apps/server/.env
PORT=
MONGO_URI=
```

### Run bankAccount seeder
```bash
cd seed:bankaccount
pnpm run gen-schema
```

### Generate/Update the schema
```bash
cd apps/server
pnpm run gen-schema
```
