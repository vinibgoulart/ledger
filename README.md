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

### Copy .env.example
```env
pnpm run copy:envs
```
After copying, fill in the variables

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
