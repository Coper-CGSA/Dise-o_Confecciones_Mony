#!/usr/bin/env python3
"""
==============================================================================
  Confecciones Mony — Orquestador del sitio web
  Clases de Costura Personalizadas en Constitución, Chile
==============================================================================

Este orquestador en Python maneja todas las tareas del proyecto Next.js:
  - install : instala dependencias (bun install)
  - dev     : arranca el servidor de desarrollo (http://localhost:3000)
  - build   : genera el build de producción
  - start   : sirve el build de producción
  - lint    : ejecuta ESLint
  - db      : operaciones de base de datos (push/generate/migrate/reset)
  - clean   : limpia caches (.next, etc.)
  - status  : muestra el estado del proyecto
  - help    : muestra esta ayuda

Uso:
  python3 mony.py <comando> [argumentos]

Ejemplos:
  python3 mony.py install
  python3 mony.py dev
  python3 mony.py build
  python3 mony.py lint

Requisitos:
  - Python 3.9+
  - Bun (https://bun.sh) instalado y en PATH
  - Node.js 18+ (para Next.js)

------------------------------------------------------------------------------
"""

import os
import sys
import subprocess
import shutil
import platform
from pathlib import Path

# ---------------------------------------------------------------------------
# Configuración del proyecto
# ---------------------------------------------------------------------------
PROJECT_DIR = Path(__file__).resolve().parent
PORT = 3000
PACKAGE_MANAGER = "bun"  # bun | npm | pnpm | yarn


# ---------------------------------------------------------------------------
# Utilidades
# ---------------------------------------------------------------------------
def run(cmd: list[str], cwd: Path = PROJECT_DIR, env: dict | None = None) -> int:
    """Ejecuta un comando mostrando su salida en tiempo real."""
    print(f"\n▶ {' '.join(cmd)}\n")
    full_env = os.environ.copy()
    if env:
        full_env.update(env)
    return subprocess.call(cmd, cwd=str(cwd), env=full_env)


def find_package_manager() -> str:
    """Detecta el gestor de paquetes disponible."""
    for pm in (PACKAGE_MANAGER, "bun", "npm", "pnpm", "yarn"):
        if shutil.which(pm):
            return pm
    print("✗ No se encontró bun, npm, pnpm ni yarn. Instala uno primero.")
    sys.exit(1)


def header(title: str) -> None:
    line = "═" * 70
    print(f"\n{line}\n  {title}\n{line}")


# ---------------------------------------------------------------------------
# Comandos
# ---------------------------------------------------------------------------
def cmd_install(args: list[str]) -> None:
    """Instala las dependencias del proyecto."""
    header("Instalando dependencias")
    pm = find_package_manager()
    run([pm, "install"])
    print("\n✓ Dependencias instaladas.")


def cmd_dev(args: list[str]) -> None:
    """Arranca el servidor de desarrollo."""
    header(f"Servidor de desarrollo → http://localhost:{PORT}")
    pm = find_package_manager()
    env = {"PORT": str(PORT)}
    run([pm, "run", "dev"], env=env)


def cmd_build(args: list[str]) -> None:
    """Genera el build de producción."""
    header("Build de producción")
    pm = find_package_manager()
    run([pm, "run", "build"])
    print("\n✓ Build completado.")


def cmd_start(args: list[str]) -> None:
    """Sirve el build de producción."""
    header(f"Servidor de producción → http://localhost:{PORT}")
    pm = find_package_manager()
    env = {"NODE_ENV": "production", "PORT": str(PORT)}
    run([pm, "run", "start"], env=env)


def cmd_lint(args: list[str]) -> None:
    """Ejecuta ESLint."""
    header("Lint (ESLint)")
    pm = find_package_manager()
    run([pm, "run", "lint"])


