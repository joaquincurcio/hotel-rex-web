# Hotel Rex - Supabase Plan

## Etapa 4: autenticacion

Rutas previstas:

- `/login`
- `/registro`
- `/mi-cuenta`
- `/mi-cuenta/reservas`
- `/admin`
- `/admin/usuarios`
- `/admin/reservas`

El login sera opcional para no bloquear consultas por WhatsApp o email.

## Tablas

### profiles

- `id uuid primary key`
- `user_id uuid references auth.users(id)`
- `nombre text`
- `apellido text`
- `telefono text`
- `email text`
- `pais text`
- `tipo_huesped text`
- `role text default 'user'`
- `created_at timestamptz default now()`

### reservations

- `id uuid primary key`
- `user_id uuid references auth.users(id)`
- `nombre text`
- `apellido text`
- `email text`
- `telefono text`
- `pais text`
- `habitacion_tipo text`
- `fecha_ingreso date`
- `fecha_salida date`
- `cantidad_personas int`
- `modalidad text`
- `estado text default 'pendiente'`
- `mensaje text`
- `created_at timestamptz default now()`

### inquiries

- `id uuid primary key`
- `user_id uuid references auth.users(id)`
- `nombre text`
- `email text`
- `telefono text`
- `mensaje text`
- `idioma text`
- `moneda text`
- `created_at timestamptz default now()`

## Seguridad

- No guardar contrasenas manualmente.
- Usar Supabase Auth.
- Activar Row Level Security.
- Usuarios normales solo leen y modifican sus propios perfiles, consultas y reservas.
- Administradores pueden ver usuarios, consultas y reservas.
- `/admin` requiere usuario autenticado con `profiles.role = 'admin'`.

## Integracion futura

El formulario actual ya usa los campos necesarios para crear registros en `inquiries` y `reservations`.
En la siguiente etapa se reemplaza el envio local por una funcion que:

1. Lee la sesion de Supabase.
2. Autocompleta datos si existe perfil.
3. Guarda consulta/reserva.
4. Mantiene WhatsApp y email como canales rapidos de conversion.

## Archivos preparados

- `supabase-schema.sql`: tablas, checks, RLS y politicas iniciales.
- `auth.js`: flujo frontend actual con `localStorage`, preparado para reemplazar por Supabase Auth.
- `app.js`: autocompleta el formulario desde perfil local y guarda consultas/reservas locales si el usuario inicio sesion.

## Proximo paso tecnico

1. Crear proyecto Supabase.
2. Ejecutar `supabase-schema.sql`.
3. Agregar variables `SUPABASE_URL` y `SUPABASE_ANON_KEY`.
4. Reemplazar `localStorage` de auth por `supabase.auth`.
5. Reemplazar guardado local de consultas/reservas por inserts en `inquiries` y `reservations`.
