-- Hotel Rex - Supabase preparation
-- Run this in the Supabase SQL editor when the project is ready.

create extension if not exists "pgcrypto";

create table if not exists public.profiles (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null unique references auth.users(id) on delete cascade,
  nombre text,
  apellido text,
  telefono text,
  email text,
  pais text,
  tipo_huesped text check (tipo_huesped in ('estudiante', 'turista', 'empresa', 'otro')),
  role text not null default 'user' check (role in ('user', 'admin')),
  created_at timestamptz not null default now()
);

create table if not exists public.inquiries (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete set null,
  nombre text,
  apellido text,
  email text,
  telefono text,
  pais text,
  habitacion_tipo text,
  cantidad_personas int,
  fecha_ingreso date,
  fecha_salida date,
  modalidad text,
  mensaje text,
  canal text check (canal in ('whatsapp', 'gmail', 'web')),
  idioma text,
  moneda text,
  created_at timestamptz not null default now()
);

create table if not exists public.reservations (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete set null,
  nombre text,
  apellido text,
  email text,
  telefono text,
  pais text,
  habitacion_tipo text,
  fecha_ingreso date,
  fecha_salida date,
  cantidad_personas int,
  modalidad text,
  estado text not null default 'pendiente' check (estado in ('pendiente', 'confirmada', 'cancelada')),
  mensaje text,
  created_at timestamptz not null default now()
);

alter table public.profiles enable row level security;
alter table public.inquiries enable row level security;
alter table public.reservations enable row level security;

create or replace function public.is_admin()
returns boolean
language sql
security definer
set search_path = public
as $$
  select exists (
    select 1 from public.profiles
    where user_id = auth.uid() and role = 'admin'
  );
$$;

create policy "profiles_select_own_or_admin"
on public.profiles for select
using (auth.uid() = user_id or public.is_admin());

create policy "profiles_insert_own"
on public.profiles for insert
with check (auth.uid() = user_id);

create policy "profiles_update_own_or_admin"
on public.profiles for update
using (auth.uid() = user_id or public.is_admin())
with check (auth.uid() = user_id or public.is_admin());

create policy "inquiries_select_own_or_admin"
on public.inquiries for select
using (auth.uid() = user_id or public.is_admin());

create policy "inquiries_insert_own_or_public"
on public.inquiries for insert
with check (user_id is null or auth.uid() = user_id);

create policy "reservations_select_own_or_admin"
on public.reservations for select
using (auth.uid() = user_id or public.is_admin());

create policy "reservations_insert_own_or_public"
on public.reservations for insert
with check (user_id is null or auth.uid() = user_id);

create policy "reservations_update_admin_only"
on public.reservations for update
using (public.is_admin())
with check (public.is_admin());
