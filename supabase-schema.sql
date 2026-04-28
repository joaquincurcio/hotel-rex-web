-- Hotel Rex - Supabase reservations
-- Run this in Supabase > SQL Editor.

create extension if not exists "pgcrypto";

create table if not exists public.reservations (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  telefono text,
  tipo_habitacion text,
  personas int,
  ingreso date,
  salida date,
  modalidad text,
  estado text not null default 'pendiente',
  created_at timestamptz not null default now()
);

-- Safe to run if the table already existed from an earlier version.
alter table public.reservations add column if not exists nombre text;
alter table public.reservations add column if not exists telefono text;
alter table public.reservations add column if not exists tipo_habitacion text;
alter table public.reservations add column if not exists personas int;
alter table public.reservations add column if not exists ingreso date;
alter table public.reservations add column if not exists salida date;
alter table public.reservations add column if not exists modalidad text;
alter table public.reservations add column if not exists estado text not null default 'pendiente';
alter table public.reservations add column if not exists created_at timestamptz not null default now();

do $$
begin
  if not exists (
    select 1
    from pg_constraint
    where conname = 'reservations_estado_check'
      and conrelid = 'public.reservations'::regclass
  ) then
    alter table public.reservations
      add constraint reservations_estado_check
      check (estado in ('pendiente', 'confirmada', 'cancelada'));
  end if;
end $$;

alter table public.reservations enable row level security;

drop policy if exists "reservations_insert_public" on public.reservations;

create policy "reservations_insert_public"
on public.reservations
for insert
to anon
with check (true);