def cmd_db(args: list[str]) -> None:
    """Operaciones de base de datos Prisma."""
    if not args:
        print("Uso: python3 mony.py db <push|generate|migrate|reset>")
        print("  push     — empuja el schema a la BD (SQLite)")
        print("  generate — genera el cliente Prisma")
        print("  migrate  — crea y aplica una migración")
        print("  reset    — resetea la BD (¡borra datos!)")
        return
    sub = args[0]
    pm = find_package_manager()
    mapping = {
        "push": ["run", "db:push"],
        "generate": ["run", "db:generate"],
        "migrate": ["run", "db:migrate"],
        "reset": ["run", "db:reset"],
    }
    if sub not in mapping:
        print(f"✗ Subcomando desconocido: {sub}")
        return
    header(f"Base de datos — prisma {sub}")
    run([pm] + mapping[sub])


def cmd_clean(args: list[str]) -> None:
    """Limpia caches y artefactos de build."""
    header("Limpiando caches")
    targets = [".next", ".turbo", "node_modules/.cache"]
    for t in targets:
        p = PROJECT_DIR / t
        if p.exists():
            shutil.rmtree(p)
            print(f"  ✓ eliminado {t}")
        else:
            print(f"  · omitido  {t} (no existe)")
    print("\n✓ Limpieza completada.")


def cmd_status(args: list[str]) -> None:
    """Muestra el estado del proyecto."""
    header("Estado del proyecto")
    pm = find_package_manager()
    print(f"  Proyecto:        {PROJECT_DIR.name}")
    print(f"  Gestor:          {pm}")
    print(f"  Puerto dev:      {PORT}")
    print(f"  Python:          {platform.python_version()}")
    print(f"  Plataforma:      {platform.system()} {platform.machine()}")

    # package.json
    pkg = PROJECT_DIR / "package.json"
    print(f"  package.json:    {'✓' if pkg.exists() else '✗'}")

    # node_modules
    nm = PROJECT_DIR / "node_modules"
    print(f"  node_modules:    {'✓ instalado' if nm.exists() else '✗ falta (ejecuta: install)'}")

    # .next
    nxt = PROJECT_DIR / ".next"
    print(f"  build (.next):   {'✓ existe' if nxt.exists() else '· sin build'}")

    # prisma
    schema = PROJECT_DIR / "prisma" / "schema.prisma"
    print(f"  prisma schema:   {'✓' if schema.exists() else '✗'}")

    # imágenes
    img_dir = PROJECT_DIR / "public" / "images"
    if img_dir.exists():
        count = len(list(img_dir.iterdir()))
        print(f"  imágenes:        {count} archivos en /public/images")

    # puerto en uso?
    port_in_use = _is_port_in_use(PORT)
    print(f"  puerto {PORT}:     {'ocupado (¿dev corriendo?)' if port_in_use else 'libre'}")


def _is_port_in_use(port: int) -> bool:
    import socket
    with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
        return s.connect_ex(("127.0.0.1", port)) == 0


def cmd_help(args: list[str]) -> None:
    """Muestra la ayuda."""
    print(__doc__)


# ---------------------------------------------------------------------------
# Tabla de comandos
# ---------------------------------------------------------------------------
COMMANDS: dict[str, tuple[callable, str]] = {
    "install": (cmd_install, "Instala dependencias"),
    "dev":     (cmd_dev,     "Arranca el servidor de desarrollo"),
    "build":   (cmd_build,   "Genera el build de producción"),
    "start":   (cmd_start,   "Sirve el build de producción"),
    "lint":    (cmd_lint,    "Ejecuta ESLint"),
    "db":      (cmd_db,      "Operaciones de base de datos (push/generate/migrate/reset)"),
    "clean":   (cmd_clean,   "Limpia caches (.next, etc.)"),
    "status":  (cmd_status,  "Muestra el estado del proyecto"),
    "help":    (cmd_help,    "Muestra esta ayuda"),
}


def main() -> None:
    args = sys.argv[1:]
    if not args or args[0] in ("-h", "--help"):
        cmd_help([])
        print("\nComandos disponibles:")
        for name, (_, desc) in COMMANDS.items():
            print(f"  {name:10s} — {desc}")
        return

    cmd = args[0]
    rest = args[1:]

    if cmd not in COMMANDS:
        print(f"✗ Comando desconocido: {cmd}")
        print(f"  Comandos válidos: {', '.join(COMMANDS.keys())}")
        sys.exit(1)

    fn, _ = COMMANDS[cmd]
    fn(rest)


if __name__ == "__main__":
    main()
