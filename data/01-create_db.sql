```bash
sudo -i -u postgres psql
```

```sql
CREATE ROLE blog with LOGIN PASSWORD 'blog';
CREATE DATABASE blog OWNER blog;
```